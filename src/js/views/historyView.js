import {
  elements
} from './base';


const renderHistory= (type, events) =>{

   
    let markup= `
          <h3 class="titleBig history__title">${type}</h3>
          <div class="events__main">
    `

    events.results.forEach(element =>{
      let text = `
      
      <div class="singleEvent">
          <div class="singleEvent__title">${element.title}</div>
          <div class="singleEvent__start">${element.start.substr(0, 10)}
          <span>${element.start.substr(11, 8)}</span>

          </div>
      </div>
      
      `
      markup = markup.concat(text);
    })
    const closeDiv = `</div>`
    markup= markup.concat(closeDiv);
    document.querySelector('.history__main').insertAdjacentHTML("beforeend", markup);
}

const processHistory = (url, res) => {

   const cityList = new Map([
    ['Cracow', '50.061'], ['Chicago', '41.833'], ['Warsaw', '52.229'],
    ['Los Angeles', '34.053'], ['London', '51.507'], ['Paris', '48.858'],
    ['Madrid', '40.416'], ['Barcelona', '41.394'], ['Dubai', '25.074'],
    ['Tokyo', '35.669'], ['Kuala Lumpur', '3.138'],
    ['Berlin', '52.506'], ['Munich', '48.155']
  ]);

  res.json().then(events => {

    for(const el of cityList){
      if(url.includes(el[1])){
      
          let type;
          if(url.includes('concerts')){
            type = `Party style events at ${el[0]}`;
          }
          else if (url.includes('performing-arts')){
            type=`Shoping style events at ${el[0]}`;
          }
          else if(url.includes('expos')){
            type=`Culture style events at ${el[0]}`;
          }
          else {
            type =el[0];
          }
          renderHistory(type, events);
  
      }
    }

  })
  

};


export const render = () => {
  caches.open('predictHQ').then(function (cache) {
    cache.keys().then(function (cachedRequests) {
      cachedRequests.forEach(element => {
        fetch(element.url)
          .then(function (res) {
            processHistory(res.url, res);
          })
      })

    });
  });
}



export const initializeHistory = () =>{

  const markup = `
  <section class="history">
   <h2 class="titleBig history__offline" > It seems that you are currently offline :( 
     </br> You can explore only events that you searched in the past. </h2>         
  <div class="history__main">

  </div>
  </section>
  `
  elements.container.insertAdjacentHTML('beforeend',markup)
}