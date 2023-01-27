const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

let url_string = window.location.href;
let url = new URL(url_string);
let filterKey;
let filterValue;

const renderTable = () => {
  tableHead.innerHTML = `
		<tr>
			<th>No.</th>
			<th>Tour ID</th>
			<th>Name</th>
			<th>Location</th>
			<th>Price</th>
			<th>Group Size</th>
			<th>difficulty</th>
			<th>duration</th>
			<th>Ratings Average</th>
			<th>Ratings Quantity</th>
		</tr>`;

  let rowCount = 1;

  filterKey = url.search.split("?")[1].split("=")[0];
  filterValue = url.search.split("?")[1].split("=")[1];

  for (const tour of tours) {
    if (!filterKey || tour[filterKey] === filterValue) {
      tableBody.innerHTML += `
				<tr>
					<td>${rowCount}</td>
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
      rowCount++;
    }
  }
};

renderTable();
