let changeColors = document.getElementById("swapThemeButton")
let r = document.querySelector(':root');

// Changes to light theme if defult computer theme is light
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
  r.classList.toggle('light');
}

changeColors.addEventListener("click", () =>{
  r.classList.toggle('light');
});

