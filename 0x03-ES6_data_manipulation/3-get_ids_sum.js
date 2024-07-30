#!/usr/bin/node
/*eslint-disable*/
export default function getStudentIdsSum(students = []) {
	return students.reduce((acc, cur) => acc + cur.id, 0);
}