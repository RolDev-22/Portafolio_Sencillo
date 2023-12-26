window.addEventListener("scroll", function () {
  // Tamaño actual del scroll
  var currentScroll = window.scrollY;
  var header = this.document.getElementById("header");
  // console.log(currentScroll);
  if(currentScroll >= 2575){
    header.style.backgroundColor = '#10263F';
  }else if(currentScroll >= 1946){
    header.style.backgroundColor = '#061E3C';
  }else if (currentScroll >= 1317) {
    header.style.backgroundColor = 'rgba(1,23,53)';
  } else if (currentScroll >= 688) {
    header.style.backgroundColor = "rgba(0,13,37)";
  } else {
    header.style.backgroundColor = "Black";
  }
});

function activateLink(link) {
  // Remover la clase 'active' de todos los enlaces
  document.querySelectorAll('.link').forEach(function(el) {
    el.classList.remove('active');
  });

  // Agregar la clase 'active' al enlace clicado
  link.classList.add('active');
}
