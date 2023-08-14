console.log("Bing BG image script is loaded!. Thanks for using Bing search script ^_^");

function setRandomBackground() {
    const totalImages = 14;
    const today = new Date();
    const dayOfMonth = today.getDate();
    
    // Ensure the image index stays within a valid range
    const index = (dayOfMonth - 1) % totalImages + 1;
    
    const imageUrl = 'bg-images/pic' + index + '.webp';
    document.getElementById('imageContainer').style.backgroundImage = "url(" + imageUrl + ")";
}

setRandomBackground();