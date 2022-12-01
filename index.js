const chartContainer = document.querySelector(".chart-container");

const data = fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


