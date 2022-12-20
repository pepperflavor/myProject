import * as SQLite from 'expo-sqlite';

// 로컬 db 즐겨찾기같은거 본인 디바이스에 저장할때
const database = SQLite.openDatabase('spot.db'); // db생성

export function init(){

    // tx : 쿼리 생성 전송시 필요
    database.transaction((tx)=>{
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imgURL TEXT NOT NULL,
            description TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL,
        )`,
        [],
        () => {}, // 성공시 콜백
        (_, error) => {}, // 실패시 콜백
        
     );
    });
}


// export const getSpotList(){

// }