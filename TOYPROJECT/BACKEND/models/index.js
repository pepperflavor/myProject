// index.js가 model 안에 model js파일들을 모아서 사용하는 곳
const Sequelize = require("sequelize");

const {config} = require("../config/config");
const User = require("./users");
const MyRoutine = require("./myroutine");

const { database, username, password } = config.dev;

const sequelize = new Sequelize(database, username, password, config.dev);

// 내보내기 위한 빈객체
const db ={};

db.sequelize = sequelize;
db.User = User;
db.MyRoutine = MyRoutine;

User.init(sequelize);
MyRoutine.init(sequelize);


// 관계형 맺어주는 함수
User.associate(db);
MyRoutine.init(db);

module.exports = db;