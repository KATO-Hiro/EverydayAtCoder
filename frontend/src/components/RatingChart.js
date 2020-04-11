import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [{name: 'Page A', uv: 400, pv:2400, amt: 2400},
              {name: 'Page B', uv: 420, pv:2000, amt: 2300},
              {name: 'Page C', uv: 380, pv:2000, amt: 2100},
              {name: 'Page D', uv: 360, pv:2200, amt: 1900},
              {name: 'Page E', uv: 450, pv:2600, amt: 1600},
             ];

const renderLineChart = (
  <LineChart width={600} height={350} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default renderLineChart;
