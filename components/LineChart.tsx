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
import { BACKGROUND_COLORS, BORDER_COLORS } from "constants/graphColors";
import { Line } from "react-chartjs-2";

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
    <div className="px-20">
      <h4 className="text-gray-700 p-10 font-bold text-xl text-center">
        {header}
      </h4>
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <div>Ooops. Something went wrong :(</div>
      )}
    </div>
  );
};

export default LineChart;
