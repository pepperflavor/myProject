const Sequelize = requir("sequelize");

class User extends sql.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          // 시퀄라이즈 모델 안에 있는 데이터 타입을 사용해야함 꼭!
          // 그래서 가져온 시퀄라이즈 모듈 안에 있는 STRING 객체를 사용
          // 여기서 한거는 컬럼의 데이터 타입을 정한 것
          type: Sequelize.INTEGER,
          // allowNull 은 값이 무조건 있어야하는지 설정하는것.
          // null 기본값을 허용한다.
          allowNull: false,

          //기본키로 설정할 것인지
          primaryKey: true,

          unique: true,
          // 중복되지 않는 키
          // 주민번호나 전화번호 겹치지 않는 값들 혹여나 안겹치게
          autoIncrement: true,
        },
        nick_name: {
          type: Sequelize.STRING(50),
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        profile_img: {
          // multer로 이미지 받기
        },
      },
      {
        sequelize,
        timestamps: true,
        // underscored 시퀄라이즈는 기본적으로 userData 카멜표기법인데
        // 스테이크 표기법으로 바꿔주는 옵션 user_data

        underscored: true, // false : createdAt , true : created_at
        // 모델의 이름을 설정할 수 있다.
        modelName: "User", // 관계형으로 구성할 때 사용한다.
        tableName: "users", // 데이터베이스의 테이블 이름을 설정한다.

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
  // 1:N (foreignKey) 외래키
  static associate(db) {
    /*
    1:N 관계 (hasMany, belongsTo)
    시퀄라이즈에서 1:N 관계를 hasMany 함수로 정의한다.
    hasMany 함수를 이용해서 테이블의 관계를 정의해준다.
    첫번째 매개변수로 연결할 테이블
    sourceKey User 테이블 안에 무슨 키를 foreignKey와 연결할지
    hasMany (첫번째로 넘겨준 테이블이 foreignKey 연결되고 )
    db.User.hasMany(db.Rank, { foreignKey: "user_uid", sourceKey: "uid" });
    */
  }
}

module.exports = User;

