async function getData() {
    const dayDate = new Date().getDay();
    const week = {
        0: "sun",
        1: "mon",
        2: "tue",
        3: "wed",
        4: "thu",
        5: "fri",
        6: "sun",
    };
    const charts = document.querySelector(".chart-container");
    const data = await (await fetch("data.json")).json();
    for (let i = 0; i < data.length; i++) {
        const day = data[i].day;
        const amount = data[i].amount;

        const chartData = document.createElement("div");
        chartData.classList.add("data");
        charts.appendChild(chartData);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.setAttribute("data-price", "$" + amount);
        if (day == week[dayDate]) {
            bar.classList.add("blue");
        } else {
            bar.classList.add("orange");
        }
        bar.setAttribute(
            "style",
            "height:" + amount * 0.2864782276546982 + "rem;"
        );
        chartData.appendChild(bar);

        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.insertAdjacentText("beforeend", day);
        chartData.appendChild(dayDiv);
    }
    let arr = [];
    for (let j = 0; j < data.length; j++) {
        arr.push(data[j].amount);
    }
    const height = (Math.round(Math.max(...arr) * 2.864782276546982) + 62) / 10;
    charts.setAttribute("style", "min-height:" + height + "rem;");
}

getData();
