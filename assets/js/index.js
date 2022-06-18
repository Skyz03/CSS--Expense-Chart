const cardDays = Array.from(document.querySelectorAll(".days"));

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data;
    const days = data
      .map((day) => {
        for (let i = 0; i <= cardDays.length; i++) {
          console.log(i);
          console.log(cardDays.length);
          cardDays[i].innerHTML = day.day;
        }
        console.log(day.day);
      })
      .join("");
    // console.log(days);
  });
