
class CatCard {
  constructor(src, alt, number,subtitle,prices, parentSelector){
    this.src = src;
    this.alt = alt;
    this.number = number;
    this.subtitle = subtitle;
    this.prices = prices
    this.parent = document.querySelector(parentSelector);
  }

  render(){
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="section__item">
      <div class="section__item-imgs">
        <img class="section__item-img" src=${this.src} alt=${this.alt}>
      <div class="section__item-container">
        <div class="section__item-container-text">
          ${this.number}
        </div>
      </div>
    </div>
    <h2 class="section_subtitle">${this.subtitle}</h2>
    <div class="section_prices">${this.prices}</div>

  </div>
    `;
    this.parent.append(element);
  }
}

new CatCard(
  "img/1.png",
  "Cat",
  "Cat #1",
  'Original Pets',
  'Price: 34EUR',
  '.section__items'
).render();

new CatCard(
  "img/2.png",
  "Cat",
  "Cat #2",
  'Zombi Pets',
  'Price: 30EUR',
  '.section__items'
).render();


new CatCard(
  "img/3.png",
  "Cat",
  "Cat #3",
  'Original Pets',
  'Price: 34EUR',
  '.section__items'
).render();


new CatCard(
  "img/4.png",
  "Cat",
  "Cat #4",
  'Original Pets',
  'Price: 28EUR',
  '.section__items'
).render();


new CatCard(
  "img/5.png",
  "Cat",
  "Cat #5",
  'Original Pets',
  'Price: 34EUR',
  '.section__items'
).render();

new CatCard(
  "img/6.png",
  "Cat",
  "Cat #6",
  'Zombi Pets',
  'Price: 29EUR',
  '.section__items'
).render();

new CatCard(
  "img/7.png",
  "Cat",
  "Cat #7",
  'Original Pets',
  'Price: 30EUR',
  '.section__items'
).render();

new CatCard(
  "img/8.png",
  "Cat",
  "Cat #8",
  'Original Pets',
  'Price: 33EUR',
  '.section__items'
).render();

new CatCard(
  "img/9.png",
  "Cat",
  "Cat #9",
  'Original Pets',
  'Price: 34EUR',
  '.section__items'
).render();

new CatCard(
  "img/10.png",
  "Cat",
  "Cat #10",
  'Original Pets',
  'Price: 31EUR',
  '.section__items'
).render();


new CatCard(
  "img/11.png",
  "Cat",
  "Cat #11",
  'Zombi Pets',
  'Price: 33EUR',
  '.section__items'
).render();


new CatCard(
  "img/12.png",
  "Cat",
  "Cat #12",
  'Original Pets',
  'Price: 30EUR',
  '.section__items'
).render();


