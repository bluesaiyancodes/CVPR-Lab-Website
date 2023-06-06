console.clear();

let icons = document.querySelectorAll(".toolbarItem");
let dock = document.querySelector(".toolbar");
let firstIcon = icons[0];

let min = 48; // 40 + margin
let max = 120;
let bound = min * Math.PI;

gsap.set(icons, {
  transformOrigin: "50% -20%",  
  height: 40
});

gsap.set(dock, {
  position: "relative",  
  height: 100
});

dock.addEventListener("mousemove", (event) => {
  
  let offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;  
  updateIcons(event.clientX - offset);
});

dock.addEventListener("mouseleave", (event) => {
  
  gsap.to(icons, {
    duration: 0.3,
    scale: 1,
    x: 0
  });
});

function updateIcons(pointer) {
  
  for (let i = 0; i < icons.length; i++) {
    
    let icon = icons[i];        
    let distance = (i * min + min / 2) - pointer;    
    let x = 0;
    let scale = 1;
    
    if (-bound < distance && distance < bound) {
      
      let rad = distance / min * 0.5;
      scale = 1 + (max / min - 1) * Math.cos(rad);  
      x = 2 * (max - min) * Math.sin(rad);
      
    } else {
      
      x = (-bound < distance ? 2 : -2) * (max - min);    
    }
    
    gsap.to(icon, {
      duration: 0.3,
      x: x,
      scale: scale
    });    
  }
}