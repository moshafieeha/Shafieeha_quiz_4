const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

const renderTable = (data) => {
  tableHead.innerHTML = `
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Tour ID</th>
      <th scope="col">Name</th>
      <th scope="col">Location</th>
      <th scope="col">Price</th>
      <th scope="col">Group Size</th>
      <th scope="col">difficulty</th>
      <th scope="col">duration</th>
      <th scope="col">Ratings Average</th>
      <th scope="col">Ratings Quantity</th>
    </tr>`;

  let rowCount = 1;
  for (const tour of data) {
    tableBody.innerHTML += `
      <tr>
        <th scope="row">${rowCount}</th>
        <td>${tour.id}</td>
        <td>${tour.name}</td>
        <td>${tour.location}</td>
        <td>${tour.price}</td>
        <td>${tour.maxGroupSize}</td>
        <td>${tour.difficulty}</td>
        <td>${tour.duration}</td>
        <td>${tour.ratingsAverage}</td>
        <td>${tour.ratingsQuantity}</td>
      </tr>`;

    rowCount += 1;
  }
};

const paginator = function (items, pageNumber = 1, pageSize = 5) {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

let queryString = new URLSearchParams(window.location.search);
const { page, limit } = Object.fromEntries(queryString.entries());
if (page && limit) {
  const currentPage = +page;
  const pageSize = +limit;
  const data = paginator(tours, currentPage, pageSize);
  renderTable(data);
} else {
  renderTable(tours);
}
