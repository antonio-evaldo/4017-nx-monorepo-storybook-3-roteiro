import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura-teste/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  render: (args) => ({
    props: args,
    template: `
      <ab-typography ${argsToTemplate(args)}>
        Text
      </ab-typography>
    `,
  }),
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Title1: Story = {
  args: {
    type: 'title1',
  },
};

export const Title2: Story = {
  args: {
    ...Title1.args,
    type: 'title2',
  },
};

export const TextLarge: Story = {
  args: {
    type: 'normal',
  },
};

export const TextMedium: Story = {
  args: {
    ...TextLarge.args,
    size: 'md',
  },
};

export const Title2WithMediumSize: Story = {
  args: {
    ...Title2.args,
    size: 'md',
  },
};

export const Paragraph: Story = {
  args: {
    ...TextLarge.args,
  },
  render: () => ({
    template: `
      <p>
        <ab-typography>
          Texto do parágrafo
        </ab-typography>
      </p>
    `,
  }),
};
