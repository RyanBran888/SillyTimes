const bob = "https://raw.githubusercontent.com/RyanBran888/SillyTimes/main/bleh.png";

function replace() {
    const images = document.getElementsByTagName("img");
    for(let img of images) {
        img.src = bob;
        img.srcset = "";
        img.style.objectFit = "cover";
    }
}

replace();

const observer = new MutationObserver(replace);
observer.observe(document.body, {childList: true, subtree: true });