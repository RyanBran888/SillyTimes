const bob = ["https://hc-cdn.hel1.your-objectstorage.com/s/v3/80e2836361b23a39edf2f0701453f1c86085e015_nopenguin.jpg","https://hc-cdn.hel1.your-objectstorage.com/s/v3/993b3b7ef13b730923cbdfe5e5a2fc77f2c487e7_amongus.png", "https://hc-cdn.hel1.your-objectstorage.com/s/v3/2811cbfddd6388b6b0e57703f634985c208d251c_tbh.png", "https://hc-cdn.hel1.your-objectstorage.com/s/v3/9ba68e9655666fb84b26ff1fcd1f9bf3874de76d_meowww.jpg","https://raw.githubusercontent.com/RyanBran888/SillyTimes/main/bleh.png", "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c5b9b567e082e04351c86f75c036ee2df86f5234_download.jpg"];
function replace() {
    const images = document.getElementsByTagName("img");
    for(let img of images) {
        if(!img.dataset.sillified)
        {
        var num = r(0, bob.length);
        img.src = bob[num];
        img.srcset = "";
        img.style.objectFit = "cover";
        img.dataset.sillified = "true";
        }
    }
}
function r(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
replace();

const observer = new MutationObserver(replace);
observer.observe(document.body, {childList: true, subtree: true });