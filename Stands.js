var stands = {
    "Anubis": { power: 4, speed: 4, range: 1, stamina: 5, precision: 1, development: 3, part: 3 },
    "Atum": { power: 2, speed: 3, range: 2, stamina: 4, precision: 2, development: 2, part: 3 },
    "Bastet": { power: 1, speed: 1, range: 4, stamina: 5, precision: 1, development: 1, part: 3 },
    "Cream": { power: 4, speed: 4, range: 2, stamina: 3, precision: 3, development: 2, part: 3 },
    "Death Thirteen": { power: 3, speed: 3, range: 1, stamina: 4, precision: 2, development: 4, part: 3 },
    "Geb": { power: 3, speed: 4, range: 5, stamina: 4, precision: 2, development: 2, part: 3 },
    "High Priestess": { power: 3, speed: 4, range: 5, stamina: 5, precision: 2, development: 2, part: 3 },
    "Horus": { power: 4, speed: 4, range: 2, stamina: 3, precision: 1, development: 3, part: 3 },
    "Judgement": { power: 4, speed: 4, range: 3, stamina: 4, precision: 2, development: 2, part: 3 },
    "Khnum": { power: 1, speed: 1, range: 1, stamina: 5, precision: 1, development: 1, part: 3 },
    "Osiris": { power: 1, speed: 2, range: 2, stamina: 3, precision: 2, development: 2, part: 3 },
    "Sethan": { power: 2, speed: 2, range: 1, stamina: 3, precision: 2, development: 2, part: 3 },
    "Tenore Sax": { power: 1, speed: 1, range: 2, stamina: 5, precision: 1, development: 1, part: 3 },
    "Tohth": { power: 1, speed: 1, range: 1, stamina: 5, precision: 1, development: 1, part: 3 },
    "Dark Blue Moon": { power: 3, speed: 3, range: 3, stamina: 4, precision: 3, development: 2, part: 3 },
    "Emperor": { power: 4, speed: 4, range: 4, stamina: 3, precision: 1, development: 1, part: 3 },
    "Ebony Devil": { power: 2, speed: 2, range: 5, stamina: 4, precision: 2, development: 4, part: 3 },
    "Empress": { power: 3, speed: 1, range: 5, stamina: 5, precision: 2, development: 2, part: 3 },
    "Hanged Man": { power: 3, speed: 5, range: 5, stamina: 4, precision: 2, development: 2, part: 3 },
    "Hermit Purple": { power: 2, speed: 3, range: 2, stamina: 5, precision: 2, development: 1, part: 3 },
    "Hierophant Green": { power: 3, speed: 4, range: 5, stamina: 4, precision: 3, development: 2, part: 3 },
    "Justice": { power: 2, speed: 1, range: 5, stamina: 5, precision: 1, development: 1, part: 3 },
    "Lovers": { power: 1, speed: 2, range: 5, stamina: 5, precision: 2, development: 1, part: 3 },
    "Magician's Red": { power: 4, speed: 4, range: 3, stamina: 4, precision: 3, development: 2, part: 3 },
    "Silver Chariot": { power: 3, speed: 5, range: 3, stamina: 4, precision: 4, development: 3, part: 3 },
    "Star Platinum": { power: 5, speed: 5, range: 3, stamina: 5, precision: 5, development: 5, part: 3 },
    "Strength": { power: 4, speed: 2, range: 2, stamina: 5, precision: 1, development: 1, part: 3 },
    "Sun": { power: 4, speed: 1, range: 5, stamina: 5, precision: 1, development: 1, part: 3 },
    "The Fool": { power: 4, speed: 3, range: 2, stamina: 3, precision: 2, development: 3, part: 3 },
    "The World": { power: 5, speed: 5, range: 3, stamina: 5, precision: 4, development: 4, part: 3 },
    "Tower of Gray": { power: 1, speed: 5, range: 5, stamina: 3, precision: 1, development: 1, part: 3 },
    "Wheel of Fortune": { power: 4, speed: 2, range: 2, stamina: 5, precision: 1, development: 2, part: 3 },
    "Yellow Temperance": { power: 2, speed: 3, range: 1, stamina: 5, precision: 1, development: 2, part: 3 },
    // PART 4
    "Achtung Baby": { power: 1, speed: 1, range: 0, stamina: 5, precision: 1, development: 5, part: 4 },
    "Aqua Necklace": { power: 3, speed: 3, range: 5, stamina: 5, precision: 3, development: 1, part: 4 },
    "Atom Heart Father": { power: 1, speed: 1, range: 0, stamina: 5, precision: 1, development: 1, part: 4 },
    "Bad Company": { power: 4, speed: 4, range: 3, stamina: 4, precision: 3, development: 3, part: 4 },
    "Boy II Man": { power: 3, speed: 4, range: 3, stamina: 5, precision: 3, development: 3, part: 4 },
    "Cheap Trick": { power: 1, speed: 1, range: 1, stamina: 5, precision: 1, development: 1, part: 4 },
    "Cinderella": { power: 2, speed: 3, range: 3, stamina: 3, precision: 5, development: 3, part: 4 },
    "Crazy Diamond": { power: 5, speed: 5, range: 2, stamina: 4, precision: 4, development: 3, part: 4 },
    "Enigma": { power: 1, speed: 1, range: 3, stamina: 5, precision: 3, development: 3, part: 4 },
    "Earth Wind and Fire": { power: 3, speed: 3, range: 0, stamina: 5, precision: 3, development: 3, part: 4 },
    "Harvest": { power: 1, speed: 4, range: 5, stamina: 5, precision: 1, development: 3, part: 4 },
    "Heaven's Door": { power: 2, speed: 4, range: 4, stamina: 4, precision: 3, development: 5, part: 4 },
    "Highway Star": { power: 3, speed: 4, range: 5, stamina: 5, precision: 1, development: 3, part: 4 },
    "Killer Queen": { power: 5, speed: 4, range: 2, stamina: 4, precision: 4, development: 5, part: 4 },
    "Sheer Heart Attack": { power: 5, speed: 3, range: 5, stamina: 5, precision: 1, development: 5, part: 4 },
    "Bites the Dust": { power: 4, speed: 4, range: 5, stamina: 5, precision: 2, development: 5, part: 4 },
    "Love Deluxe": { power: 4, speed: 4, range: 3, stamina: 5, precision: 1, development: 4, part: 4 },
    "Pearl Jam": { power: 1, speed: 3, range: 4, stamina: 5, precision: 1, development: 3, part: 4 },
    "Ratt": { power: 4, speed: 3, range: 2, stamina: 4, precision: 1, development: 3, part: 4 },
    "Red Hot Chili Pepper": { power: 5, speed: 5, range: 5, stamina: 5, precision: 3, development: 5, part: 4 },
    "Super Fly": { power: 1, speed: 1, range: 0, stamina: 5, precision: 1, development: 1, part: 4 },
    "Surface": { power: 4, speed: 4, range: 3, stamina: 4, precision: 3, development: 3, part: 4 },
    "The Lock": { power: 1, speed: 1, range: 5, stamina: 5, precision: 1, development: 1, part: 4 },
    "The Hand": { power: 4, speed: 4, range: 2, stamina: 3, precision: 3, development: 3, part: 4 },
    "Echoes (ACT1)": { power: 1, speed: 1, range: 4, stamina: 4, precision: 3, development: 5, part: 4 },
    "Echoes (ACT2)": { power: 3, speed: 2, range: 4, stamina: 4, precision: 3, development: 5, part: 4 },
    "Echoes (ACT3)": { power: 4, speed: 4, range: 3, stamina: 4, precision: 3, development: 5, part: 4 },
    "Stray Cat": { power: 4, speed: 1, range: 0, stamina: 5, precision: 1, development: 3, part: 4 },
    // PART 5
    "Black Sabbath": { power: 1, speed: 5, range: 5, stamina: 5, precision: 1, development: 1, part: 5 },
    "Baby Face": { power: 5, speed: 4, range: 5, stamina: 5, precision: 0, development: 0, part: 5 },
    "Gold Experience": { power: 3, speed: 5, range: 3, stamina: 0, precision: 2, development: 3, part: 5 },
    "Sticky Fingers": { power: 5, speed: 5, range: 3, stamina: 0, precision: 2, development: 3, part: 5 },
    "Metallica": { power: 3, speed: 3, range: 3, stamina: 0, precision: 3, development: 3, part: 5 },
    "Purple Haze": { power: 5, speed: 4, range: 3, stamina: 0, precision: 1, development: 4, part: 5 },
    "Moody Blues": { power: 3, speed: 3, range: 5, stamina: 0, precision: 3, development: 3, part: 5 },
    "Sex Pistols": { power: 1, speed: 3, range: 4, stamina: 0, precision: 5, development: 4, part: 5 },
    "The Grateful Dead": { power: 4, speed: 1, range: 4, stamina: 0, precision: 1, development: 3, part: 5 },
    "Aerosmith": { power: 4, speed: 4, range: 4, stamina: 0, precision: 3, development: 3, part: 5 },
    "Beach Boy": { power: 3, speed: 4, range: 4, stamina: 0, precision: 3, development: 5, part: 5 },
    "Man in the Mirror": { power: 3, speed: 3, range: 4, stamina: 0, precision: 3, development: 1, part: 5 },
    "Chariot Requiem": { power: 1, speed: 1, range: 5, stamina: 5, precision: 1, development: 5, part: 5 },
    "Clash": { power: 2, speed: 5, range: 4, stamina: 5, precision: 5, development: 3, part: 5 },
    "Echoes (ACT3)": { power: 5, speed: 3, range: 2, stamina: 3, precision: 3, development: 4, part: 5 },
    "Gold Experience Requiem": { power: 0, speed: 0, range: 0, stamina: 0, precision: 0, development: 0, part: 5 },
    "Green Day": { power: 5, speed: 3, range: 5, stamina: 5, precision: 1, development: 5, part: 5 },
    "King Crimson": { power: 5, speed: 5, range: 1, stamina: 1, precision: 0, development: 0, part: 5 },
    "Kraft Work": { power: 5, speed: 5, range: 1, stamina: 3, precision: 1, development: 1, part: 5 },
    "Little Feet": { power: 2, speed: 4, range: 1, stamina: 5, precision: 2, development: 3, part: 5 },
    "Mr.President": { power: 1, speed: 1, range: 0, stamina: 5, precision: 1, development: 1, part: 5 },
    "Notorious B.I.G": { power: 5, speed: 6, range: 6, stamina: 6, precision: 1, development: 5, part: 5 },
    "Oasis": { power: 5, speed: 5, range: 4, stamina: 5, precision: 1, development: 3, part: 5 },
    "Rolling Stones": { power: 0, speed: 4, range: 5, stamina: 5, precision: 1, development: 0, part: 5 },
    "Soft Machine": { power: 5, speed: 3, range: 1, stamina: 5, precision: 2, development: 1, part: 5 },
    "Spice Girl": { power: 5, speed: 5, range: 3, stamina: 4, precision: 2, development: 3, part: 5 },
    "Talking Head": { power: 1, speed: 1, range: 4, stamina: 5, precision: 1, development: 1, part: 5 },
    "White Album": { power: 5, speed: 3, range: 3, stamina: 5, precision: 1, development: 1, part: 5 },
    // PART 6
    "C-MOON": { power: 0, speed: 4, range: 4, stamina: 0, precision: 0, development: 0, part: 6 },
    "Jail House Lock": { power: 0, speed: 3, range: 4, stamina: 5, precision: 0, development: 0, part: 6 },
    "Stone Free": { power: 5, speed: 4, range: 3, stamina: 0, precision: 3, development: 5, part: 6 },
    "Goo Goo Dolls": { power: 2, speed: 3, range: 4, stamina: 2, precision: 4, development: 4, part: 6 },
    "Under World": { power: 0, speed: 3, range: 5, stamina: 0, precision: 3, development: 0, part: 6 },
    "Sky High": { power: 0, speed: 0, range: 4, stamina: 0, precision: 0, development: 0, part: 6 },
    "Star Platinum: The World": { power: 5, speed: 5, range: 3, stamina: 1, precision: 5, development: 3, part: 6 },
    "Bohemian Rhapsody": { power: 0, speed: 0, range: 6, stamina: 5, precision: 0, development: 0, part: 6 },
    "Burning Down the House": { power: 0, speed: 0, range: 0, stamina: 0, precision: 0, development: 0, part: 6 },
    "Diver Down": { power: 5, speed: 5, range: 1, stamina: 3, precision: 4, development: 4, part: 6 },
    "Dragon's Dream": { power: 0, speed: 0, range: 0, stamina: 5, precision: 0, development: 0, part: 6 },
    "Foo Fighters": { power: 4, speed: 5, range: 3, stamina: 5, precision: 3, development: 4, part: 6 },
    // "Green, Green Grass of Home": {power: -1, speed: -1, range: -1, stamina: -1, precision: -1, development: -1 },
    "Highway to Hell": { power: 3, speed: 3, range: 5, stamina: 3, precision: 3, development: 3, part: 6 },
    "Kiss": { power: 5, speed: 5, range: 5, stamina: 5, precision: 3, development: 5, part: 6 },
    "Jumpin' Jack Flash": { power: 4, speed: 3, range: 4, stamina: 5, precision: 2, development: 1, part: 6 },
    "Limp Bizkit": { power: 0, speed: 4, range: 4, stamina: 5, precision: 3, development: 1, part: 6 },
    "Made in Heaven": { power: 4, speed: 6, range: 3, stamina: 5, precision: 3, development: 5, part: 6 },
    "Manhattan Transfer": { power: 1, speed: 1, range: 5, stamina: 5, precision: 5, development: 3, part: 6 },
    "Marilyn Manson": { power: 1, speed: 5, range: 5, stamina: 5, precision: 5, development: 3, part: 6 },
    "Planet Waves": { power: 5, speed: 4, range: 5, stamina: 5, precision: 1, development: 1, part: 6 },
    "Survivor": { power: 1, speed: 1, range: 1, stamina: 3, precision: 1, development: 1, part: 6 },
    "Weather Report": { power: 5, speed: 4, range: 3, stamina: 5, precision: 1, development: 5, part: 6 },
    "Yo-Yo Ma": { power: 3, speed: 2, range: 5, stamina: 5, precision: 2, development: 3, part: 6 },
    // PART 7
    "20th Century BOY": { power: 0, speed: 3, range: 0, stamina: 5, precision: 2, development: 3, part: 7 },
    "Ball Breaker": { power: 5, speed: 5, range: 2, stamina: 4, precision: 3, development: 4, part: 7 },
    "Boku no Rhythm wo Kiitekure": { power: 4, speed: 3, range: 3, stamina: 4, precision: 1, development: 3, part: 7 },
    "Catch the Rainbow": { power: 3, speed: 3, range: 4, stamina: 4, precision: 2, development: 2, part: 7 },
    "Chocolate Disco": { power: 0, speed: 3, range: 3, stamina: 4, precision: 5, development: 2, part: 7 },
    "Civil War": { power: 0, speed: 3, range: 3, stamina: 4, precision: 3, development: 0, part: 7 },
    "Cream Starter": { power: 2, speed: 3, range: 3, stamina: 5, precision: 1, development: 4, part: 7 },
    "Dirty Deeds Done Dirt Cheap": { power: 5, speed: 5, range: 3, stamina: 5, precision: 5, development: 5, part: 7 },
    "D4C Love Train": { power: 5, speed: 5, range: 3, stamina: 5, precision: 5, development: 3, part: 7 },
    "Hey Ya!": { power: 1, speed: 1, range: 1, stamina: 4, precision: 1, development: 1, part: 7 },
    "In a Silent Way": { power: 3, speed: 3, range: 2, stamina: 5, precision: 2, development: 4, part: 7 },
    "Mandom": { power: 0, speed: 5, range: 0, stamina: 1, precision: 0, development: 3, part: 7 },
    "Oh! Lonesome Me": { power: 1, speed: 3, range: 3, stamina: 4, precision: 3, development: 2, part: 7 },
    "Scary Monsters": { power: 4, speed: 4, range: 2, stamina: 5, precision: 3, development: 4, part: 7 },
    "Sugar Mountain": { power: 1, speed: 1, range: 1, stamina: 5, precision: 1, development: 1, part: 7 },
    "TATOO YOU!": { power: 0, speed: 1, range: 3, stamina: 4, precision: 1, development: 1, part: 7 },
    "Ticket to Ride": { power: 1, speed: 1, range: 1, stamina: 3, precision: 1, development: 3, part: 7 },
    "Tomb of the Boom 1 2 3": { power: 2, speed: 3, range: 3, stamina: 4, precision: 3, development: 3, part: 7 },
    "Tubular Bells": { power: 2, speed: 2, range: 2, stamina: 5, precision: 1, development: 4, part: 7 },
    "Tusk ACT1": { power: 1, speed: 1, range: 1, stamina: 4, precision: 1, development: 5, part: 7 },
    "Tusk ACT2": { power: 2, speed: 2, range: 2, stamina: 3, precision: 3, development: 5, part: 7 },
    "Tusk ACT3": { power: 2, speed: 2, range: 2, stamina: 2, precision: 3, development: 5, part: 7 },
    "Tusk ACT4": { power: 5, speed: 4, range: 3, stamina: 5, precision: 4, development: 1, part: 7 },
    "Wired": { power: 2, speed: 4, range: 4, stamina: 4, precision: 2, development: 2, part: 7 },
    // PART 8
    "Born This Way": { power: 3, speed: 4, range: 5, stamina: 5, precision: 1, development: 1, part: 8 },
    "California King Bed": { power: 0, speed: 0, range: 1, stamina: 4, precision: 1, development: 1, part: 8 },
    "Fun Fun Fun": { power: 1, speed: 3, range: 2, stamina: 5, precision: 1, development: 1, part: 8 },
    "Nut King Call": { power: 3, speed: 2, range: 3, stamina: 5, precision: 1, development: 5, part: 8 },
    "Paisley Park": { power: 0, speed: 0, range: 5, stamina: 5, precision: 2, development: 3, part: 8 },
    "Paper Moon King": { power: 1, speed: 1, range: 3, stamina: 3, precision: 4, development: 1, part: 8 },
    "Soft & Wet": { power: 3, speed: 4, range: 2, stamina: 4, precision: 3, development: 5, part: 8 },
    // PURPLE HAZE FEEDBACK
    "Manic Depression": { power: 3, speed: 5, range: 1, stamina: 4, precision: 4, development: 3, part: 10 },
    "Voodoo Child": { power: 4, speed: 5, range: 1, stamina: 1, precision: 4, development: 4, part: 10 },
    "All Along Watchtower": { power: 3, speed: 4, range: 5, stamina: 5, precision: 5, development: 1, part: 10 },
    "Dolly Dagger": { power: 5, speed: 5, range: 3, stamina: 5, precision: 4, development: 3, part: 10 },
    "Nightbird Flying": { power: 1, speed: 5, range: 5, stamina: 5, precision: 1, development: 1, part: 10 },
    // "Purple Haze Distortion": {power: 5, speed: 4, range: 1, stamina: 1, precision: 3, development: -1 },
    "Rainy Day Dream Away": { power: 1, speed: 4, range: 0, stamina: 5, precision: 5, development: 0, part: 10 }
}

