// function of section-3 --- selection buttons
const buttons = document.querySelector('.section-3_buttons');
const button1 = document.querySelector('.btn-gardens');
const button2 = document.querySelector('.btn-lawn');
const button3 = document.querySelector('.btn-planting');

buttons.onclick = function(e) {
  
   if (e.target == button1) {
     button1.classList.add('selected-button');
     filterElements1();
   } else {
     button1.classList.remove('selected-button');
   }
   if (e.target == button2){
     button2.classList.add('selected-button');
     filterElements2();
   } else {
    button2.classList.remove('selected-button');
   }
   if (e.target == button3) {
     button3.classList.add('selected-button');
     filterElements3();
   } else {
   
    
    button3.classList.remove('selected-button');
   }
}

const elements1 = document.querySelectorAll('.garden');
const elements2 = document.querySelectorAll('.lawn');
const elements3 = document.querySelectorAll('.plants');

function filterElements1() {
  const elements1 = document.querySelectorAll('.garden');
  const elements2 = document.querySelectorAll('.lawn');
  const elements3 = document.querySelectorAll('.plants');
  
    
    elements1.forEach(element => {
        if (element.classList.contains('garden')) {
          element.classList.remove('blur');
        } else {
          element.classList.add('blur');
        }
      });
    
      elements2.forEach(element => {
        element.classList.add('blur');
      });
    
      elements3.forEach(element => {
        element.classList.add('blur');
      });

    }
    
    function filterElements2() {
const elements1 = document.querySelectorAll('.garden');
const elements2 = document.querySelectorAll('.lawn');
const elements3 = document.querySelectorAll('.plants');

      elements2.forEach(element => {
        if (element.classList.contains('lawn')) {
          element.classList.remove('blur');
        } else {
          element.classList.add('blur');
        }
      });

      elements1.forEach(element => {
        element.classList.add('blur');
      });
    
      elements3.forEach(element => {
        element.classList.add('blur');
      });
      
    }
    
  

  function filterElements3() {
    const elements1 = document.querySelectorAll('.garden');
const elements2 = document.querySelectorAll('.lawn');
const elements3 = document.querySelectorAll('.plants');

    
      elements3.forEach(element => {
        if (element.classList.contains('plants')) {
          element.classList.remove('blur');
        } else {
          element.classList.add('blur');
        }
      });

      elements1.forEach(element => {
        element.classList.add('blur');
       });
    
      elements2.forEach(element => {
        element.classList.add('blur');
      });
     
    }
    


// functions for section-5  ----  dropdown list

const dropdownList = document.getElementById("dropdownList");
const dropdownButton = document.getElementById('dropdown');


function toggleDropdown() {
    
     const dropdownVisible = dropdownList.style.display !== "none";
     dropdownList.style.display = dropdownVisible ? "none" : "block";
  
    
  
     // check if the list was already open
     if (dropdownVisible) {
  // display none info blocks when re-opening the dropdown list 
       var canandaiguaInfo = document.getElementById("canandaiguaInfo");
       var newYorkCityInfo = document.getElementById("newYorkCityInfo");
       var yonkersInfo = document.getElementById("yonkersInfo");
       var sherrillInfo = document.getElementById("sherrillInfo");
  
       canandaiguaInfo.style.display = "none";
       newYorkCityInfo.style.display = "none";
       yonkersInfo.style.display = "none";
       sherrillInfo.style.display = "none";
  
     } else {
      
  
       var canandaiguaInfo = document.getElementById("canandaiguaInfo");
       var newYorkCityInfo = document.getElementById("newYorkCityInfo");
       var yonkersInfo = document.getElementById("yonkersInfo");
       var sherrillInfo = document.getElementById("sherrillInfo");
  
       canandaiguaInfo.style.display = "none";
       newYorkCityInfo.style.display = "none";
       yonkersInfo.style.display = "none";
       sherrillInfo.style.display = "none";
     }

   
    
     changeColor();
    
  }
  
    function changeColor() {
      const changeColorBlock = document.getElementById('dropdown');
      
      if (dropdownList.style.display === 'block') {
        changeColorBlock.style.background = '#C1E698';
       } 
      
    }
    
    
    function selectCity(city) {
  
         let selectedCityName = document.getElementById("selected-name");
     
      let currentText = document.querySelector('.section-5__city-name');
          currentText.textContent = selectedCityName.textContent = city;

      var canandaiguaInfo = document.getElementById("canandaiguaInfo");
      var newYorkCityInfo = document.getElementById("newYorkCityInfo");
      var yonkersInfo = document.getElementById("yonkersInfo");
      var sherrillInfo = document.getElementById("sherrillInfo");
    
      canandaiguaInfo.style.display = city === "Canandaigua, NY" ? "block" : "none";
      newYorkCityInfo.style.display = city === "New York City" ? "block" : "none";
      yonkersInfo.style.display = city === "Yonkers, NY" ? "block" : "none";
      sherrillInfo.style.display = city === "Sherrill, NY" ? "block" : "none";
      
      dropdownList.style.display = "none";
     
    }

    
  
let burgerMenu = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header-list');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  menu.classList.toggle('menu-active');
})

function closeBurgerMenu() {
  burgerMenu.classList.remove('active');
     menu.classList.remove('menu-active');
}

let menuItem = document.querySelector('.header-link');

menu.addEventListener('click', function(element) {
     if (element.target = menuItem) {
       closeBurgerMenu();
    
}
       })



  