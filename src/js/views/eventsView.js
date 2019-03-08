import { elements } from './base';

const renderEv = (title, start) => {
  const markup = `
    <div class="singleEvent">
        <div class="singleEvent__title">${title}</div>
        <div class="singleEvent__start">${start.substr(0, 10)}
        <span>${start.substr(11, 8)}</span>
        
        </div>
    </div>
    `;
  document.querySelector('.events__main').insertAdjacentHTML('beforeend', markup);
};

export const eventsClean = () => {
  document.querySelector('.mapInfo__places').innerHTML = '';
  document.querySelector('.events__main').innerHTML = '';
};


export const renderEvents = (events) => {
  events.forEach((el) => {
    renderEv(el.title, el.start);
  });
};

export const eventsShow = () => {
  document.querySelector('.events').style.display = 'grid';
  document.querySelector('.places').style.display = 'grid';
};

export const eventsCleanSearch = () => {
  document.querySelector('.places').style.display = 'none';
  document.querySelector('.events').style.display = 'none';
}
;