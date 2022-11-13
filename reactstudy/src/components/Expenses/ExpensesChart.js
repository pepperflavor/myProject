import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) =>{
    // 필터링 된 해당 연도의 값을 정리해서 value에 할당할 예정

    const chartDataPoints = [
        {label : 'Jan', value : 0},
        {label : 'Feb', value : 0},
        {label : 'Mar', value : 0},
        {label : 'Apr', value : 0},
        {label : 'May', value : 0},
        {label : 'Jun', value : 0},
        {label : 'Jul', value : 0},
        {label : 'Aug', value : 0},
        {label : 'Sep', value : 0},
        {label : 'Oct', value : 0},
        {label : 'Nov', value : 0},
        {label : 'Dec', value : 0},
    ]

    for(const expense in props.expenses){
        const expenseMonth = expense.date.getMonth(); // getMonth() : 0부터 시작한다. 그래서 위의 배열의 인덱스값으로도 사용ㅇㅇ
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return(
        <Chart dataPoints = {chartDataPoints}/>
    )
}