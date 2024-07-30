#!/usr/bin/node
/*eslint-disable*/
export default function getStudentIdsSum(students = []) {
	const id = students.map(student => student.id);
	return id.reduce((acc, current) => acc + current, 0);
}