import type { Meta, StoryObj } from "@storybook/react";
import BarChart from "src/components/BarChart";

const meta: Meta<typeof BarChart> = {
  title: "BarChart",
  component: BarChart,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Chart: Story = {
  args: {
    data: [
      {
        chartLabel: "Dataset 1",
        values: [1, 3, 4, 1],
        labels: ["x1", "x2", "x3", "x4"],
      },
      {
        chartLabel: "Dataset 2",
        values: [5, 6, 3, 2],
        labels: ["x1", "x2", "x3", "x4"],
      },
    ],
    caption: "BarChart",
    yScale: "y scale",
    xScale: "x scale",
  },
};
