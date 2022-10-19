// index.js가 model 안에 model js파일들을 모아서 사용하는 곳
const Sequelize = require("sequelize");

const {config} = require("../config/config");
const User = require("./users");
const MyRoutine = require("./myroutine");
const RankRoutine = require("./rankroutine")

const { database, username, password } = config.dev;

const sequelize = new Sequelize(database, username, password, config.dev);

// 내보내기 위한 빈객체
const db = {};

db.sequelize = sequelize;
db.User = User;

db.MyRoutine = MyRoutine;
db.RankRoutine = RankRoutine;

User.init(sequelize);
MyRoutine.init(sequelize);
RankRoutine.init(sequelize);


// 관계형 맺어주는 함수
User.associate(db);
MyRoutine.associate(db);
//RankRoutine.associate(db); 관계형 추가후에 주석풀

module.exports = db;