
  function filterGallery() {
  let searchs = document.getElementById('search').value.toLowerCase();
  let images = document.querySelectorAll('gallery');
  
  for (let image of images) {
       let title = image.getAttribute('data-title').toLowerCase();
      
      
      if (title.includes(searchs)) {
          image.style.display = 'block'; 
      } else {
          image.style.display = 'none'
          alert("Nenhuma foto encontrada");
      }
  };   
}

  