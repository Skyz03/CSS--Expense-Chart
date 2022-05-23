const cardDays = document.querySelector(".card__days");
const arr = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const dataList = data;
    dataList.map((dataz) => {
      arr.push(dataz.day);
    });
    for (let i = 0; i <= arr.length; i++) {
      console.log(arr[i]);
      cardDays.innerHTML = dataz[i];
    }
  });
