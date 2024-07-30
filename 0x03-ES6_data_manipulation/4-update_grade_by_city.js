#!/usr/bin/node
/*eslint-disable*/
export default function updateStudentGradeByCity(student, city, newGrades) {
	return student.filter((elem) => elem.location === city)
		.map((elem) => {
			const grade = newGrades.find(grade => grade.studentId === elem.id);
			console.log("", grade);
			return {
				...elem,
				grade: grade ? grade.grade : 'N/A'
			}
		})
}