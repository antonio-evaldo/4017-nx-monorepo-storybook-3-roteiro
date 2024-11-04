import type { Meta, StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Title1: Story = {
  args: {},
  render: () => ({
    template: `
      <ab-typography>
        Text
      </ab-typography>
    `,
  }),
};
