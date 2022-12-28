// Date() 객체를 문자열로 반환해줌
export function dateStringFormatt(date){
    return `${date.getFullYear()} - ${date.getMonth() + 1} -${date.getDate()}`;
}


// n일 전의 날짜 얻는 함수
export function getDateMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()- days)
}