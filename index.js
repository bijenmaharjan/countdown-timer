const endDate = "21 June 2024 10:20 PM";

document.getElementById("enddate").innetText = endDate;
const inputs = document.querySelectorAll("input");


console.log(endDate);
console.log(inputs);


function clock() {
  const old = new Date(endDate);
  // console.log(old);
  const now = new Date();
  // console.log(now);

  const diff = (old - now) / 1000;
  // console.log(diff);

  // 1 day=24hr
  // 1hr=60mins
  // 1 min=60sec
  if (diff < 0) {
    return;
  }
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;


}
clock();

setInterval(() => {
  clock()
}, 1000)

