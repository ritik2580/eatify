// home.js

document.addEventListener('DOMContentLoaded', () => {
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const menuModal = document.getElementById('menuModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalRestaurantName = document.getElementById('modalRestaurantName');
    const modalMenu = document.getElementById('modalMenu');
  
    // Sample menu data for restaurants
    const restaurantMenus = {
      'john-pizza': {
        name: 'John Pizza',
        menu: [
          'Margherita Pizza',
          'Pepperoni Pizza',
          'BBQ Chicken Pizza',
          'Veggie Supreme Pizza'
        ]
      },
      'crown-restaurant': {
        name: 'Crown Restaurant',
        menu: [
          'Grilled Salmon',
          'Steak Frites',
          'Caesar Salad',
          'Lobster Bisque'
        ]
      },
      'sunny-fast-food': {
        name: 'Sunny Fast Food',
        menu: [
          'Cheeseburger',
          'Chicken Nuggets',
          'French Fries',
          'Milkshake'
        ]
      },
      'gupta-fast-food': {
        name: 'Gupta Fast Food',
        menu: [
          'Paneer Tikka',
          'Aloo Paratha',
          'Chole Bhature',
          'Masala Dosa'
        ]
      }
    };
  
    // Function to open modal with restaurant menu
    restaurantCards.forEach(card => {
      card.addEventListener('click', () => {
        const restaurantKey = card.getAttribute('data-restaurant');
        const restaurant = restaurantMenus[restaurantKey];
  
        if (restaurant) {
          modalRestaurantName.textContent = restaurant.name;
          modalMenu.innerHTML = '';
  
          restaurant.menu.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalMenu.appendChild(li);
          });
  
          menuModal.classList.remove('hidden');
        }
      });
    });
  // Function to close the error message
function closeErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none'; // Hides the error message
    }
}

// Attach the close function to a button or click event
document.getElementById('close-button').addEventListener('click', closeErrorMessage);

    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', () => {
      menuModal.classList.add('hidden');
    });
  
    // Close modal when clicking outside the modal content
    menuModal.addEventListener('click', (e) => {
      if (e.target === menuModal) {
        menuModal.classList.add('hidden');
      }
    });
  });
  