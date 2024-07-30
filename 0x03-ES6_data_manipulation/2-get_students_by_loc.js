#!/usr/bin/node
/*eslint-disable*/
export default function getStudentsByLocation(students, city) {
	return students.filter((elem) => elem.location === city);
}