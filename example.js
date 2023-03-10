const School = require('school-kr')
const school = new School()

const example = async function() {
    // 학교 검색 및 첫 번째 결과의 학교 코드로 초기화
    const result = await school.search(School.Region.SEJONG, '도담고');
    school.init(School.Type.HIGH, School.Region.SEJONG,'I100000119')
   
    const meal = await school.getMeal()
    // 오늘 날짜
    console.log(`${meal.month}월 ${meal.day}일`)
   
    // 오늘 급식 정보
    console.log(meal.today)
}
var menu=example()
console.log(menu)

