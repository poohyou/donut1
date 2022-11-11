

function programFunction() {
    var dots = document.getElementById("dots");
    var programmoreText = document.getElementById("programmore");
    var programbtnText = document.getElementById("programBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      programbtnText.innerHTML = "Read more";
      programmoreText.style.display = "none";
    } else {
      dots.style.display = "none";
      programbtnText.innerHTML = "Less";
      programmoreText.style.display = "inline";
    }
  }
