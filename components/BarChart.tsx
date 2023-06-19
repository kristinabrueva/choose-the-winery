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
  header: string;
  yScale: string;
  xScale: string;
}> = ({ data, header, yScale, xScale }) => {
  const options = {
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
    layout: {
      padding: 0,
    },
    plugins: {
      title: {
        display: false,
        text: header,
      },
    },
  };

  const sets = data.map((set, i) => ({
    type: "bar" as const,
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
    <div className="px-20">
      <h4 className="text-gray-700 p-10 font-bold text-xl text-center">
        {header}
      </h4>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <div>Ooops. Something went wrong :(</div>
      )}
    </div>
  );
};

export default BarChart;
