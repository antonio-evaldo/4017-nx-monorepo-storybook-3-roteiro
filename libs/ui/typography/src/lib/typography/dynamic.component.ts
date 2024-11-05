import { Component, Input } from '@angular/core';

export type Size =
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
export class H1Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  template: `
    <h2 class="typography {{ size }}">
      <ng-content />
    </h2>
  `,
  styleUrl: './typography.component.css',
})
export class H2Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  template: `
    <h3 class="typography {{ size }}">
      <ng-content />
    </h3>
  `,
  styleUrl: './typography.component.css',
})
export class H3Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  template: `
    <h4 class="typography {{ size }}">
      <ng-content />
    </h4>
  `,
  styleUrl: './typography.component.css',
})
export class H4Component {
  @Input() size!: Size;
}

@Component({
  standalone: true,
  template: `
    <h5 class="typography {{ size }}">
      <ng-content />
    </h5>
  `,
  styleUrl: './typography.component.css',
})
export class H5Component {
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
export class SpanComponent {
  @Input() size!: Size;
}
