const searchItemsDesktop = [
    "acer",
    "acer predator",
    "react js",
    "vs code",
    "sliit",
    "java",
    "r studio",
    "rc basher",
    "acer predator triton",
    "acer enduro",
    "sims.sliit",
    "sliit cyber security",
    "predator helios",
    "proton email",
    "proton pass",
    "proton drive",
    "Malwarebyte",
    "fiverr",
    "canon",
    "Traxxas",
    "Traxxas max",
    "Github",
    "Sony",
    "Sony hifi setup",
    "Wifi routers",
    "Wifi portable routers",
    "Brave browser",
    "Is proton safe",
    "Does Proton protect user data?",
    "Where is Proton located?",
    "MSI",
    "MSI GL",
    "MSI or ACER Predator",
    "MSI Modern",
    //If you want to add more items or need to change the list that suits for your preferences, feel free to add those here
];
const searchItemsMobile = [
    "razor mobile",
    "razor blade",
    "razor blade vs msi gl",
    "chatgpt",
    "stackoverflow",
    "github copilot",
    "apple ios",
    "apple ipad",
    "apple macbook air",
    "dell g3",
    "dell g3 vs dell g7",
    "acer predator vs acer nitro",
    "threads",
    "current weather",
    "proton pass vs dashlane",
    "cookie hijacking",
    "ms edge vs brave",
    "opera gx browser",
    "razor game booster",
    "alienware laptop",
]

var openedTab;
var pgTitle = document.getElementById("b-title");
var pgBtn = document.getElementById("btn-con");
var pgFooter = document.getElementById("footer");
var pgPopup = document.getElementById("popup-container");
var pgBody = document.getElementById("imageContainer");
var exitBtn = document.getElementById("exit-btn");
var overlay = document.getElementById("overlay");

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

    if (window.matchMedia("(max-width: 767px)").matches){
        // The viewport is less than 768 pixels wide
        console.log("This is a mobile device.");
        for (const item of searchItemsMobile) {
            await performSearch(item);
            await new Promise(resolve => setTimeout(resolve, 1500)); //Delay between 2 tab openings for 3 seconds
            //console.clear();//Clearing console
        }
    }
    else{
        console.log("This is a desktop device");
        for (const item of searchItemsDesktop) {
            await performSearch(item);
            await new Promise(resolve => setTimeout(resolve, 1500)); //Delay between 2 tab openings for 3 seconds
            //console.clear();//Clearing console
        }
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));//Wait 500ms before showing confirmation message
    //console.clear();//Clearing console

    pgBody.style.justifyContent = "center";

    pgPopup.style.display = "block";
    overlay.style.display = "block";

    pgTitle.style.display = "none";
    pgBtn.style.display = "none";
    pgFooter.style.display = "none";
    mainBtn.classList.remove("btn-clicked");
}

//Click event for exiting the tab after process confirmation
exitBtn.addEventListener("click",function(){
    window.close();
})

