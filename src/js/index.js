class Rating {
  
  constructor(rating) {
  
    this.rating = rating;
    this.element = this._createIt();
  }

  _createIt () {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="rating">
    <div class="rating__value">3</div>
    <div class="rating__stars">
      <div class="rating__star rating__star--on"></div>
      <div class="rating__star rating__star--on"></div>
      <div class="rating__star rating__star--on"></div>
      <div class="rating__star"></div>
      <div class="rating__star"></div>
    </div>
  </div>
    `


    Array.from(div.querySelectorAll(".rating__star"))
      .forEach((star, index) => {
      star.addEventListener("click", this.update(index +1))
    });

    return div;
  }

  update(index) {
    this.element.querySelector(".rating__value")
  }






  renderTo(elem) {
    elem.appendChild(this.element);
  }

}

const m1 = new Rating(4);
m1.renderTo(document.body);





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


