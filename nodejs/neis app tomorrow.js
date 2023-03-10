const School = require('school-kr') 
const school = new School()
const example = async function() {
    // 학교 검색 및 첫 번째 결과의 학교 코드로 초기화
    school.init(School.Type.HIGH, School.Region.SEJONG,'I100000119')
   
    const meal = await school.getMeal()
    console.log(`${meal.month}월 ${meal.day+1}일`)

    // 내일 급식
    console.log(meal.tomorrow)
}
example()