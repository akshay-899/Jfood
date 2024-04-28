const menuData = [
           
    { name: 'Burger', description: 'A classic burger with a juicy patty, fresh lettuce, tomatoes, and special sauce, served in a soft bun.', price: 'Rs.189', image: '/Images/burger.jpg' },
    { name: 'Noodles', description: 'Delicious stir-fried noodles tossed with a medley of colorful vegetables and your choice of protein.', price: 'Rs.180', image: '/Images/noodles.jpg' },
    { name: 'Sandwich', description: 'A hearty sandwich featuring layers of your favorite fillings like ham, cheese, lettuce, and tomatoes, all nestled between slices of fresh bread.', price: 'Rs.150', image: '/Images/sandwich.jpg' },
    { name: 'Spring roll', description: 'Crispy and flavorful spring rolls filled with a mixture of vegetables, noodles, and your choice of protein, served with a dipping sauce.', price: 'Rs.200', image: '/Images/springroll.jpg' },
    { name: 'Large Pizza', description: 'A mouthwatering large pizza with a thin, crispy crust, topped with a generous amount of tomato sauce, cheese, and your favorite toppings.', price: 'Rs.499', image: '/Images/pizza.jpg' },
    { name: 'Veg Chowmein', description: 'Stir-fried noodles loaded with a variety of fresh vegetables and savory sauces, creating a delightful and satisfying dish.', price: 'Rs.180', image: '/Images/chow mein.jpg' },
    { name: 'Pasta', description: 'Al dente pasta tossed in a rich and flavorful sauce, complemented by a mix of herbs, vegetables, and your choice of protein.', price: 'Rs.150', image: '/Images/pasta.jpg' },
    { name: 'Shanghai Roll', description: 'A delightful Shanghai roll filled with a tasty combination of ingredients, rolled up in a thin wrapper and served with a tangy dipping sauce.', price: 'Rs.189', image: '/Images/shanghai roll.jpg' },
    { name: 'Momos', description: 'Steamed or pan-fried dumplings filled with a delectable mixture of minced meat or vegetables, seasoned to perfection and served with a zesty dipping sauce.', price: 'Rs.120', image: '/Images/momos.jpg' }
  
  
          ];
  
          const menuContainer = document.getElementById('menu-container');
  
          // Function to generate HTML for each menu item
          function generateMenuItem(item) {
    return `
      <div class="menu-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p style="color: red; display:flex;justify-content:center;margin:10px; border:2px solid blue;padding:5px;border-radius:50px;">${item.price}</p>
        </div>
      </div>
    `;
  }
  
          const cartItemsContainer = document.getElementById('cart-items');
          const totalAmountDisplay = document.getElementById('total-amount');
  
          let cartItems = [];
          let totalAmount = 0;
  
          // Function to update the cart display and total amount
          function updateCart() {
              cartItemsContainer.innerHTML = '';
              totalAmount = 0;
  
              cartItems.forEach((item, index) => {
                  const cartItem = document.createElement('li');
                  const itemQuantity = document.createElement('span');
                  const incrementButton = document.createElement('button');
                  const decrementButton = document.createElement('button');
  
                  if (item.quantity && item.quantity > 0) {
                      itemQuantity.textContent = `Quantity: ${item.quantity}`;
  
                      incrementButton.textContent = '+';
                      incrementButton.addEventListener('click', () => {
                          item.quantity += 1;
                          updateCart();
                      });
  
                      decrementButton.textContent = '-';
                      decrementButton.addEventListener('click', () => {
                          if (item.quantity > 0) {
                              item.quantity -= 1;
                              if (item.quantity === 0) {
                                  cartItems.splice(index, 1);
                              }
                              updateCart();
                          }
                      });
  
                      cartItem.textContent = `${item.name} - ${item.price} `;
                      cartItem.appendChild(itemQuantity);
                      cartItem.appendChild(incrementButton);
                      cartItem.appendChild(decrementButton);
  
                      cartItemsContainer.appendChild(cartItem);
                      totalAmount += parseFloat(item.price.replace('Rs.', '')) * item.quantity;
                  }
              });
  
              totalAmountDisplay.textContent = totalAmount;
          }
  
          // Function to handle adding items to the cart
          function addToCart(item) {
              const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
  
              if (existingItemIndex !== -1) {
                  cartItems[existingItemIndex].quantity = (cartItems[existingItemIndex].quantity || 0) + 1;
              } else {
                  item.quantity = 1;
                  cartItems.push(item);
              }
              updateCart();
          }
  
          // Add menu items to the menu container with click event listeners
          menuData.forEach(item => {
              const menuItemHTML = generateMenuItem(item);
              const menuItem = document.createElement('div');
              menuItem.innerHTML = menuItemHTML;
              menuContainer.appendChild(menuItem);
  
              menuItem.addEventListener('click', () => {
                  addToCart(item);
              });
          });
          function redirectToPayment() {
    
              window.location.href = 'payment';
          }