function choose(array) {
    return array[Math.floor(Math.random() * array.length)]
}
function compare(input, attr) {
    if (stands[input][attr] < stands[standname][attr]) return "🔼"
    else if (stands[input][attr] > stands[standname][attr]) return "🔽"
    else return "✅"
}
function reconvert(num) {
    switch (num) {
        case 0:
            return "∅";
            break;
        case 1:
            return "E";
            break;
        case 2:
            return "D";
            break;
        case 3:
            return "C";
            break;
        case 4:
            return "B";
            break;
        case 5:
            return "A";
            break;
        case 6:
            return "∞";
            break;
        default:
            return "?"
            break;
    }
}

function toggle(value) {
    return value ? false : true
}


async function copy(text) {
    try {
        await navigator.clipboard.writeText(text);
        document.getElementById('copy').innerHTML = "Copied"
        setTimeout(() => {
            document.getElementById('copy').innerHTML = "🔗"
        }, 2000)
    } catch (error) {
        console.error(error.message);
    }
}

function setQString(name, value) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set(name, value);
    window.location.search = searchParams.toString();
}

let params = (new URL(document.location)).searchParams;
let endless = params.get('endless') || false

var standle = Math.ceil(new Date().getTime() / (1000 * 60 * 60 * 24)) - 19820
var epochstand = Object.keys(stands)[Math.round(((+((((Math.cos(standle)) * 100).toString()).slice(5, 8))) / 1000) * Object.keys(stands).length)]
var standname = (!endless ? epochstand : choose(Object.keys(stands)))
console.log(endless, standname, stands[epochstand])
var stand = stands[standname]
var settingsOpen = false
let lives = 6
var savedCopy = `WubWub`;
var guesses = [];
updateLives(lives)
populateDropdown(false)

