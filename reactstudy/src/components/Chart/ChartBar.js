import React from 'react'

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if(props.max >0){
    //  Math.round() : 가장 근접한 값의 정수로 반올림된 숫자를 반환한다  
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height : barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar