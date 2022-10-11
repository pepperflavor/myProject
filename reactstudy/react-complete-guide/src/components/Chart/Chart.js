import React from 'react'
import './Chart.css'

import ChartBar from './ChartBar'

const Chart = (props) => {
  let barFillHeight = '0%';

  if(props.max > 0)

  return (  
    <div className="chart">
      {/* 배열에 담긴 값 map해서 가져오기 */}
      {props.dataPoint.map((dataPoint)=>(
          <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxVlaue={""}
              label={dataPoint.label}
          />
      ))}
    </div>
  );
};

export default Chart