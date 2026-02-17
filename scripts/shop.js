import { products } from '../data/product.js';
import { autoClicksProduct } from '../data/autoClicker.js';

const grid = document.querySelector('.js-products-grid');
const tabs = document.querySelectorAll('.js-tab');

// function to render items
function renderItems(items) {
  let html = '';

  items.forEach((item) => {
    html += `
      <div class="content-product">
        <div>
          <img class="product-shop-icon" src="${item.image}" alt="${item.name}">
        </div>
        <div class="grid-name-price-shop">
          <div class="price-shop-name">Name:</div>
          <div class="product-shop-name">${item.name}</div>
          <div class="price-shop">Price:</div>
          <div class="product-shop-price">${item.price} $</div>
          <div class="plus-clicks">${item.clicks}</div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

// default load → cookies
renderItems(products);

// tab click logic
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {

    // remove underline from all
    tabs.forEach(t => t.classList.remove('active'));

    // add underline to clicked
    tab.classList.add('active');

    // load correct category
    const category = tab.dataset.category;

    if (category === 'cookies') {
      renderItems(products);
    } else {
      renderItems(autoClicksProduct);
    }
  });
});
