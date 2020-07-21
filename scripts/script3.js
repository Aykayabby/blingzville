let togglemenuBar = false;

let toggleMenuBar = function () {

    let width = screen.width;
    let getMenuBar = document.body.querySelector("#mainHead .nav-main #menuBar");
    let getMenuBarClose = document.body.querySelector("#mainHead .nav-main #menuBarClose");
    let getSidebar = document.body.querySelector("#mainHead .nav-sidebar");
    
    if (togglemenuBar === false) {
        
        getSidebar.style.visibility = "visible";
        getSidebar.style.width = "80vw";

        // getMenuBar.style.opacity = "0";
        //     getMenuBarClose.style.opacity = "1";
     
        if (togglemenuBar === false && width <= "825px") {
            getMenuBar.style.opacity = "0";
            getMenuBarClose.style.opacity = "1";
           }
           else if (togglemenuBar === false && width > "825px") {
            getMenuBar.style.color = "0";
            getMenuBarClose.style.opacity = "0";
           }
        
        togglemenuBar = true;
    }
    else if (togglemenuBar === true){
        
        getSidebar.style.visibility = "hidden";
        getSidebar.style.width = "0";

        // getMenuBar.style.opacity = "1";
        //     getMenuBarClose.style.opacity = "0";
       
        if (togglemenuBar === false && width < "825px") {
            getMenuBar.style.opacity = "1";
            getMenuBarClose.style.opacity = "0";
        }
        else if (togglemenuBar === false && width > "825px") {
            getMenuBar.style.opacity = "0";
            getMenuBarClose.style.opacity = "0";
           }
     
        

        togglemenuBar = false;
    }
}