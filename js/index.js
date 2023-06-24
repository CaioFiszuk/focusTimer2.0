import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Mode } from "./mode.js";
import {
    forestCard,
    rainCard,
    coffeShopCard,
    fireplaceCard,
    btnPlay,
    btnStop,
    btnIncrease,
    btnDecrease,
    darkMode,
    lightMode,
    minutesDisplay,
    secondsDisplay,
} from "./elements.js";

const sounds = Sounds({
    forestCard,
    rainCard,
    coffeShopCard,
    fireplaceCard,
})

const timer = Timer({
   minutesDisplay,
   secondsDisplay,
});

const mode = Mode({
    lightMode,
    darkMode,
});

forestCard.addEventListener('click', ()=>{
    sounds.forestAmbient();
    sounds.forestVolumeControl();
});

rainCard.addEventListener('click', ()=>{
    sounds.rainAmbient();
    sounds.rainVolumeControl();
})

coffeShopCard.addEventListener('click', ()=>{
    sounds.coffeShopAmbient();
    sounds.coffeShopVolumeControl();
})

fireplaceCard.addEventListener('click', ()=>{
    sounds.fireplaceAmbient();
    sounds.fireplaceVolumeControl();
})

btnPlay.addEventListener('click', ()=>{
   timer.countdown();
});

btnStop.addEventListener('click', ()=>{
    timer.stop();
})

btnIncrease.addEventListener('click', ()=>{
    timer.increase();
});

btnDecrease.addEventListener('click', ()=>{
    timer.decrease();
})

lightMode.addEventListener('click', ()=>{
    mode.lightModeOn();
});

darkMode.addEventListener('click', ()=>{
    mode.darkModeOn();
})

