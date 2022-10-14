import "./RoutineFilter.css"

const RoutineFilter = (props)=>{
    // 선택한 연도 값 위로 올려주는 함수 
    const filterChangeHandler = (event) =>{
        props.onChangeYearFilter(event.target.value)
        const selectedMonth = event.target.value;
    }

    const monsthFilterChangeHandler = (event) =>{
        props.onChangeMonthFilter(event.target.value)
        const selectedMonth = event.target.value;
    }


    return(
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by Year</label>
          <select value={props.filteredYear} onChange={filterChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
          <label>Filter by Month</label>
          <select value={props.filteredMonth} onChange={monsthFilterChangeHandler}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
        </div>
      </div>
    )
}

export default RoutineFilter