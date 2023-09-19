const string = "Hello"

function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
    return string.toUpperCase();
}
function logWhisper(string) {
    console.log(string.toLowerCase())
    return string.toLowerCase();
}
function sayHiToHeadphonedRoommate(string) {
    console.log(string.toLowerCase());
    if (string.toLowerCase()===string){
    return "I can't hear you!"
}
    if (string.toUpperCase()===string) {
        console.log(string.toUpperCase());
        return "YES INDEED!"
    }   
    if (string==="Let's have dinner together!") {
        return "I would love to!"
    }
}
