import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import GenerateData from '../components/GenerateData';
import {
  ratingColors
} from "../utils/ratingColors";

const data = GenerateData(100);

const renderLineChart = (
  <LineChart width={600} height={350} data={data}>
    <Line type="monotone" dataKey="NewRating" stroke="#8884d8"></Line>
    <CartesianGrid
      stroke="#ccc"
      strokeDasharray="5 5"
      horizontalFill={ratingColors}
      fillOpacity={0.2}
    />
    <XAxis dataKey="" />
    <YAxis
      domain={[dataMin => Math.max(0, dataMin - 200), 'dataMax + 200']}
      ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
    />
    <Tooltip />
  </LineChart>
);

export default renderLineChart;