function populateDropdown(easy) {
    var s = Object.keys(stands)
    var ss = s.sort()
    ss.forEach((e) => {
        var stats = [];
        Object.entries(stands[e]).forEach((el) => {
            if (el[0] !== "part") {
                el.forEach((ele, i) => {
                    if (i % 2 !== 0) {
                        stats.push(reconvert(ele))
                    }
                })
            }
        })
        document.getElementById('in').innerHTML += `<option value="${e}">${e}${easy ? "(" + stats.join(' ') + ")" : ""}</option>`
    });
}

function updateLives(lives) {
    var emoji = (Math.round(Math.random() * 100)) == 1 ? "ORA " : "⭐"
    document.getElementById('result').innerHTML = emoji.repeat(lives)
}

function openSettings() {
    settingsOpen = toggle(settingsOpen)
    if (settingsOpen == false) {
        document.getElementById('settings').innerHTML = `<button id="settingsButton" onclick="openSettings()">⚙️</button>`
    }
    if (settingsOpen == true) {
        document.getElementById('settings').innerHTML = `
        <button id="settingsButton" onclick="openSettings()">⚙️</button> |
        Show Stats in Dropdown: <input type="checkbox" id="difficulty" oninput="difficultyChange(value)"/> |
        Toggle Endless Mode: <input type="checkbox" id="difficulty" oninput="setQString('endless', toggle(endless) ? 'true' : '')"/> |
        `
    }
}

