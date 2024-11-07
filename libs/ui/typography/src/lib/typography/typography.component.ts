import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Size,
  H1Component,
  H2Component,
  H3Component,
  H4Component,
  H5Component,
  SpanComponent,
} from './dynamic.component';

type Text =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'subtitle1'
  | 'subtitle2'
  | 'normal';

@Component({
  selector: 'ab-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css',
})
export class TypographyComponent implements OnInit {
  @Input() variant: Text = 'normal';
  @Input() size!: Size;

  get inputs() {
    return { size: this.size };
  }

  @ViewChild('template', { static: true }) template!: TemplateRef<unknown>;

  component: any;

  dynamicComponentContent!: any[][];

  private componentsMap = {
    title1: H1Component,
    title2: H2Component,
    title3: H3Component,
    subtitle1: H4Component,
    subtitle2: H5Component,
    normal: SpanComponent,
  } satisfies { [key in Text]: any };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.component = this.componentsMap[this.variant];

    const templateContent = this.viewContainerRef.createEmbeddedView(
      this.template
    ).rootNodes;

    this.dynamicComponentContent = [templateContent];
  }
}
