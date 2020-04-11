import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import GenerateData from '../components/GenerateData';

const data = GenerateData(100);

const renderLineChart = (
  <LineChart width={600} height={350} data={data}>
    <Line type="monotone" dataKey="NewRating" stroke="#8884d8"></Line>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default renderLineChart;
