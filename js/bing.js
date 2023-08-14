console.log("Bing BG image script is loaded!. Thanks for using Bing search script ^_^");

async function fetchBingDailyImage() {
    try {
        const response = await fetch('get_bing_image.php');
        const data = await response.json();
        const imageUrl = `https://www.bing.com${data.images[0].url}`;
        document.getElementById('imageContainer').style.backgroundImage = `url('${imageUrl}')`;
    } catch (error) {
        console.error('Error fetching Bing daily image:', error);
    }
}

fetchBingDailyImage();