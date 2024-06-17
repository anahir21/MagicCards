document.addEventListener('DOMContentLoaded', function() {
    let selectedColor = '';
    let selectedType = '';
  
    function updateCards() {
      if (!selectedColor || !selectedType) return;
  
      const apiUrl = `https://api.scryfall.com/cards/search?q=c:${selectedColor}+type:${selectedType}&order=released`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const cardsWithImagesAndSingleColor = data.data.filter(card =>
            card.image_uris &&
            card.image_uris.small &&
            card.color_identity.length === 1 &&
            card.color_identity[0] === selectedColor
          );
          const limitedCards = cardsWithImagesAndSingleColor.slice(0, 3); 
          console.log(limitedCards); 
          const resultsContainer = document.getElementById('results-container');
          resultsContainer.innerHTML = ''; 
  
          limitedCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
  
            const cardTitle = document.createElement('h3');
            cardTitle.textContent = card.name;
            cardElement.appendChild(cardTitle);
  
            const cardType = document.createElement('p');
            cardType.textContent = card.type_line;
            cardElement.appendChild(cardType);
  
            const cardImage = document.createElement('img');
            cardImage.src = card.image_uris.small; 
            cardImage.alt = card.name;
            cardElement.appendChild(cardImage);
  
            resultsContainer.appendChild(cardElement);
          });
  
          if (limitedCards.length < 3) {
            const message = document.createElement('p');
            message.textContent = 'No se encontraron resultados';
            resultsContainer.appendChild(message);
          }
        })
        .catch(error => console.error('Error al obtener la data', error));
    }
  
    document.querySelectorAll('.dropdown-color .dropdown-content a').forEach(function(option) {
      option.addEventListener('click', function(event) {
        event.preventDefault(); 
  
        selectedColor = this.id;
        var colorText = this.textContent; 
        console.log('Color seleccionado:', selectedColor);
  
        document.getElementById('selected-color').textContent = 'Selected color: ' + colorText;
      });
    });
  
    document.querySelectorAll('.dropdown-type .dropdown-content a').forEach(function(option) {
      option.addEventListener('click', function(event) {
        event.preventDefault(); 
        selectedType = this.id; 
        var typeText = this.textContent; 
        console.log('Tipo seleccionado:', selectedType);
  
        document.getElementById('selected-type').textContent = 'Selected Type: ' + typeText;
      });
    });
  
    document.getElementById('filterbtn').addEventListener('click', function() {
      updateCards(); 
    });
  });
  