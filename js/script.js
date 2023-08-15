const searchItems = [
    "acer",
    "acer predator",
    "react js",
    "gg",
    //If you want to add more items or need to change the list that suits for your preferences, feel free to add those here
];

var openedTab;
var pgTitle = document.getElementById("b-title");
var pgBtn = document.getElementById("btn-con");
var pgFooter = document.getElementById("footer");
var pgPopup = document.getElementById("popup-container");
var pgBody = document.getElementById("imageContainer");

var mainBtn = document.getElementById("btn");
mainBtn.addEventListener("click",function(){
    mainBtn.classList.add("btn-clicked");
    
    performSearchesWithDelay();
})

async function performSearch(query) {
    try {
        const response = await fetch(`proxy.php?q=${encodeURIComponent(query)}`);
        console.log(`Search query: ${query}, Status code: ${response.status}`);
        
        //This code open a new tab with the Bing search results
        const openTab = window.open(`https://www.bing.com/search?q=${encodeURIComponent(query)}`);

        setTimeout(() => {
            openTab.close();
        }, 1500);
        //console.clear();//Clearing console

    } catch (error) {
        console.error(`Error performing search: ${error}. Contact administrator by : hello@tidev.one`);
    }
}

async function performSearchesWithDelay() {
    for (const item of searchItems) {
        await performSearch(item);
        await new Promise(resolve => setTimeout(resolve, 1500)); //Delay between 2 tab openings for 3 seconds
        //console.clear();//Clearing console
    }
    await new Promise(resolve => setTimeout(resolve, 500));//Wait 500ms before showing confirmation message
    //console.clear();//Clearing console

    pgBody.style.justifyContent = "center";
    pgPopup.style.display = "block";
    pgTitle.style.display = "none";
    pgBtn.style.display = "none";
    pgFooter.style.display = "none";
    mainBtn.classList.remove("btn-clicked");
}


