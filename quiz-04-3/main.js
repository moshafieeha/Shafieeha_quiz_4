const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const removeFields = (fields) => {
  fields.forEach(field => {
    const th = tableHead.querySelector(`th:contains(${field})`);
    th.remove();
  });
  Array.from(tableBody.querySelectorAll('tr')).forEach(tr => {
    fields.forEach(field => {
      const td = tr.querySelector(`td:contains(${field})`);
      td.remove();
    });
  });
};

const renderTable = () => {
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
	for (const tour of tours) {
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

const currentUrl = new URL(window.location.href);
const fields = currentUrl.searchParams.get("fields");

if (fields) {
  const fieldsToRemove = fields.split(",");
  removeFields(fieldsToRemove);
}

renderTable();
