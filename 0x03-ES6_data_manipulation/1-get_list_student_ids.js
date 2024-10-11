export default function getListStudentIds(objectlist) {
  if (!Array.isArray(objectlist)) {
    return [];
  }
  return objectlist.map((obj) => obj.id);
}
