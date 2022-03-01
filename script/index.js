let changeColors = document.getElementById("change")
let r = document.querySelector(':root');

/* 0 is dark 1 is light
Background Color, Text Border and Keyboard, After Text Border, Correct Different Spots, Wrong Letter, Text Pure white */
let themesColors = [["#1c1e24", "#31339a", "#2d30df", "#46bf66", "#ddbc35", "#434546", "#ffffff"], ["#ffffff", "#d3d6da", "#878a8c", "#46bf66", "#ddbc35", "#787c7eff","#1c1e24"]]

//Defult theme is 0 / Dark
let theme = 0; 
// Changes to light theme if defult theme is dark
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
  swapTheme();
}


function swapTheme(){
  theme = 1 - theme; 
  for (i = 0; i < themesColors[theme].length; i++){
       r.style.setProperty('--color' + (i + 1).toString(), themesColors[theme][i]);
  };
};


changeColors.addEventListener("click", swapTheme);

