import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import GenerateData from '../components/GenerateData';
import {
  ratingColors
} from "../utils/ratingColors";
import ratingColorStyle from "../utils/ratingColorStyle";

const data = GenerateData(100);

const tooltipStyle = {
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
};

function ContestTooltip({ payload, label, active }) {
  if (active) {
    const contestName = payload[0].payload["ContestName"];
    const newRating = payload[0].payload["NewRating"];
    const performance = payload[0].payload["Performance"];

    return (
      <div className="contest-tooltip" style={tooltipStyle}>
        <div className="contest-tooltip-header" dividing="true">
          #{label}:{contestName}
        </div>
        <div className="new-rating" align="center">
          New rating:
          <span style={ratingColorStyle(newRating)}>{newRating}</span>
        </div>
        <div className="performance" align="center">
          Estimated performance:
          <span style={ratingColorStyle(performance)}>{performance}</span>
        </div>
      </div>
    );
  }

  return null;
}

const renderLineChart = (
  <ResponsiveContainer
    width="95%"
    height={360}
  >
    <LineChart
      data={data}
    >
      <Line
        type="monotone"
        dataKey="NewRating"
        stroke="#8884d8"
      >
      </Line>
      <CartesianGrid
        stroke="#ccc"
        strokeDasharray="5 5"
        horizontalFill={ratingColors}
        fillOpacity={0.2}
      />
      <XAxis
        dataKey=""
      />
      <YAxis
        domain={[dataMin => Math.max(0, dataMin - 200), 'dataMax + 200']}
        ticks={[0, 400, 800, 1200, 1600, 2000, 2400, 2800]}
      />
      <Tooltip
        cursor={{ strokeDasharray: '3 3' }}
        content={<ContestTooltip />}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default renderLineChart;
