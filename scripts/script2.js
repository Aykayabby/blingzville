// Script for Home page nav

let toggleMenuStatus = false;

let toggleMenu = function () {

    let width = screen.width;    
    let getHomeDiv = document.body.querySelector("#H #HomeDiv"); 
    let getNav = document.body.querySelector("#H #nav"); 
    let getNav1 = document.body.querySelector("#H #nav1"); 
    let getMenuBar = document.body.querySelector("#H #menu");
    let getCloseMenu = document.body.querySelector("#H #menuClose");
    let getHidden = document.body.querySelector("#H h1");
    let getHidden2 = document.body.querySelector("#H h3");
    let getHidden3 = document.body.querySelector("#H #icons");

    if (toggleMenuStatus === false ) {
        
        getNav.style.display = "block";
        getNav.style.position = "absolute";
        getNav.style.float = "left";
        getNav.style.top = "30%";
        getHomeDiv.style.height = "90vh"

        getNav1.style.opacity = "0";
        getMenuBar.style.opacity = "0";
        getCloseMenu.style.display = "block";
        getCloseMenu.style.opacity = "1";
        getHidden.style.visibility = "hidden";
        getHidden2.style.visibility = "hidden";
        getHidden3.style.visibility = "hidden";
        
        

        toggleMenuStatus = true
    }
    else if (toggleMenuStatus === true) {
        
        getHomeDiv.style.height = "290px"
        getNav.style.display = "none";
        getNav1.style.opacity = "1";
        getMenuBar.style.opacity = "1";
        getCloseMenu.style.opacity = "0";
        getHidden.style.visibility = "visible";
        getHidden2.style.visibility = "visible";
        getHidden3.style.visibility = "visible";


        if (togglemenuBar === false && width <= "600px") {
            getHomeDiv.style.height = "320px"
           }
           else if (togglemenuBar === false &&  width > "600px" || width <= "825px") {
            getHomeDiv.style.height = "220px"
           }
           else if (togglemenuBar === false && width > "825px") {
            getHomeDiv.style.height = "290px"
           }
        
        

        toggleMenuStatus = false
    }


}