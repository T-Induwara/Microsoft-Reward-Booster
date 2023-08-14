const searchItems = [
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

function openTab(url) {
    window.open(url, '_blank');
}

async function performSearch(query) {
    try {
        const response = await fetch(`proxy.php?q=${encodeURIComponent(query)}`);
        console.log(`Search query: ${query}, Status code: ${response.status}`);
        
        // Open a new tab with the Bing search results
        openTab(`https://www.bing.com/search?q=${encodeURIComponent(query)}`);
    } catch (error) {
        console.error(`Error performing search: ${error}`);
    }
}

async function performSearchesWithDelay() {
    for (const item of searchItems) {
        await performSearch(item);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Delay for 3 seconds
    }
}

performSearchesWithDelay();