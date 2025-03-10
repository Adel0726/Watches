document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });


  



  const productList = document.getElementById("product-list");
  const productContainer = document.getElementById("product-container");
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");

  for (let i = 1; i <= 7; i++) {
      let product = document.createElement("div");
      product.classList.add("product");

      product.innerHTML = `
          <figure>
              <img src="assets/watch${i}.jpg" alt="Watch ${i}">
              <figcaption>Watch ${i}</figcaption>
          </figure>
      `;
      productList.append(product);
  }


  function updateButtons() {
     if (productContainer.scrollLeft <= 0) {
          leftBtn.classList.add("invisible");
      } else {
          leftBtn.classList.remove("invisible");
      } if (productContainer.scrollLeft + productContainer.clientWidth >= productContainer.scrollWidth) {
          rightBtn.classList.add("invisible");
      } else {
      rightBtn.classList.remove("invisible");
     }
  }           


  function scrollProducts(direction) {
      productContainer.scrollBy({ left: direction * 250 , behavior: "smooth" });

      updateButtons()
  }

  leftBtn.addEventListener("click", () => scrollProducts(-1));
  rightBtn.addEventListener("click", () => scrollProducts(1));

