// console.log("test");
// * -Array.flat() = del empty target in array

var table_name = ["Yes", "Ok", , "Test", , , , "Non"];
console.log(table_name);
table_name = table_name.flat();
console.log(table_name);

// * Stars
var starsArray = document.getElementsByClassName("star");

// console.log(starsArray);

starsArray = [...starsArray];

starsArray.forEach((star) => {
  star.addEventListener("click", setRating);
});

function setRating(event) {
  let rate = event.target.dataset.rate;

  for (let i = starsArray.length - 1; i >= rate; i--) {
    starsArray[i].classList.remove("rated");
  }

  for (let i = 0; i < rate; i++) {
    starsArray[i].classList.add("rated");
  }
}
