const bottomSection = document.querySelector("#bottomSection")
const bottomSectionWrapper = document.querySelector("#bottomSectionWrapper")
const nav = document.querySelector("#nav")
const info = Array.from(document.querySelectorAll(".info"))
const songSelector = document.querySelector("#songSelector")
const clientId = "c8ec3ce2c45744aba5d6ea3600369586"
const clientSecret = "6ab8f00bd049463989778aee207b0630"
const scopes = "user-read-currently-playing user-read-playback-state"
const redirectUri = "http://127.0.0.1:3000/callback.html";

function setBottomSectionHeight(nav, wrapper){
    var navBoundingClientTop = nav.getBoundingClientRect().top
    var wrapperBoundingClientTop = wrapper.getBoundingClientRect().top
    var setHeight = navBoundingClientTop - wrapperBoundingClientTop
    wrapper.style["height"] = (setHeight - 20) + "px"
}

function populate(info, object){
    var elementList = []
    for (let i = 0; i < info.length; i++) {
        const element = info[i];
        const key = Object.keys(object)[i]
        const objectData = object[key]
        elementList.push(objectData)
        if(element.src){
            element.src = objectData
        }
        else{
            element.textContent = objectData
        }
    }
    console.log(elementList)
}

function loginWithSpotify(clientId, redirectUri, scopes){
    const authUrl = new URL("https://accounts.spotify.com/authorize")
    authUrl.searchParams.set("client_id", clientId)
    authUrl.searchParams.set("response_type", "token")
    authUrl.searchParams.set("redirect_uri", redirectUri)
    authUrl.searchParams.set("scope", scopes)
    
    window.location.href = authUrl
}



/*
async function getAccessToken(clientId, clientSecret) {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization:
            "Basic " + btoa(`${clientId}:${clientSecret}`),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    })
    const data = await response.json()
    return data.access_token
    
    async function searchTrack(query, token) {
        const response = await fetch ( "https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track",)
             {
        headers: {
                Authorization: 'Bearer ${token}`
                }
            }
};
    const data = await response.json();
    console.log(data.tracks.items);
}
    data.tracks.items.forEach((track) => {
        console.log(track.name + "by" + track.artists[0].name);
        });


console.log(getAccessToken("c8ec3ce2c45744aba5d6ea3600369586", "6ab8f00bd049463989778aee207b0630"))
*/

const loader = {
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6Vx-mh16abscZrntqeJ4ot8WfYZvlnGoWg&s",
    name: "Song Name",
    artist: "Artist",
    date: "Jan 1, 1900",
    album: "Album",
    length: "4min 30sec",
    streams: "100,000",
    genre: "Rock",
    key: "A Minor",
    camelot: "10A",
    bpm: "120 bpm",
    popularity: "100",
    timeSignature: "4/4",
    label: "Universal Records"
}

const whileMyGuitarGentlyWeeps = {
    albumCover: "https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg",
    name: "While my Guitar Gently Weeps",
    artist: "The Beatles",
    date: "Nov 22, 1968",
    album: "The Beatles",
    length: "4min 45sec",
    streams: "316,000,000",
    genre: "Rock",
    key: "A Minor",
    camelot: "10A",
    bpm: "113 bpm",
    popularity: "87",
    timeSignature: "4/4",
    label: "Apple Records"
}
const POP = {
    albumCover: "https://i.scdn.co/image/ab67616d0000b2735331adabe62a482b2daebed6",
    name: "POP",
    artist: "Osamason",
    date: "Dec 8, 2023",
    album: "Flex Musix (FLXTRA)",
    length: "1min 49sec",
    streams: "16,681,182",
    genre: "Rap",
    key: "Ab Minor",
    camelot: "1A",
    bpm: "161 bpm",
    popularity: "25",
    timeSignature: "4/4",
    label: "Atlantic Records and MBZ Music"
}
const layla = {
    albumCover: "https://m.media-amazon.com/images/I/71aBthW-zPL._UF1000,1000_QL80_.jpg",
    name: "Layla", 
    artist: "Derek and the Dominos",
    date: "Nov 9, 1970",
    album: "Layla and Other Assorted Love Songs",
    length: "7min 4sec",
    streams: "363,000,000",
    genre: "Rock",
    key: "D Minor",
    camelot: "7A",
    bpm: "116 bpm",
    popularity: "64",
    timeSignature: "12/8",
    label: "Atco Records"
}

populate(info, loader)

songSelector.addEventListener("change", () =>{
    if (songSelector.value == "guitarWeeps") {
        populate(info, whileMyGuitarGentlyWeeps)
    }
    else if (songSelector.value == "pop") {
        populate(info, POP)
    }
    else if (songSelector.value == "layla") {
        populate(info, layla)
    }
    else if (songSelector.value == "default") {
        populate(info, loader)
    }
})

console.log(whileMyGuitarGentlyWeeps.name)

window.addEventListener('load', () => setBottomSectionHeight(nav, bottomSectionWrapper))
window.addEventListener('resize', () => setBottomSectionHeight(nav, bottomSectionWrapper))