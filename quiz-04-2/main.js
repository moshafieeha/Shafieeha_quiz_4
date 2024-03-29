const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

const renderTable = () => {
    const currentUrl = window.location.href;

    if (currentUrl.includes("sort=")) {
        const sortParameter = new URLSearchParams(window.location.search).get("sort");

        const field = sortParameter.substring(1);
        const order = sortParameter.charAt(0) === "-" ? "desc" : "asc";

        tours.sort((a, b) => {
            if (order === "asc") {
                if (a[field] > b[field]) return 1;
                if (a[field] < b[field]) return -1;
            } else {
                if (a[field] < b[field]) return 1;
                if (a[field] > b[field]) return -1;
            }
            return 0;
        });
    }

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

renderTable();
