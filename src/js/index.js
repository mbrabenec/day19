class Rating {

  constructor(rating) {
    this.value = rating;

  }
  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="rating">
    <div class="rating__value"></div>
    <div class="rating__stars">
      <div class="rating__star"></div>
      <div class="rating__star"></div>
      <div class="rating__star"></div>
      <div class="rating__star"></div>
      <div class="rating__star"></div>
    </div>
  </div>`

  Array.from(div.querySelectorAll(".rating__star"))
    .forEach((star, index) => {
    star.addEventListener("click", () => {
      this.value = index + 1;
      this.update();
    });
    if (index < this.value) {
      star.classList.add("rating__star--on");
    } else {
      star.classList.remove("rating__star--on");
    }
  });

    div.querySelector(".rating__value").textContent = this.value;

    return div;
  } 

  mount(elem) {
    this.element = this.render();
    elem.appendChild(this.element);
  }

  update() {

    this.element.querySelector(".rating__value").textContent = this.value;

    let stars = this.element.querySelectorAll(".rating__star")
    Array.from(stars).forEach((star, index) => {
      if (index < this.value) {
        star.classList.add("rating__star--on");
      } else {
        star.classList.remove("rating__star--on");
      }
    })
  }

                                            
}


const m1 = new Rating(2);
m1.mount(document.body);








// const scoreDisp = document.querySelector(".rating__value");
// const stars = document.querySelectorAll(".rating__star");






// Array.from(stars).forEach(star => {
//   console.log(star);   /////////

//   star.addEventListener("click", () => {

//     star.classList.toggle("rating__star--on");
//     updateAll();

//   })
  
// });


// function updateAll() {

//   let newScore = 0;

//   Array.from(stars, index).forEach(star => {

//     star.classList.remove("rating__star--on")

//     if(star.classList.contains("rating__star--on")) {
//       newScore = index + 1;
//       ;
//     }

//   });

//   for (let i = 0; stars < newScore.length; i++) {
//     stars[i].classList.add("rating__star--on")
    
//   }


//     scoreDisp.innerHTML = newScore;
// }






document.querySelector("button").addEventListener("click", getJoke)
const output = document.querySelector(".chuck");
 
function getJoke() {

    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url)
        .then((result) => 
            result.json())
        .then((data) => {

            output.textContent = (data['value']);

});

}

getJoke();
