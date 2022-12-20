//장소 더미

// 전달할 스팟 데이터 
export class Spot{
    constructor(title, imgURL, location, description){
        this.title = title;
        this.imgURL = imgURL;
        this.address = location.address;
        this.location = {lat : location.lat, lng: location.lng }; // 위치 경도
        this.description = description; // 설명
        this.id = new Date().toString() + Math.random().toString(); // db없으니 일단 고유 아이디 만들어줌
    }
}