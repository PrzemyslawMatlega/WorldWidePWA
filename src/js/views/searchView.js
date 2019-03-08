import { elements } from './base';

const renderImg = (photos, i) => {
  const markup = `
                <div class="photos__item photos__item--${i} ">
                <img src="${photos}" alt="" class="photos__img" data-counter="${i}"></div>`;
                document.querySelector('.photos').insertAdjacentHTML('beforeend', markup);
};

export const clean = () => {
  document.querySelector('.photos').innerHTML = '';
  document.querySelector('.cityInfo').innerHTML = '';
  document.querySelector('.places').style.display = 'none';
};

const renderInfo = (wiki) => {
  const cityIndex = wiki.indexOf('(');
  const cityName = wiki.slice(0, cityIndex);
  const wikiText = wiki.replace(cityName, '');
  const markup = `
    <p class="cityInfo__name">${cityName}</p>
    <p class="cityInfo__text">${wikiText}</p>
    `;
    document.querySelector('.cityInfo').insertAdjacentHTML('beforeend', markup);
};

export const renderPhoto = (photo) => {
  for (let i = 0; i < 9; i += 1) {
    renderImg(photo[i], i);
  }
};

export const renderWiki = (wiki) => {
  let lastDot = 0;
  for (let i = 0; i < 4; i += 1) {
    const dot = wiki.indexOf('. ', lastDot);
    lastDot = dot + 1;
  }
  renderInfo(wiki.slice(0, lastDot));
};

export const rmvStatus = () => {
  const cards = document.querySelectorAll('.card__element');
  cards.forEach((el) => {
    const rmvClass = el.classList[2];
    el.classList.remove(`${rmvClass}`);
  });
};

export const showSearch = () => {
 
  document.querySelector('.photos').style.display = 'grid';
  document.querySelector('.info').style.display = 'grid';
 document.querySelector('.types').style.display = 'block';
};



export const initializeSearch = () => {
  const markup= `

<section class="info rmv">
  <div id="map"></div>
  <div class="cityInfo"></div>
</section>

<section class="photos rmv">

</section>

<div class="popup rmv">
  <div class="slider">
      <div class="slider__prev ">&#10094;</div>
      <span class="slider__close">&times;</span>
      <div class="slider__next">&#10095;</div>
      <div class="slider__photos"></div>
  </div>

</div>

<section class="types rmv">

  <h2 class="types__info titleBig">select your travel style.</h2>

  <div class="card">
      <div data-type="party" class="card__element card__element--party">
          <div data-type="party" class="card__element-text">Party</div>
          <svg data-type="party" class="card__element-icon">
              <use xlink:href="img/sprite2.svg#cocktail" />
          </svg>
      </div>

      <div data-type="shopping" class="card__element card__element--shopping">
          <div data-type="shopping" class="card__element-text">Shopping</div>
          <svg data-type="shopping" class="card__element-icon">
              <use xlink:href="img/sprite2.svg#shopping-bag" />
          </svg>
      </div>

      <div data-type="culture" class="card__element card__element--culture">
          <div data-type="culture" class="card__element-text">Culture</div>
          <svg data-type="culture" class="card__element-icon">
              <use xlink:href="img/sprite2.svg#eiffel-tower" />
          </svg>
      </div>
  </div>


</section>


<section class="places rmv">

  <div class="mapInfo">
      <ul class="mapInfo__places"></ul>
      <div class="mapInfo__more"> Show More</div>
  </div>
  <div id="places__map"></div>

</section>

<section class="events rmv">
  <div class="events__title titleBig">top events.</div>
  <div class="events__main"></div>
</section>

  `

  elements.container.insertAdjacentHTML('beforeend',markup);
}

export const delSearch =() =>{
  const removeElements = (elms) => [...elms].forEach(el => el.remove());

  removeElements( document.querySelectorAll(".rmv") );

}