function difficultyChange(easier) {
    if (easier) {
        document.getElementById('in').innerHTML = ""
        populateDropdown(true)
    } else {
        document.getElementById('in').innerHTML = ""
        populateDropdown(false)
    }
}

function check(input) {
    if (input == standname) {
        savedCopy += `${"✅✅✅✅✅✅✅"}`
        savedCopy = savedCopy.replace('WubWub', `I got Standle #${endless ? "Endless" : standle} in ${6 - lives + 1} guesses - https://bit.ly/Standle\n`)
        document.getElementById('result').innerHTML = `<span style="color: lightgreen">You Win!</span><p /> The stand was...
        <table id="win">
            <tr><th></th><th>Power</th><th>Speed</th><th>Range</th><th>Stamina</th><th>Precision</th><th>Development</th><th>Part</th></tr>
            <tr><th>${input}</th><td>${reconvert(stands[input].power)}</td><td>${reconvert(stands[input].speed)}</td><td>${reconvert(stands[input].range)}</td><td>${reconvert(stands[input].stamina)}</td><td>${reconvert(stands[input].precision)}</td><td>${reconvert(stands[input].development)}</td><td>${stands[input].part > 9 ? "Beyond Mainline" : stands[input].part}</td></tr>
        </table >
        <p /><div id="savedCopy">${savedCopy}</div>
        <p /><button onclick="!endless ? copy(savedCopy) : window.location.reload()" id="copy">${endless ? "🔄Refresh" : "🔗Copy"}</button>
        `
        document.getElementById('result').style.border = "1px solid"
        document.getElementById('input').innerHTML = ""
        //Session storage handling
        guesses.push(input)
        sessionStorage.setItem(standle, guesses)
        //end
    } else {
        var correction = {};
        correction.power = compare(input, "power")
        correction.speed = compare(input, "speed")
        correction.range = compare(input, "range")
        correction.stamina = compare(input, "stamina")
        correction.precision = compare(input, "precision")
        correction.development = compare(input, "development")
        correction.part = compare(input, "part")
        lives -= 1
        updateLives(lives)
        //Session storage handling
        guesses.push(input)
        sessionStorage.setItem(standle, guesses)
        //end
        savedCopy += `${Object.values(correction).join('')}\n`
        document.getElementById('guesses').innerHTML += `
            <tr><th>${input}</th><td>${reconvert(stands[input].power)}${correction.power}</td><td>${reconvert(stands[input].speed)}${correction.speed}</td><td>${reconvert(stands[input].range)}${correction.range}</td><td>${reconvert(stands[input].stamina)}${correction.stamina}</td><td>${reconvert(stands[input].precision)}${correction.precision}</td><td>${reconvert(stands[input].development)}${correction.development}</td><td>${stands[input].part > 9 ? "Beyond Mainline" : stands[input].part}${correction.part}</td></tr>
        `
        if (lives == 0) {
            savedCopy = savedCopy.replace('WubWub', `I did not get Standle #${endless ? "Endless" : standle} - https://bit.ly/Standle\n`)
            document.getElementById('result').innerHTML = `<span style="color: pink">You Lost</span> <p /> The stand was...
            <table id="fail">
                    <tr><th></th><th>Power</th><th>Speed</th><th>Range</th><th>Stamina</th><th>Precision</th><th>Development</th><th>Part</th></tr>
                    <tr><th>${standname}</th><td>${reconvert(stands[standname].power)}</td><td>${reconvert(stands[standname].speed)}</td><td>${reconvert(stands[standname].range)}</td><td>${reconvert(stands[standname].stamina)}</td><td>${reconvert(stands[standname].precision)}</td><td>${reconvert(stands[standname].development)}</td><td>${stands[standname].part > 9 ? "Beyond Mainline" : stands[standname].part}</td></tr>
            </table>
            <p /><div id="savedCopy">${savedCopy}</div>
            <p /><button onclick="!endless ? copy(savedCopy) : window.location.reload()" id="copy">${endless ? "🔄Refresh" : "🔗Copy"}</button>
            `
            //Session storage handling
            guesses.push(input)
            sessionStorage.setItem(standle, guesses)
            //end
            document.getElementById('result').style.border = "1px solid"
            document.getElementById('input').innerHTML = ""
        }
    }
}

if(sessionStorage.getItem(standle)){
    sessionStorage.getItem(standle).split(',').forEach((e) =>{
        check(e)
    })
}