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
        getMainHome.style.display = "block";
        getMain.style.display = "none";
        getAside.style.display = "none";
        getSection1.style.display = "none";
        getSection2.style.display = "none";
        getSection3.style.display = "none";

    }  

}


let toggleNavA = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")
    let getaSix = document.body.querySelector("#mainHead ul .aSix")

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

    let getMainh1 = document.body.querySelector("#A h1")

    if (toggleNavStatusA === false ) {
        
        getMainHead.style.display = "block"

        getaTwo.style.color = "white"
        getaThree.style.color = "gray"
        getaFour.style.color = "gray"
        getaFive.style.color = "gray"
        getaSix.style.color = "gray"

        geti2.style.width = "15px"

        geti1.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"
        
        getMain.style.display = "block";
      
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getSection1.style.display = "none";
        getSection2.style.display = "none";
        getSection3.style.display = "none";

        setTimeout(() => {
            getMainh1.style.visibility = "visible"
        }, 2000);
                
    }


}

let toggleNavB = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")
    let getaSix = document.body.querySelector("#mainHead ul .aSix")
    
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

        getaTwo.style.color = "gray"
        getaThree.style.color = "white"
        getaFour.style.color = "gray"
        getaFive.style.color = "gray"
        getaSix.style.color = "gray"
        
        geti3.style.width = "15px"

        geti2.style.width = "0"
        geti1.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"

        getAside.style.display = "block";
        getMainHome.style.display = "none";
        getMain.style.display = "none";
        getSection1.style.display = "none";
        getSection2.style.display = "none";
        getSection3.style.display = "none";
        


        
    }

}

let toggleNavC = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")
    let getaSix = document.body.querySelector("#mainHead ul .aSix")


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

        getaTwo.style.color = "gray"
        getaThree.style.color = "gray"
        getaFour.style.color = "white"
        getaFive.style.color = "gray"
        getaSix.style.color = "gray"

        geti4.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti1.style.width = "0"
        geti5.style.width = "0"
        geti6.style.width = "0"

        getSection1.style.display = "block";
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getMain.style.display = "none";
        getSection2.style.display = "none";
        getSection3.style.display = "none";
        

    }


}

let toggleNavD = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")
    let getaSix = document.body.querySelector("#mainHead ul .aSix")


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

        getaTwo.style.color = "gray"
        getaThree.style.color = "gray"
        getaFour.style.color = "gray"
        getaFive.style.color = "white"
        getaSix.style.color = "gray"

        geti5.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti1.style.width = "0"
        geti6.style.width = "0"

        getSection2.style.display = "block";
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getMain.style.display = "none";
        getSection1.style.display = "none";
        getSection3.style.display = "none";
        
    }

}

let toggleNavE = function () {

    let getMainHead = document.body.querySelector("#mainHead")

    let getaTwo = document.body.querySelector("#mainHead ul .aTwo")
    let getaThree = document.body.querySelector("#mainHead ul .aThree")
    let getaFour = document.body.querySelector("#mainHead ul .aFour")
    let getaFive = document.body.querySelector("#mainHead ul .aFive")
    let getaSix = document.body.querySelector("#mainHead ul .aSix")


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

        getaTwo.style.color = "gray"
        getaThree.style.color = "gray"
        getaFour.style.color = "gray"
        getaFive.style.color = "gray"
        getaSix.style.color = "white"

        geti6.style.width = "15px"

        geti2.style.width = "0"
        geti3.style.width = "0"
        geti4.style.width = "0"
        geti5.style.width = "0"
        geti1.style.width = "0"

        getSection3.style.display = "block";
        getMainHome.style.display = "none";
        getAside.style.display = "none";
        getMain.style.display = "none";
        getSection2.style.display = "none";
        getSection1.style.display = "none";
        
    }

}

