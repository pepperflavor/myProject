const GOOGLE_API_KEY = 'AIzaSyCKpgxA2uuYhl8NKTo8t2lIfvFZJy3QlQQ'

// 위도 경도로 지도 url 구하는 함수
export function getMapPreview(lat, lng){
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`
    return imagePreviewUrl;
}

// 도로명주소로 바꿔주는 함수
export async function getAddress(lat, lng){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('Falied to fetch address!');
    }
    const data = await response.json();
    // 공식문서에 result는 배열형태로 반환, 사람이 사용하는 주소는 [0]에 들어있음
    const address = data.results[0].formatted_address;
    return address;
}

export function getSpotList(){
    
}



/* 구글맵 uri
    https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyB0RjcoDPPrQ3le5yFsDXyR7NWi6kHzYCk&signature=YOUR_SIGNATURE
*/