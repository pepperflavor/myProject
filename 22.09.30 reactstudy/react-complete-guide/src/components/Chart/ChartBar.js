import React from 'react'
import './ChartBar.css';

const ChartBar = (props) => {

  let barFillHeight = '0%';

  if(props.maxVlaue > 0){
    barFillHeight = Math.random((props.value / props.maxVlaue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height : barFillHeight, backgroundColor : 'red' }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar