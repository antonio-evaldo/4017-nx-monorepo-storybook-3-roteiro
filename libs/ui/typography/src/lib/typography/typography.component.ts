import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

type Text =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'normal';

type Size =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs';

@Component({
  standalone: true,
  template: `
    <h1 class="typography {{ size }}">
      <ng-content />
    </h1>
  `,
  styleUrl: './typography.component.css',
})
class H1Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  template: `
    <span class="typography {{ size }}">
      <ng-content />
    </span>
  `,
  styleUrl: './typography.component.css',
})
class SpanComponent {
  @Input() size!: Size;
}

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent implements OnInit {
  @Input() type: Text = 'normal';
  @Input() size!: Size;

  get inputs() {
    return { size: this.size };
  }

  @ViewChild('template', { static: true }) template!: TemplateRef<unknown>;

  component: any;

  dynamicComponentContent!: any[][];

  private componentsMap = {
    title1: H1Component,
    title2: SpanComponent,
    title3: SpanComponent,
    subtitle1: SpanComponent,
    subtitle2: SpanComponent,
    normal: SpanComponent,
  } satisfies { [key in Text]: any };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.component = this.componentsMap[this.type];

    const templateContent = this.viewContainerRef.createEmbeddedView(
      this.template
    ).rootNodes;

    this.dynamicComponentContent = [templateContent];
  }
}
