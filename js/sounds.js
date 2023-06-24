export function Sounds({
    forestCard,
    rainCard,
    coffeShopCard,
    fireplaceCard,
  })
  {
  
    const forest = new Audio('./audio/Floresta.wav');
    const rain = new Audio('./audio/Chuva.wav');
    const coffe = new Audio('./audio/Cafeteria.wav');
    const fireplace = new Audio('./audio/Lareira.wav');
    
    const forestVolume = document.querySelector('.forestVolume');
    const rainVolume = document.querySelector('.rainVolume');
    const coffeShopVolume = document.querySelector('.coffeShopVolume');
    const fireplaceVolume = document.querySelector('.fireplaceVolume');

    let forestSoundOn = false;
    let rainSoundOn = false;
    let coffeShopSoundOn = false;
    let fireplaceSoundOn = false;
  
    function forestAmbient(){

      forestSoundOn = !forestSoundOn;
  
      if(forestSoundOn){

        if(forestCard.classList.contains('darkCard')){
            forestCard.classList.toggle('darkCard-clicked');

        }else{
            forestCard.classList.toggle('card-clicked1');
        };

        forest.play();
  
      }else{
        forestCard.classList.remove('card-clicked1');
  
        forest.pause();
      }
    }
  
    function rainAmbient(){
  
      rainSoundOn = !rainSoundOn;
      
      if(rainSoundOn){

        if(rainCard.classList.contains('darkCard2')){

            rainCard.classList.toggle('darkCard2-clicked2');
        }else{

            rainCard.classList.toggle('card-clicked2');
        }
  
          rain.play();
      }else{

        rainCard.classList.remove('card-clicked2');
  
        rain.pause();
      }
    }
  
    function coffeShopAmbient(){

      coffeShopSoundOn = !coffeShopSoundOn;
  
      if(coffeShopSoundOn){

        if(coffeShopCard.classList.contains('darkCard'))
        {
            coffeShopCard.classList.toggle('darkCard-clicked');

        }else{
            coffeShopCard.classList.toggle('card-clicked1');
        };
   
        coffe.play();
      }else{
        coffeShopCard.classList.remove('card-clicked1');
   
        coffe.pause();
      }
    }
  
    function fireplaceAmbient(){
  
      fireplaceSoundOn = !fireplaceSoundOn;
      
      if(fireplaceSoundOn){

        if(fireplaceCard.classList.contains('darkCard'))
        {
            fireplaceCard.classList.toggle('darkCard-clicked');

        }else{

            fireplaceCard.classList.toggle('card-clicked1');
        };
  
          fireplace.play();
      }else{

        fireplaceCard.classList.remove('card-clicked1');
  
        fireplace.pause();
      }
    }

    function forestVolumeControl(){
      if(forestVolume.value == 0){
         forest.pause();
     }else if(forestVolume.value > 0 && forestVolume.value <=10){
         forest.volume = 0.1;
         forest.play();
     }else if(forestVolume.value > 10 && forestVolume.value <=20){
         forest.volume = 0.2;
         forest.play();
     }else if(forestVolume.value > 20 && forestVolume.value <=30){
         forest.volume = 0.3;
         forest.play();
     }else if(forestVolume.value > 30 && forestVolume.value <=40){
         forest.volume = 0.4;
         forest.play();
     }else if(forestVolume.value > 40 && forestVolume.value <=50){
         forest.volume = 0.5;
         forest.play();
     }else if(forestVolume.value > 50 && forestVolume.value <=60){
         forest.volume = 0.6;
         forest.play();
     }else if(forestVolume.value > 60 && forestVolume.value <=70){
         forest.volume = 0.7;
         forest.play();
     }else if(forestVolume.value > 70 && forestVolume.value <=80){
         forest.volume = 0.8;
         forest.play();
     }else if(forestVolume.value > 80 && forestVolume.value <=90){
         forest.volume = 0.9;
         forest.play();
     }else if(forestVolume.value > 90){
         forest.volume = 1;
         forest.play();
     }
    }

    function rainVolumeControl(){
      if(rainVolume.value == 0){
         rain.pause();
     }else if(rainVolume.value > 0 && rainVolume.value <=10){
         rain.volume = 0.1;
         rain.play();
     }else if(rainVolume.value > 10 && rainVolume.value <=20){
         rain.volume = 0.2;
         rain.play();
     }else if(rainVolume.value > 20 && rainVolume.value <=30){
         rain.volume = 0.3;
         rain.play();
     }else if(rainVolume.value > 30 && rainVolume.value <=40){
         rain.volume = 0.4;
         rain.play();
     }else if(rainVolume.value > 40 && rainVolume.value <=50){
         rain.volume = 0.5;
         rain.play();
     }else if(rainVolume.value > 50 && rainVolume.value <=60){
         rain.volume = 0.6;
         rain.play();
     }else if(rainVolume.value > 60 && rainVolume.value <=70){
         rain.volume = 0.7;
         rain.play();
     }else if(rainVolume.value > 70 && rainVolume.value <=80){
         rain.volume = 0.8;
         rain.play();
     }else if(rainVolume.value > 80 && rainVolume.value <=90){
         rain.volume = 0.9;
         rain.play();
     }else if(rainVolume.value > 90){
         rain.volume = 1;
         rain.play();
     }
    }

    function coffeShopVolumeControl(){
      if(coffeShopVolume.value == 0){
        coffe.pause();
     }else if(coffeShopVolume.value > 0 && coffeShopVolume.value <=10){
        coffe.volume = 0.1;
        coffe.play();
     }else if(coffeShopVolume.value > 10 && coffeShopVolume.value <=20){
         coffe.volume = 0.2;
         coffe.play();
     }else if(coffeShopVolume.value > 20 && coffeShopVolume.value <=30){
         coffe.volume = 0.3;
         coffe.play();
     }else if(coffeShopVolume.value > 30 && coffeShopVolume.value <=40){
         coffe.volume = 0.4;
         coffe.play();
     }else if(coffeShopVolume.value > 40 && coffeShopVolume.value <=50){
         coffe.volume = 0.5;
         coffe.play();
     }else if(coffeShopVolume.value > 50 && coffeShopVolume.value <=60){
         coffe.volume = 0.6;
         coffe.play();
     }else if(coffeShopVolume.value > 60 && coffeShopVolume.value <=70){
         coffe.volume = 0.7;
         coffe.play();
     }else if(coffeShopVolume.value > 70 && coffeShopVolume.value <=80){
         coffe.volume = 0.8;
         coffe.play();
     }else if(coffeShopVolume.value > 80 && coffeShopVolume.value <=90){
         coffe.volume = 0.9;
         coffe.play();
     }else if(coffeShopVolume.value > 90){
         coffe.volume = 1;
         coffe.play();
     }
    }

    function fireplaceVolumeControl(){
      if(fireplaceVolume.value == 0){
         fireplace.pause();
     }else if(fireplaceVolume.value > 0 && fireplaceVolume.value <=10){
         fireplace.volume = 0.1;
         fireplace.play();
     }else if(fireplaceVolume.value > 10 && fireplaceVolume.value <=20){
         fireplace.volume = 0.2;
         fireplace.play();
     }else if(fireplaceVolume.value > 20 && fireplaceVolume.value <=30){
         fireplace.volume = 0.3;
         fireplace.play();
     }else if(fireplaceVolume.value > 30 && fireplaceVolume.value <=40){
         fireplace.volume = 0.4;
         fireplace.play();
     }else if(fireplaceVolume.value > 40 && fireplaceVolume.value <=50){
         fireplace.volume = 0.5;
         fireplace.play();
     }else if(fireplaceVolume.value > 50 && fireplaceVolume.value <=60){
         fireplace.volume = 0.6;
         fireplace.play();
     }else if(fireplaceVolume.value > 60 && fireplaceVolume.value <=70){
         fireplace.volume = 0.7;
         fireplace.play();
     }else if(fireplaceVolume.value > 70 && fireplaceVolume.value <=80){
         fireplace.volume = 0.8;
         fireplace.play();
     }else if(fireplaceVolume.value > 80 && fireplaceVolume.value <=90){
         fireplace.volume = 0.9;
         fireplace.play();
     }else if(fireplaceVolume.value > 90){
         fireplace.volume = 1;
         fireplace.play();
     }
    }
  
    return {
      forestAmbient,
      rainAmbient,
      coffeShopAmbient,
      fireplaceAmbient,
      forestVolumeControl,
      rainVolumeControl,
      coffeShopVolumeControl,
      fireplaceVolumeControl,
    }
  }