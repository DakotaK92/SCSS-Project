function togglePricing() {
      const monthlyPrices = document.querySelectorAll('.monthly');
      const annualPrices = document.querySelectorAll('.annual');
      const button = document.querySelector('.button-container .active');
      
      // Toggle the button's position for the slide effect
      if (button.style.transform === 'translateX(100%)') {
        button.style.transform = 'translateX(0)';
        monthlyPrices.forEach(price => price.classList.add('active'));
        annualPrices.forEach(price => price.classList.remove('active'));
      } else {
        button.style.transform = 'translateX(100%)';
        annualPrices.forEach(price => price.classList.add('active'));
        monthlyPrices.forEach(price => price.classList.remove('active'));
      }
    }