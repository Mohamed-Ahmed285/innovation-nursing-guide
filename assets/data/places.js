window.PLACES_DATA = {}; // نسيبها فاضية الأول

fetch('places.json')
  .then(response => response.json())
  .then(data => {
    window.PLACES_DATA = data;
    console.log(window.PLACES_DATA);
  })
  .catch(error => console.error('Error loading JSON:', error));
