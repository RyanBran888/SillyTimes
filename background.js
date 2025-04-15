const sillyWords = [
    `WARNING WARNING WARNING VIRUS WARNING VIRUS.. wait no its just me :P`,
    `meow!`,
    `femboys....`,
    `bleh bleh bleh`,
    `beep boop`,
    `spaghetti`,
    `orange`,
    `QUACK!`,
    `pronouns (scared emoji)`,
    `Activate Deception of the Sinful Spoils. Activate Deception tributing the monster in your hand to add from deck Hallowed Azamina. Activate Hallowed Azamina revealing Mu Rcielago from Extra Deck and sending Deception to the GY to summon Mu Rcielago. Mu Rcielago searches from deck Sinful Spoils WANTED from deck. Activate WANTED to search for Diabellstar from deck. Use Diabellstar's summon effect to summon herself by sending any card from hand. Activate Diabellstar's on-summon effect to set from deck "Original Sinful Spoils - Snake-Eye". Link summon "Moon of the Closed Sky" using Diabellstar + Mu Rcielago... (etc, etc, your full summon ritual continues here)`
];


function forcedSilly()
{
    const width = 500;
    const height = 500;
   // if(typeof window !== 'undefined')
   // {
    const left = Math.floor(Math.random()*(screen.availWidth - width));
    const top = Math.floor(Math.random() * (screen.availHeight - height));
    const sillyWord = Math.floor(Math.random() * sillyWords.length);
    const sillyWordContent = sillyWords[sillyWord];
    chrome.windows.create({
        url: `data:text/html,<html><body style="background:pink;font-family:Comic Sans MS;text-align:center;padding:1em;"><h1>${sillyWordContent}</h1></body></html>`,
        type: "popup",
        width: width,
        height: height,
        left: left,
        top: top
    });
//}else 
//{
    //console.error("mneow :(");
//}
}

function starting() {
    setInterval(() => {
        const delay = Math.floor(Math.random() * 8000) + 4000;
        setTimeout(forcedSilly, delay);
    }, 5000);
}
starting();