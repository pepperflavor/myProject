const Sequelize = require("sequelize");

class MyRoutine extends Sequelize.Model{
    static init(sequelize)
    {
        return super.init(
          {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,

              //기본키로 설정할 것인지
              primaryKey: true,

              unique: true,
              // 중복되지 않는 키
              // 주민번호나 전화번호 겹치지 않는 값들 혹여나 안겹치게
              autoIncrement: true,
            },
            body: {
              // 0이면 상체 1이면 하체
              type: Sequelize.TINYINT,
              allowNull: false,
            },
            set: {
              type: Sequelize.INTEGER,
            },
            amount: {
              type: Sequelize.INTEGER,
            },
            title: {
              type: Sequelize.STRING(50),
              allowNull: false,
            },
          },
          {
            sequelize,
            timestamps: true,
            // underscored 시퀄라이즈는 기본적으로 userData 카멜표기법인데
            // 스테이크 표기법으로 바꿔주는 옵션 user_data

            underscored: false, // false : createdAt , true : created_at
            // 모델의 이름을 설정할 수 있다.
            modelName: "MyRoutine", // 관계형으로 구성할 때 사용한다.
            tableName: "myroutines", // 데이터베이스의 테이블 이름을 설정한다.

            // 삭제했을때 삭제하는 대신 deletedAt 이 추가가 되고 숨긴다.
            paranoid: false,

            // charset, collate : 각각 밑에 처럼 설정해주면 한글이 입력가능해진다.
            // 이모티콘 쓸려면 utf8뒤에 mb4 씀

            // ㄴr 는 ㄱr 끔 눈물을 흘린ㄷr ... ☆

            charset: "utf8mb4",
            collate: "utf8mb4_general_ci",
          }
        );
    }
    static associate(db){
         // User 테이블의 id를 user_id라는 이름으로 갖고오겠다
        db.User.belongTo(db.User, {foreignKey : "user_id", targetKey : "id"});
    }
}

module.exports = MyRoutine;