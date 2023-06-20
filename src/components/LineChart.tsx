import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { BACKGROUND_COLORS, BORDER_COLORS } from "src/constants/graphColors";
import { useId } from "react";
import { Line } from "react-chartjs-2";
import ChartWrapper from "./ChartWrapper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const LineChart: React.FunctionComponent<{
  data: any;
  caption: string;
  yScale: string;
  xScale: string;
}> = ({ data, caption, yScale, xScale }) => {
  const options = {
    // shows info for all sets at the same index on hover
    interaction: {
      mode: "index" as const,
      intersect: true,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xScale,
        },
      },
      y: {
        title: {
          display: true,
          text: yScale,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          boxHeight: 14,
          boxWidth: 14,
          font: {
            size: 14,
          },
        },
      },
    },
    elements: {
      point: {
        hoverBorderWidth: 3,
        hoverRadius: 5,
      },
    },
  };

  const sets = data.map((set, i) => ({
    type: "line" as const,
    label: set.chartLabel,
    data: set.values,
    borderColor: BORDER_COLORS[i],
    backgroundColor: BACKGROUND_COLORS[i],
    cubicInterpolationMode: "monotone" as const,
    borderWidth: 2,
  }));

  const chartData = {
    labels: data[0].labels,
    datasets: sets,
  };

  return (
    <ChartWrapper caption={caption}>
      <Line
        data={chartData}
        options={options}
        aria-label={caption}
        role="img"
        id={`canvas-${useId()}`}
      />
    </ChartWrapper>
  );
};

export default LineChart;
