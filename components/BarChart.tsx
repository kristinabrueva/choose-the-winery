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
}> = ({ data }) => {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Days",
        },
      },
    },
    layout: {
      padding: 0,
    },
    plugins: {
      title: {
        display: false,
        text: "Grape Days",
      },
    },
  };

  const borderColors = [
    "rgba(238 130 238)",
    "rgba(30 130 238)",
    "rgba(30 30 238)",
    "rgba(230 30 38)",
    "rgba(30 130 2)",
  ];

  const bgColors = [
    "rgba(238 130 238 / 0.7)",
    "rgba(30 130 238 / 0.7)",
    "rgba(30 30 238 / 0.7)",
    "rgba(230 30 38 / 0.7)",
    "rgba(30 130 2 / 0.7)",
  ];

  const sets = data.map((set, i) => ({
    type: "bar" as const,
    label: set.chartLabel,
    data: set.values,
    borderColor: borderColors[i],
    backgroundColor: bgColors[i],
    cubicInterpolationMode: "monotone" as const,
    borderWidth: 1,
  }));

  const chartData = {
    labels: data[0].labels,
    datasets: sets,
  };

  return (
    <div className="p-5">
      <h4 className="p-5 font-semibold text-2xl text-center">
        Good Days for Grapes
      </h4>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
