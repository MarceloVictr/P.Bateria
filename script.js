document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLowerCase());
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        //setTimeout(()=>{
        //    keyElement.classList.('active');
        //}, 400);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray){
        
        setTimeout(()=>{

            playSound(`key${songItem}`);

        }, wait);

        wait += 250;
    }
}