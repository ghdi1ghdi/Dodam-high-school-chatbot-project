const School = require('school-kr')
const school = new School()
school.init(School.Type.HIGH, School.Region.SEJONG,'I100000119')
const sampleAsync = async function() {
    console.log('[이번 달 급식 정보 - Async]\n')
    console.log(await school.getMeal())

    console.log('[이번 달 학사일정 - Async]\n')
    console.log(await school.getNotice())
}

sampleAsync()