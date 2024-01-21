document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
  
    const toggleModeBtn = document.getElementById("toggleModeBtn");
    if (toggleModeBtn) {
      toggleModeBtn.addEventListener("click", function () {
        console.log("Bouton cliqué");
        
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
  
        console.log("Classes du body :", body.classList);
      });
    }
  });