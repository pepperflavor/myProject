import Category from "../models/category";
import SnsRoutine from "../models/snsRoutine";
import BasicMenu from "../models/basicMenu";


export const CATEGORIES = [
    new Category("c1", "초보자를 위한 상체운동", "#f5428d"),
    new Category("c2", "초보자를 위한 하체운동", "#f54242"),
    new Category("c3", "치팅데이 후 열량 태우기!", "#f5a442"),
    new Category("c4", "중급자를 위한 상체운동", "#f5d142"),
    new Category("c5", "중급자를 위한 하체운동", "#368dff"),
    new Category("c6", "헬린이를 위한 기초루틴", "#41d95d"),
    new Category("c7", "식단에 관한 팁", "#9eecff"),
    new Category("c8", "프로틴은 언제 먹을까?", "#b9ffb0"),
    new Category("c9", "중량은 언제 늘릴까?", "#ffc7ff"),
    new Category("c10", "스트레칭 가이드", "#47fced")
];

//id, categoryIds, title, body, explanation
export const BASICMENU = [
  new BasicMenu(
        "b1",
        [
            "c1", "c4"
        ],
        "Lat pull down",
        "Upper body",
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "어깨넓이보다 더 넓게 와이드그립을 해주신 후 가슴을 활짝 펴고 하늘 쪽으로 살짝 보게끔 아주 살짝 뒤쪽으로 각도를 누워주세요. 그 후에 팔꿈" +
            "치를 옆구리 붙인다고 생각하시고 당기신 후 천천히 무게를 느끼며 풀어 주시면 됩니다."
    ),
new BasicMenu(
    "b2",
    [
        "c2", "c5"
    ],
    "Leg press",
    "Lower body",
    "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "머신에 앉아 엉덩이와 어깨를 벤치에 고정시켜 앉습니다. 양발은 어깨 너비만큼 벌려 발판에 완전히 대주세요.무릎은 가슴에 바짝 붙인 상태에서 " +
            "시작하는 것이 좋습니다.무릎을 천천히 펴면서 허벅지의 힘으로 머신을 들어올리고, 다시 천천히 주저앉는다는 느낌으로 구부려주세요.발 뒤꿈치로 " +
            "머신의 무게를 지탱하는 것처럼 동작을 반복하시면 됩니다.레그프레스를 실시할 때에는 무릎을 완전히 펴지 않는 것이 좋아요.지속적인 자극을 주기" +
            " 위해서는 항상 긴장 상태를 유지하는 것이 필요하고, 무릎을 살짝 구부려 허벅지의 긴장을 유도한다면 근육이 더욱 단단해지기 때문이에요.따라서" +
            " 운동 효과를 극대화시키려면 무릎의 각도를 일정하게 해주시구요.안전성 확보를 위해 등과 허리, 엉덩이를 벤치에 꼭 붙여주세요."
),
new BasicMenu(
    "b3",
    ["c3"],
    "열량을 태우는 플랭크!",
    "Both body",
    "https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "머신에 앉아 엉덩이와 어깨를 벤치에 고정시켜 앉습니다. 양발은 어깨 너비만큼 벌려 발판에 완전히 대주세요.무릎은 가슴에 바짝 붙인 상태에서 " +
            "시작하는 것이 좋습니다.무릎을 천천히 펴면서 허벅지의 힘으로 머신을 들어올리고, 다시 천천히 주저앉는다는 느낌으로 구부려주세요.발 뒤꿈치로 " +
            "머신의 무게를 지탱하는 것처럼 동작을 반복하시면 됩니다 레그프레스를 실시할 때에는 무릎을 완전히 펴지 않는 것이 좋아요.지속적인 자극을 주기" +
            " 위해서는 항상 긴장 상태를 유지하는 것이 필요하고, 무릎을 살짝 구부려 허벅지의 긴장을 유도한다면 근육이 더욱 단단해지기 때문이에요.따라서" +
            " 운동 효과를 극대화시키려면 무릎의 각도를 일정하게 해주시구요.안전성 확보를 위해 등과 허리, 엉덩이를 벤치에 꼭 붙여주세요."

),
new BasicMenu(
    "b4",
    ["c5"],
    "Sumo Deadlift",
    "Lower body",
    "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "마치 스모처럼 다리를 넓게 벌리고 주저앉은 형태로 시작한다. 자연히 상체가 좀 더 세워지며 허리에 부담이 줄어들고 둔근의 힘을 동원하기 용이" +
            "하다. 이런 스쿼트에 조금 가까워진 특징 때문에 경우에 따라서는 등이 아닌 하체 루틴에 넣어서 진행하기도 한다. 컨벤셔널 데드리프트에 비해 " +
            "바벨을 들어올리는 높이가 낮아지고, 가늘고 긴 근육인 척추 기립근보다 큰 근육인 둔근의 힘을 더 많이 동원하기 때문에 컨벤셔널 데드리프트에 " +
            "비해 더 높은 중량을 들어올리기 용이하다."
),
new BasicMenu(
    "b5",
    ["c4"],
    "Cable Rope Push Down",
    "Upper body",
    "https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "운동 수행 시 팔꿈치와 어깨가 수직이 되는 것 이 중요하고 팔꿈치를 펼 때 손목을 일부러 꺾지 않고 자연스럽게 꺾이는 느낌으로 수행하는 것이" +
    " 가장 좋은 자세입니다. 또한 뒤에서 봤을 때 팔꿈치를 벌리면서 펴는 것이 아니라 내 어깨와 비슷한 간격을 유지하는 것이 중요한 팁입니다 !"

)
]

//  id, nickName, title, body, amount, sets, comment ,date
export const SNSROUTINE = [
    new SnsRoutine(
        "r1",
        "healthBoom",
        "Lower Body",
        "Leg Press",
        "20",
        3,
        "허벅지 자극이 제대로!",
        "2022-10-1"
    ),
    new SnsRoutine(
        "r2",
        "말벅지",
        "Lower Body",
        "Lunge",
        "16",
        4,
        "엉덩이와 전체적인 유산소까지!",
        "2022-10-2"
    ),
    new SnsRoutine(
        "r3",
        "KY엉ZZang",
        "Lower Body",
        "Squat",
        "40",
        4,
        "하체운동의 정수! 매일하세요",
        "2022-10-2"
    ),
    new SnsRoutine(
        "r4",
        "PowerHalth",
        "Upper Body",
        "Bench Press",
        "15",
        3,
        "나도 가질 수 있다 super대흉근!",
        "2022-10-10"
    ),
    new SnsRoutine(
        "r5",
        "근육몬 2세",
        "Upper Body",
        "shoulder Press",
        "25",
        2,
        "어깨 운동은 역시 이거죠",
        "2022-10-11"
    ),
    new SnsRoutine(
        "r6",
        "요호호",
        "Upper Body",
        "Back Extension",
        "40",
        3,
        "등운동해!!",
        "2022-10-19"
    )
];