const sillyWords = [
    "WARNING WARNING WARNING VIRUS WARNING VIRUS.. wait no its just me :P",
    "meow!",
    "femboys....".
    "QUACK",
    "Activate Deception of the Sinful Spoils. Activate Deception tributing the monster in your hand to add from deck Hallowed Azamina. Activate Hallowed Azamina revealing Mu Rcielago from Extra Deck and sending Deception to the GY to summon Mu Rcielago.Mu Rcielago searches from deck Sinful Spoils WANTED from deck.Activate WANTED to search for Diabellstar from deck. Use Diabellstar's summon effect to summon herself by sending any card from hand. Activate Diabellstar's on-summon effect to set from deck Original Sinful Spoils - Snake-Eye Link summon Moon of the Closed Sky using Diabellstar + Mu Rcielago. Activate Hallowed Azamina's effect to add itself back to the hand by returning Mu Rcielago from GY to the Extra Deck. Activate Hallowed Azamina's effect revealing Ilia Silvera from Extra Deck and sending Original Sinful Spoils - Snake-Eye to the GY to summon Ilia Silvera. Link summon Fiendsmith Requiem using Moon of the Closed Sky. (The following is Fiendsmith combo to turbo out High King Caesar). Tribute Requiem to summon from deck Engraver. Activate Requiem's effect in GY to equip itself to Engraver. Special summon Necroquip Princess using Requiem + Engraver.Activate Engraver's GY effect returning Requiem to the Extra Deck to summon himself. XYZ summon D/D/D Wave High King Caesar using  Necroquip + Engraver. Banish from the GY Original Sinful Spoils - Snake-Eye placing Diabellstar on the bottom of the deck to search from deck Snake-Eye Ash. Normal summon Ash. Search from deck Poplar. (The following is full Snake-Eyes combo). Activate Poplar's effect to summon itself from hand. Activate Poplar's on-summon effect to search from deck Divine Temple. Link away Poplar to summon Relinquished Anima. Activate Poplar's GY effect placing it in the backrow. Activate Ash effect sending itself and Relinquished Anima to summon from deck Oak. Activate Oak's on-summon effect to target Ash and summon it from the GY. Activate Divine Temple, placing Poplar in the backrow. Activate Oak's effect sending itself and Poplar to summon from deck Flamberge Dragon. Link summon I:P Masquerena using Flamberge Dragon + Ash. Activate Flamberge Dragon's GY effect to summon Ash and Oak from the GY. Link summon Promethean Princess using I:P Masquerena + Ash. Activate Promethean Princess' effect to summon from GY Flamberge Dragon. Activate Flamberge Dragon's effect to place I:P Masquerena in the backrow. Link summon Raging Phoenix using I:P Oak + Promethean Princess. Link summon Worldsea Dragon Zealantis using Raging Phoenix. Banish from GY WANTED targeting Original Sinful Spoils in the Banishment placing it on the bottom of the deck to draw 1 card.During the End Phase, Deception sets itself from the GY due to it being sent there this turn. During your opponent's turn, summon I:P Masquerena from the backrow during Draw Phase using Flamberge Dragon. Then you can link summon S:P Little Knight using Flamberge Dragon + I:P Masquerena for two banishes! You can also activate Promethean Princess during an opportune time to destroy any of your fire monsters and your opponent's monster. ",
    "bleh bleh bleh",
    "beep boop",
    "spaghetti",
    "orange",
    "pronouns (scared emoji)"
];

function forcedSilly()
{
    const width = 500;
    const height = 500;
    const left = Math.floor(Math.random()*(screen.width - width));
    const top = Math.floor(Math.random() * (screen.height - height));
    const sillyWord = Math.floor(Math.random() * sillyWords.length);

    chrome.windows.create({
        url: `data:text/html,
        <html>
        <body style='background:pink;font-family:Comic Sans MS;text-align:center;padding:1em;'>
        <h1>${sillyWords[sillyWord]}</h1>
        </body>
        </html>`,
        type: "popup",
        width: width,
        height: height,
        left: left,
        top: top
    });
}

function starting() {
    setInerval(() => {
        const delay = Math.floor(Math.random() * 8000) + 4000;
        setTimeout(forcedSilly, delay);.
    }, 5000);
}
starting();