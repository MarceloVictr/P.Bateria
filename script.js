document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }

})

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
  
    songArray.forEach((item) => {
      setTimeout(() => {
        playSound(`key${item}`);
      }, wait);
      wait += 250;
    });
  }