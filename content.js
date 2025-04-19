const bob = [
"https://hc-cdn.hel1.your-objectstorage.com/s/v3/80e2836361b23a39edf2f0701453f1c86085e015_nopenguin.jpg",
"https://hc-cdn.hel1.your-objectstorage.com/s/v3/acc711d7de8e4db4cb3c55d15f02af36defb33c4_image.png", 
"https://hc-cdn.hel1.your-objectstorage.com/s/v3/f0c08280ce58e8e8db351065175cfac14208641f_image.png",
"https://hc-cdn.hel1.your-objectstorage.com/s/v3/5162a121bc7f55c93243c3f5963e742d6e5e78a6_image.png",
"https://raw.githubusercontent.com/RyanBran888/SillyTimes/main/bleh.png",
"https://hc-cdn.hel1.your-objectstorage.com/s/v3/c5b9b567e082e04351c86f75c036ee2df86f5234_download.jpg"];
function replace() {
    const images = document.getElementsByTagName("img");
    for(let img of images) {
        if(!img.dataset.sillyified)
        {
        meow(img);
        }
    }
}
function sillyWitIt()
{
    const style = document.createElement('style');
    style.textContent = `
    * {
        font-family: "Comic Sans MS", cursive, sans-serif !important;    
    }
    html, body {
        background:  linear-gradient(270deg, red, orange, yellow, green, blue, purple, pink);
        background-size: 1400% 1400%;
        animation: rainbowFlow 10s ease infinite;
    }
    @keyframes rainbowFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; } 
    }
    `;
        document.head.appendChild(style);
}
function meow(img)
{
    const replacer = new Image();
    const url = bob[r(0,bob.length)];
    replacer.onload = () => {
        img.src = url;
        img.srcset = "";
        img.style.objectFit = "cover";
        img.dataset.sillyified = "true";
    };
    replacer.src = url;
}
function r(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
sillyWitIt();
replace();
const observer = new MutationObserver(replace);
observer.observe(document.body, {childList: true, subtree: true });