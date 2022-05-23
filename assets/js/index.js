const cardDays = document.querySelector(".card__days");
const arr = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => arr.push(...data));
// console.log(data);;

// const html = arr.map((x) => {
// });
// console.log(arr);
// console.log(arr[0]);

const wowo = arr.map((place) => {
  return console.log(place);
});

// const newArray = [{ key: 1, lee: 2 }, 2, 3];
// console.log(newArray);
// console.log(newArray[0]);
// arr[0];
// const dataList = data;
//     dataList.map((dataz) => {
//       arr.push(dataz.day);
//     });
//     for (let i = 0; i <= arr.length; i++) {
//       console.log(arr[i]);
//       cardDays.innerHTML = dataz[i];
//     }

// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// const cities = [];

// fetch(endpoint)
//   .then((blob) => blob.json())
//   .then((data) => cities.push(...data));

// console.log(cities.city);
