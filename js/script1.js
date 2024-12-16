// script.js
const searchInput = document.getElementById('search');
const suggestions = ['proyecto', 'proyecto final', 'proyecto de investigación', 'proyecto educativo'];

searchInput.addEventListener('input', function() {
  const inputValue = searchInput.value.toLowerCase();
  const filteredSuggestions = suggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(inputValue)
  );

  const suggestionBox = document.createElement('ul');
  suggestionBox.style.position = 'absolute';
  suggestionBox.style.top = `${searchInput.offsetTop + searchInput.offsetHeight}px`;
  suggestionBox.style.left = `${searchInput.offsetLeft}px`;
  suggestionBox.style.width = `${searchInput.offsetWidth}px`;
  suggestionBox.style.border = '1px solid #ccc';
  suggestionBox.style.backgroundColor = '#fff';
  suggestionBox.style.listStyleType = 'none';
  suggestionBox.style.padding = '0';
  suggestionBox.style.margin = '0';
  suggestionBox.style.zIndex = '1000';

  // Limpiar cualquier sugerencia previa
  document.querySelectorAll('.suggestion-box').forEach(box => box.remove());

  // Agregar nuevas sugerencias
  filteredSuggestions.forEach(suggestion => {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    listItem.style.padding = '10px';
    listItem.style.cursor = 'pointer';
    listItem.addEventListener('click', function() {
      searchInput.value = suggestion;
      suggestionBox.remove();
      if (suggestion.toLowerCase() === 'proyecto') {
        window.location.href = 'proyecto.html'; // Redirigir a proyecto.html
      }
    });
    suggestionBox.appendChild(listItem);
  });

  // Si hay sugerencias, mostrar la lista
  if (filteredSuggestions.length > 0) {
    suggestionBox.classList.add('suggestion-box');
    document.body.appendChild(suggestionBox);
  }
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.search-container')) {
    document.querySelectorAll('.suggestion-box').forEach(box => box.remove());
  }
});

// Redirigir automáticamente si se detecta la palabra "proyecto"
searchInput.addEventListener('blur', function() {
  if (searchInput.value.toLowerCase() === 'proyecto') {
    window.location.href = 'proyecto.html'; // Redirigir a proyecto.html
  }
});
