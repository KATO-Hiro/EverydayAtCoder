import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme: Theme) => ({
  contestTooltipHeader: {
    dividing: "true",
  },
  newRating: {
    align: "center",
  },
  performance: {
    align: "center",
  },
}));

function ContestTooltip({ payload, label, active }: any) {
  const classes = useStyles();

  if (active) {

    const contestName = payload[0].payload["ContestName"];
    const newRating = payload[0].payload["NewRating"];
    const performance = payload[0].payload["Performance"];

    return (
      <div className="contest-tooltip" style={tooltipStyle}>
        <div className={classes.contestTooltipHeader}>
          #{label}:{contestName}
        </div>
        <div className={classes.newRating}>
          New rating:
          <span style={ratingColorStyle(newRating)}>{newRating}</span>
        </div>
        <div className={classes.performance}>
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
