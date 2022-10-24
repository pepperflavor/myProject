import Category from "../models/category";
import SnsRoutine from "../models/snsRoutine";
import BoydyOption from '../models/bodyOption'


export const CATEGORIES = [
  new Category("c1", "MY ROUTINE", '#f5428d'),
  new Category("c2", "Share ROUTINE", '#f5a442'),
  new Category("c3", "MY SETTINGS", '#f5d142'),
  new Category("c4", "MY PROFILE", '#41d95d'),
  new Category("c5", "CHECK", '#368dff'),
];

//  id, title, amount, sets, date
export const SNSROUTINE = [
  new SnsRoutine("r1", "Lower Body", "Leg Press", 20, 3, "허벅지 자극이 제대로!", "2022-10-1"),
  new SnsRoutine("r2", "Lower Body", "Lunge", 16, 4, "엉덩이와 전체적인 유산소까지!", "2022-10-2"),
  new SnsRoutine("r3", "Lower Body", "Squat", 40, 4, "하체운동의 정수! 매일하세요" , "2022-10-2"),
  new SnsRoutine("r4", "Upper Body", "Bench Press", 15, 3, "나도 가질 수 있다 super대흉근!" ,"2022-10-10"),
  new SnsRoutine("r5", "Upper Body", "shoulder Press", 25, 2,"어깨 운동은 역시 이거죠" ,"2022-10-11"),
  new SnsRoutine("r6", "Upper Body", "Back Extension", 40, 3,"등운동도 함께 해야 자세가 좋아집니다","2022-10-19"),
];


export const BODYOPTION = [
  new BoydyOption("m1", "Upper Body"),
  new BoydyOption("m2", "Lower Body"),
];