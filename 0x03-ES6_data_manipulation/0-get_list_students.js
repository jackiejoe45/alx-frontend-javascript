export default function getListStudents() {
  const student1 = {
    id: 1,
    firstName: 'Guillame',
    location: 'San Francisco',
  };

  const student2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const student5 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  const students = [student1, student2, student5];

  return students;
}
