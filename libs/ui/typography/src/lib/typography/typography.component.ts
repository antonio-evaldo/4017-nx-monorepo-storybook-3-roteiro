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

@Component({
  standalone: true,
  template: `
    <h1>
      <ng-content />
    </h1>
  `,
  styleUrl: './typography.component.css',
})
class H1Component {}

@Component({
  standalone: true,
  template: `
    <span>
      <ng-content />
    </span>
  `,
  styleUrl: './typography.component.css',
})
class SpanComponent {}

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent implements OnInit {
  @Input() type: Text = 'normal';

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
