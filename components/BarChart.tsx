import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BACKGROUND_COLORS, BORDER_COLORS } from "constants/graphColors";
import { useId } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FunctionComponent<{
  data: any;
  caption: string;
  yScale: string;
  xScale: string;
}> = ({ data, caption, yScale, xScale }) => {
  const options = {
    elements: {
      bar: {
        borderRadius: 5,
        borderSkipped: "bottom" as const,
      },
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
  };

  const sets = data.map((set, i) => ({
    type: "bar" as const,
    label: set.chartLabel,
    data: set.values,
    borderColor: BORDER_COLORS[i],
    backgroundColor: BACKGROUND_COLORS[i],
    borderWidth: 2,
  }));

  const chartData = {
    labels: data[0].labels,
    datasets: sets,
  };

  return (
    <figure>
      <figcaption className="text-gray-700 px-10 text-center">
        {caption}
      </figcaption>
      <Bar
        data={chartData}
        options={options}
        aria-label={caption}
        role="img"
        id={`canvas${useId()}`}
      />
    </figure>
  );
};

export default BarChart;
