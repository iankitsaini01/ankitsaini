
let
  categoriesData = [],
  endpoint_products_category = 'https://dummyjson.com/products/categories',
  ApiOptions = { method: 'GET' },
  query = document.querySelector('#query'),
  select = document.querySelector('#data'),
  cards = document.querySelector('#cards');
  
async function getCategoriesApiCall() {
  await fetch(endpoint_products_category, ApiOptions)
    .then(res => res.json())
    .then((data0) => categoriesData.push(...data0))
}

async function addCaterogiesInSelect() {
  await getCategoriesApiCall()
  const option = categoriesData.map((category) => {
    return `<li data-selected="false">${category}</li>`
  }).join('')
  select.innerHTML += option
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const processChanges = debounce((event) => searchCategory(event));
function searchCategory(e) {
  select.querySelectorAll('li').forEach(option => (
    (option.textContent || option.innerText).toLocaleLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    ? option.style.display = "" : option.style.display = "none")
}

const dataCollector = [];
const areaSelect = document.querySelector(`[id="data"`);
areaSelect.addEventListener('click', (e) => {
  selectelem(e)

});

function selectelem(e) {
  const optionValue = e.target.innerText;
  (!dataCollector.includes(optionValue)) && dataCollector.push(optionValue);
  datOut()
}

function datOut() {
  const html = dataCollector.map(elem => {
    return `<span onclick="deleteFromArray(event)">${elem}</span>`
  }).join(' ')
  query.innerHTML = html
}

function deleteFromArray(e) {
  const index = e.target
  dataCollector.splice(index, 1)
  datOut()
}

async function fetchQueryData() {
  dataCollector.map(
    async (elem) => {
      await elemn(elem)
    }
  )
}

async function elemn(elem) {
  let html = ``;
  cards.innerHTML = html
  let dataArray = []
  const data = await (await fetch(`https://dummyjson.com/products/category/${elem}`, ApiOptions)).json()
  const { products } = data
  html = products.map(elem => {
   return pophtml(elem)

  }).join('')

  cards.innerHTML += html

}
function pophtml(elem) {
  const { title, description, thumbnail } = elem
  return `<div class="card" style="width: 18rem; height: 18rem">
               <img src="${thumbnail}" class="card-img-top" alt="${title}">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <a href="#" class="btn btn-primary" disabled>Go somewhere</a>
                </div>
            </div>`

}
async function runQueryAndConsole() {
  await fetchQueryData()
}
// categories filter onclick view specific category only 
// onclick on cards display about the cards all data 

async function caller() {
  await addCaterogiesInSelect()
}
caller()