exports.getTimePresentation = (miliseconds) => {
    let minutes = Math.floor(miliseconds / 60000);
    let seconds = Math.floor((miliseconds - minutes * 60000) / 1000);
    minutes = minutes >=10 ? minutes : `0${minutes}`;
    seconds = seconds >=10 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`; 
}