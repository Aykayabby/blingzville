let toggleNavStatus = false
let toggleNavStatusA = false
let toggleNavStatusB = false
let toggleNavStatusC = false
let toggleNavStatusD = false
let toggleNavStatusE = false

let toggleNavH = function () {
    
    
    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")
    let geti6 = document.body.querySelector("#mainHead ul #i6")
    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection3 = document.body.querySelector("#E")

    if (toggleNavStatus === false ) {

        getMainHead.style.display = "none"
        geti1.style.width = "15px"
        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"
        getMainHome.style.visibility = "visible";
        getMain.style.visibility = "hidden";
        getAside.style.visibility = "hidden";
        getSection1.style.visibility = "hidden";
        getSection2.style.visibility = "hidden";
        getSection3.style.visibility = "hidden";

    }  

}


let toggleNavA = function () {

    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")
    let geti6 = document.body.querySelector("#mainHead ul #i6")
    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection3 = document.body.querySelector("#E")

    if (toggleNavStatusA === false ) {
        
        getMainHead.style.display = "block"

        geti2.style.width = "15px"

        geti1.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"
        
        getMain.style.visibility = "visible";
      
        getMainHome.style.visibility = "hidden";
        getAside.style.visibility = "hidden";
        getSection1.style.visibility = "hidden";
        getSection2.style.visibility = "hidden";
        getSection3.style.visibility = "hidden";
        
        document.body.querySelector("#A #header").innerHTML = "ABOUT";


        
    }


}

let toggleNavB = function () {

    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")
    let geti6 = document.body.querySelector("#mainHead ul #i6")
    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection3 = document.body.querySelector("#E")

    if (toggleNavStatusB === false ) {

        getMainHead.style.display = "block"

        geti3.style.width = "15px"

        geti2.style.width = "0"
        geti1.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"

        getAside.style.visibility = "visible";
        getMainHome.style.visibility = "hidden";
        getMain.style.visibility = "hidden";
        getSection1.style.visibility = "hidden";
        getSection2.style.visibility = "hidden";
        getSection3.style.visibility = "hidden";
        


        
    }

}

let toggleNavC = function () {

    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")
    let geti6 = document.body.querySelector("#mainHead ul #i6")
    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection3 = document.body.querySelector("#E")

    if (toggleNavStatusC === false ) {

        getMainHead.style.display = "block"

        geti4.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti1.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"

        getSection1.style.visibility = "visible";
        getMainHome.style.visibility = "hidden";
        getAside.style.visibility = "hidden";
        getMain.style.visibility = "hidden";
        getSection2.style.visibility = "hidden";
        getSection3.style.visibility = "hidden";
        

    }


}

let toggleNavD = function () {

    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")
    let geti6 = document.body.querySelector("#mainHead ul #i6")
    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection3 = document.body.querySelector("#E")

    if (toggleNavStatusD === false ) {

        getMainHead.style.display = "block"

        geti5.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti1.style.width = "0"
        geti6.style.width = "0"

        getSection2.style.visibility = "visible";
        getMainHome.style.visibility = "hidden";
        getAside.style.visibility = "hidden";
        getMain.style.visibility = "hidden";
        getSection1.style.visibility = "hidden";
        getSection3.style.visibility = "hidden";
        
    }

}

let toggleNavE = function () {

    let getMainHead = document.body.querySelector("#mainHead")
    let geti1 = document.body.querySelector("#mainHead ul #i1")
    let geti2 = document.body.querySelector("#mainHead ul #i2")
    let geti3 = document.body.querySelector("#mainHead ul #i3")
    let geti4 = document.body.querySelector("#mainHead ul #i4")
    let geti5 = document.body.querySelector("#mainHead ul #i5")
    let geti6 = document.body.querySelector("#mainHead ul #i6")
    let getMainHome = document.body.querySelector("#H")
    let getMain = document.body.querySelector("#A")
    let getAside = document.body.querySelector("#B")
    let getSection1 = document.body.querySelector("#C")
    let getSection2 = document.body.querySelector("#D")
    let getSection3 = document.body.querySelector("#E")

    if (toggleNavStatusE === false ) {
        
        getMainHead.style.display = "block"

        geti6.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti1.style.width = "0"

        getSection3.style.visibility = "visible";
        getMainHome.style.visibility = "hidden";
        getAside.style.visibility = "hidden";
        getMain.style.visibility = "hidden";
        getSection2.style.visibility = "hidden";
        getSection1.style.visibility = "hidden";
        
    }

}

