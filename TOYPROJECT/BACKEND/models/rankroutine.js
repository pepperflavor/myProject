const Sequelize = require("sequelize");

class RankRoutine extends Sequelize.Model{
     static init(sequelize){
         return super.init(
           {
             id: {
               type: Sequelize.INTEGER,
               allowNull: false,
               primaryKey: true,
               unique: true,
               autoIncrement: true,
             },
             thumb_up: {
               type: Sequelize.INTEGER,
             },
           },
           {
             sequelize,
             timestamps: true,
             underscored: true,
             modelName: "RankRoutine",
             tableName: "rankroutines",
             paranoid: false,
             charset: "utf8mb4",
             collate: "utf8mb4_general_ci",
           }
         );
     }
     static associate(db){

     }
}

module.exports = RankRoutine;