
    function toggleContent() {
        var container = document.getElementById("edu-category");
        if (container.style.display === "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    
    function toggleContent2() {
      var container = document.getElementById("extra-category");
      if (container.style.display === "none") {
          container.style.display = "block";
      } else {
          container.style.display = "none";
      }
  }


  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
