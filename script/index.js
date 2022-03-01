let changeColors = document.getElementById("change")
let r = document.querySelector(':root');
let theme = true; // True means DARK

const darkTheme = ["#1c1e24", // Background Color
                   "#31339a", // Text and Keyboard
                   "#2d30df", // After Text Border
                   "#46bf66", // Correct
                   "#ddbc35", // Different Spots
                   "#434546", // Wrong Letter
                   "#ffffff", // Text Pure white
                  ]; 
const lightTheme = ["#ffffff", // Background Color
                    "#d3d6da", // Text and Keyboard
                    "#878a8c", // After Text Border
                    "#46bf66", // Correct
                    "#ddbc35", // Different Spot
                    "#787c7eff", // Wrong Letter
                    "#1c1e24", // Text
                   ]; 

changeColors.addEventListener("click", function(){
  if (theme == true){
    for (i = 0; i < darkTheme.length; i++){
     r.style.setProperty('--color' + (i + 1).toString(), lightTheme[i]);
    };
  }; 

  if (theme == false){
    for (i = 0; i < lightTheme.length; i++){
     r.style.setProperty('--color' + (i + 1).toString(), darkTheme[i]);
    };
  }; 
    
  theme = !theme;
});