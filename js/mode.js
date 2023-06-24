import {
    forestCard,
    rainCard,
    coffeShopCard,
    fireplaceCard,
    minutesDisplay,
    secondsDisplay,
} from "./elements.js";

export function Mode({
    lightMode,
    darkMode,
})
{

    const body = document.querySelector('body');
    const dots = document.querySelector('.dots');
    const treeIcon = document.querySelector('.tree');
    const shopIcon = document.querySelector('.shop');
    const fireIcon = document.querySelector('.fire');
    const darkTree = document.querySelector('.darkTree');
    const darkShop = document.querySelector('.darkShop');
    const darkFire = document.querySelector('.darkFire');
    const playIcon = document.querySelector('.playIcon');
    const stopIcon = document.querySelector('.stopIcon');
    const increaseIcon = document.querySelector('.increaseIcon');
    const decreaseIcon = document.querySelector('.decreaseIcon');
    const darkPlayIcon = document.querySelector('.darkPlayIcon');
    const darkStopIcon = document.querySelector('.darkStopIcon');
    const darkIncreaseIcon = document.querySelector('.darkIncreaseIcon');
    const darkDecreaseIcon = document.querySelector('.darkDecreaseIcon');

    function lightModeOn(){
        lightMode.classList.add('hidden');
        darkMode.classList.remove('hidden');
        body.classList.add('darkApp');
        dots.classList.add('white');
        treeIcon.classList.add('hidden');
        shopIcon.classList.add('hidden');
        fireIcon.classList.add('hidden');
        darkTree.classList.remove('hidden');
        darkShop.classList.remove('hidden');
        darkFire.classList.remove('hidden');
        playIcon.classList.add('hidden');
        stopIcon.classList.add('hidden');
        increaseIcon.classList.add('hidden');
        decreaseIcon.classList.add('hidden');
        darkPlayIcon.classList.remove('hidden');
        darkStopIcon.classList.remove('hidden');
        darkIncreaseIcon.classList.remove('hidden');
        darkDecreaseIcon.classList.remove('hidden');
        forestCard.classList.add('darkCard');
        rainCard.classList.add('darkCard2');
        coffeShopCard.classList.add('darkCard');
        fireplaceCard.classList.add('darkCard');
        minutesDisplay.classList.add('white');
        secondsDisplay.classList.add('white');
    }

    function darkModeOn(){
        lightMode.classList.remove('hidden');
        darkMode.classList.add('hidden');
        body.classList.remove('darkApp');
        dots.classList.remove('white');
        treeIcon.classList.remove('hidden');
        shopIcon.classList.remove('hidden');
        fireIcon.classList.remove('hidden');
        darkTree.classList.add('hidden');
        darkShop.classList.add('hidden');
        darkFire.classList.add('hidden');
        playIcon.classList.remove('hidden');
        stopIcon.classList.remove('hidden');
        increaseIcon.classList.remove('hidden');
        decreaseIcon.classList.remove('hidden');
        darkPlayIcon.classList.add('hidden');
        darkStopIcon.classList.add('hidden');
        darkIncreaseIcon.classList.add('hidden');
        darkDecreaseIcon.classList.add('hidden');
        forestCard.classList.remove('darkCard');
        rainCard.classList.remove('darkCard2');
        coffeShopCard.classList.remove('darkCard');
        fireplaceCard.classList.remove('darkCard');
        minutesDisplay.classList.remove('white');
        secondsDisplay.classList.remove('white');
    }

    return {
        lightModeOn,
        darkModeOn,
    }
}