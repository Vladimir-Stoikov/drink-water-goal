const smallBottle = document.querySelectorAll('.small-bottle');
const bigBottleFilling = document.querySelector('.big-bottle .gone h2');
const remainedLiters = document.querySelector('.remained h2');
const upLiters = document.querySelectorAll('.remain');
let bottlesFilled = 0;

smallBottle.forEach((bottle, inx) => {
  bottle.addEventListener('click', () => {
    bottlesFilled = inx + 1;
    if (bottle.className == 'small-bottle active') {
      if (bottlesFilled == smallBottle.length) {
        bottlesFilled--;
      } else if (smallBottle[inx + 1].className != 'small-bottle active') bottlesFilled--;
    }
    smallBottlesFill();
  });
});

function smallBottlesFill() {
  smallBottle.forEach(b => b.classList.remove('active'));
  for (let i = 0; i < bottlesFilled; i++) {
    smallBottle[i].classList.add('active');
  }
  bigBottleFill(bottlesFilled);
}

function bigBottleFill(value) {
  value === 0 ? (bigBottleFilling.style.visibility = `hidden`) : (bigBottleFilling.style.visibility = `visible`);
  remainedLiters.textContent = `${2 - (2 / 8) * value}L`;
  upLiters.forEach(el => (el.style.transform = `translateY(-${18.5 * value}px)`));
  bigBottleFilling.style.height = `${Math.ceil((294 / 8) * value)}px`;
  bigBottleFilling.textContent = `${(100 / 8) * value}%`;
}
