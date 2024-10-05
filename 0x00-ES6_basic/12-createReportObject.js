export default function createReportObject(employeesList) {
  const all = {
    allEmployees: { ...employeesList }, // Spread syntax to copy the employeesList
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Count the number of keys (departments)
    },
  };

  return all;
}
