const projectNames = document.querySelectorAll(".content-projects > div")
const titlePlaceHolder = document.getElementsByClassName("project-title")

const announcements = document.querySelectorAll(".announcement")
const announcementsPlaceHolder = document.getElementsByClassName("announcement-title")


var index = 0;

const placeTitle = (titles, placeHolders, index = 0, fontSize = "1rem", fontWeight = "bold") => {
    var data = [];
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
        data.push(obj)
    })

    return data
}


placeTitle(announcements, announcementsPlaceHolder, index, ".9rem")

const placeIcons = () => {
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
}

placeIcons();

const setDataList = () => {
    const container = document.querySelector(".header-search")
    const dataList = document.createElement("dataList")
    dataList.setAttribute("id", "search-data")

    const titles = placeTitle(projectNames, titlePlaceHolder, index);
    titles.forEach((title) => {
        let option = document.createElement("option")
        option.setAttribute(`value`, title)
        dataList.appendChild(option);
    })

    const searchBar = document.getElementById("search-bar");
    searchBar.setAttribute("list", "search-data");

    container.appendChild(dataList);

}


setDataList();