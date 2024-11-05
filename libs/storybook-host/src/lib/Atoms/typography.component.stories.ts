import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Title1: Story = {
  args: {
    type: 'title1',
  },
  render: (args) => ({
    props: args,
    /* 
      class ComponenteExternoTitle1 {
        @Input() type = 'title1'
      }
    */
    template: `
      <ab-typography ${argsToTemplate(args)}>
        Text
      </ab-typography>
    `,
  }),
};
