import React from "react";
import { getTeacherMap } from "../../lib/teacher";

export async function srcLoader({ params }) {
  const teacherMap = getTeacherMap(params);
  console.log(teacherMap);
  return teacherMap;
}

export default function src() {
  return <Box></Box>;
}
