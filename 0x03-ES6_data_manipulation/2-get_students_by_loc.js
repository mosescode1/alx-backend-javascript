#!/usr/bin/node
/*eslint-disable*/
export default function getStudentsByLocation(students, city) {
	return students.map((elem) => elem.location === city);
}