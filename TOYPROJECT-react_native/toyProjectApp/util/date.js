// Date() 객체를 문자열로 반환해줌
export function dateStringFormatt(date){
    return `${date.getFullYear()} - ${date.getMonth() + 1} -${date.getDate()}`;
}