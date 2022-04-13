// Inicio añadir al carrito
const addToShoppingCartButtons = document.querySelectorAll('.button-compra');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector ('tbody');

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.grid-item');

    const itemTitle = item.querySelector('.titulo').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImage = item.querySelector('.imagen-comic').src;

    addItemToShoppingCart(itemTitle,itemPrice,itemImage);
}

function addItemToShoppingCart(itemTitle,itemPrice,itemImage) {
    const shoppingCartRow = document.createElement('tr');
    const shoppingCartContent = `
    <td>
    <img src="${itemImage}" width=100> 
</td> 
<td>${itemTitle}</td>
<td><p class="precio-item">${itemPrice}</p></td>  
<td class="carrito-cantidad">
      <input class="carrito-cantidad-input cantidad-item" type="number" value="1">
            <button class="buttonDelete" type="button">X</button>
</td> 
    `;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

// Fin añadir al carrito

//Actualizar precio
updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.precio-total');

    const shoppingCartItems = document.querySelectorAll('tbody');
    
    shoppingCartItems.forEach((tbody) => {
    const shoppingCartItemPriceElement = tbody.querySelector('.precio-item');

    const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
      const shoppingCartItemQuantityElement = tbody.querySelector(
        '.cantidad-item'
      );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
      console.log(
          ':updateShoppingCartTotal => total', total
      );
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(3)}`;
}


//Fin actualizar precio


