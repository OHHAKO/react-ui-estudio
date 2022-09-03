import colors from "../styles/variable.module.scss";
import React from "react";
import { VictoryArea } from "victory";

function Chart(): React.ReactElement {
  const data = [
    { quarter: 1, earnings: 200 },
    { quarter: 2, earnings: 500 },
    { quarter: 3, earnings: 150 },
    { quarter: 4, earnings: 700 },
    { quarter: 5, earnings: 500 },
    { quarter: 6, earnings: 950 },
    { quarter: 7, earnings: 400 },
  ];

  return (
    <VictoryArea
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      style={{
        data: {
          fill: colors.green,
          stroke: colors.deepgreen,
          strokeWidth: 2,
        },
      }}
      events={[
        {
          target: "data",
          eventHandlers: {
            onClick: () => {
              return [
                {
                  eventKey: "all",
                },
              ];
            },
          },
        },
      ]}
      data={data}
      x={"quarter"}
      y={"earnings"}
    />
  );
}

export default Chart;
