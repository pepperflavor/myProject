import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label : 'Jan', value :0 },
        { label : 'Feb', value :0 },
        { label : 'Mar', value :0 },
        { label : 'Apr', value :0 },
        { label : 'May', value :0 },
        { label : 'Jun', value :0 },
        { label : 'Jul', value :0 },
        { label : 'Aug', value :0 },
        { label : 'Sep', value :0 },
        { label : 'Oct', value :0 },
        { label : 'Nov', value :0 },
        { label : 'Dec', value :0 },
    ];

    // 배열에는 of
    for(const expense of props.expense){
        const expenseMonth = expense.date.getMonth(); // 0~11까지의 인덱스
        chartDataPoints[expenseMonth].value += expense.amount;
    }

  return (

        <Chart dataPoints={chartDataPoints}/>
  )
}

export default ExpensesChart