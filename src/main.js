function loadItems(){
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items){
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
  return`
  <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

loadItems()
  .then(items => {
    console.log(items);
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);