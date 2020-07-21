// Script for Side Bar in Other Pages apart from Home page

let togglemenuBar = false;


setInterval(() => {
    
    let getMenuBar = document.body.querySelector("#mainHead .nav-main #menuBar");
    if (screen.width < "860") {
        getMenuBar.style.visibility = "visible";
        getMenuBar.style.opacity = "1";
        
    }
    if (togglemenuBar === true && screen.width < "860") {
        getMenuBar.style.visibility = "visible";
        getMenuBar.style.opacity = "0";
        
    }
    if (togglemenuBar === true && screen.width < "860") {
        getMenuBar.style.visibility = "visible";
        getMenuBar.style.opacity = "0";
        
    }
    if (screen.width > "860") {
        getMenuBar.style.visibility = "visible";
        getMenuBar.style.opacity = "0";
 
    }
}, 500);

    
let toggleMenuBar = function () {

    let getMenuBar = document.body.querySelector("#mainHead .nav-main #menuBar");
    let getMenuBarClose = document.body.querySelector("#mainHead .nav-main #menuBarClose");
    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");
    let getSidebarI = document.body.querySelector("#mainHead .nav-sidebar i");

    
    if (togglemenuBar === false) {

            getMenuBarClose.style.opacity = "0";
            getSidebar.style.visibility = "visible";
            getSidebar.style.width = "30vw";
            getSidebarI.style.opacity = "1";
            getSidebarI.style.visibility = "visible";
            getMenuBar.style.opacity = "0";

          
        
        togglemenuBar = true;
        
    }
    else if (togglemenuBar === true){

            getMenuBar.style.opacity = "1";
            getMenuBarClose.style.opacity = "0";

            getSidebar.style.visibility = "hidden";
            getSidebar.style.width = "0";
            getSidebarI.style.opacity = "0";
            getSidebarI.style.visibility = "hidden";    
            
            togglemenuBar = false;
         
            
    }
  
};


