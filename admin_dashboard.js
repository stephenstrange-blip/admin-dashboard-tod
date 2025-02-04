const projectNames = document.querySelectorAll(".content-projects > div")
const titlePlaceHolder = document.getElementsByClassName("project-title")

const announcements = document.querySelectorAll(".announcement")
const announcementsPlaceHolder = document.getElementsByClassName("announcement-title")


var index = 0;

// // Get each classname, capitalize the first letter
// // of each word and then display on browser
// projectNames.forEach((project) => {
//     // all target elements has a "project" class
//     // before its distinct class, so get the latest
//     var title = project.classList[1].split("-")

//     title = title.map((word) => {
//         word = word[0].toUpperCase() + word.substring(1);
//         return word
//     }).join(" ")

//     titlePlaceHolder[index].textContent = title;
//     titlePlaceHolder[index].style['font-size'] = "1rem";
//     titlePlaceHolder[index].style['font-weight'] = "bold";
//     index++;
// })
const placeTitle = (titles, placeHolders, index = 0, fontSize = "1rem", fontWeight = "bold") => {
    titles.forEach((title) => {

        // all target elements has a general class
        // before its distinct class, so get the latest
        if (title.classList.length != 2) {
            console.error(`Classlist is composed of  ${title.classList}`)
            return
        }
        var obj = title.classList[1].split("-")

        obj = obj.map((word) => {
            word = word[0].toUpperCase() + word.substring(1);
            return word
        }).join(" ")

        placeHolders[index].textContent = obj;
        placeHolders[index].style['font-size'] = fontSize;
        placeHolders[index].style['font-weight'] = fontWeight;
        index++;
    })
}


placeTitle(projectNames, titlePlaceHolder, index);
placeTitle(announcements, announcementsPlaceHolder, index, ".9rem")

const getImg = document.querySelectorAll("img");

getImg.forEach((img) => {
    
    if (img.alt === "S") {
        img.src = "content-header-svg/bookmark-svgrepo-com.svg"
    } else if (img.alt === "E") {
        img.src = "content-header-svg/favorites-svgrepo-com.svg"
    } else if (img.alt === "Y") {
        img.src = "content-header-svg/link-minimalistic-svgrepo-com.svg"
    }
    img.width = "40"
    img.height = "40"

})

