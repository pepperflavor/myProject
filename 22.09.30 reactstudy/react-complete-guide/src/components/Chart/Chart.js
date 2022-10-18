import React from 'react'
import './Chart.css'

import ChartBar from './ChartBar'

const Chart = (props) => {
  // 차트에 표시할 최대 값을 구해야함
  // 특정 값들만 추출 & 숫자로 변환
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value); // 배열임
  
  // max() 인자로 숫자를 넣어야함, 인자중 가장 큰 값을 반환함
  // 숫자를 인자로 넣어야하기때문에 Math.max(...dataPointValue);  스프레드 연산자로 12개의 인수를 넣음
  const totalMaximum = Math.max(...dataPointValue); 

  return (  
    <div className="chart">
      {/* 배열에 담긴 값 map해서 가져오기 */}
      {props.dataPoint.map((dataPoint)=>(
          <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxVlaue={totalMaximum}
              label={dataPoint.label}
          />
      ))}
    </div>
  );
};

export default Chart