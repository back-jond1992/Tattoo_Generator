// modal/overlay JS

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const overlay2 = document.getElementById('overlay2')
const overlay3 = document.getElementById('overlay3')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

overlay2.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

overlay3.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    overlay2.classList.add('active')
    overlay3.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    overlay2.classList.remove('active')
    overlay3.classList.remove('active')
}

//modal thumbnail image JS
//basic image slider function

let basic_img = document.querySelector('#basicFlashImage');
let basicFlashImages = [
    'dragon.jpg',
    'eagle.jpg',
    'heart.jpg',
    'mother.jpg',
    'panther.jpg',
    'rose.jpg',
    'ship.jpg',
    'skull.jpg',
    'swallow.jpg'
]

let i = 0;

function prev() {
    if(i <= 0) i = basicFlashImages.length;
    i--;
    return setImg();
}

function next() {
    if(i >= basicFlashImages.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return basic_img.setAttribute('src', 'tattoo_images/' + 'Basic/' + basicFlashImages[i])
}

//intermediate image slider function

let intermediate_img = document.querySelector('#intermediateFlashImage');
let intermediateFlashImages = [
    'jesus.jpg',
    'mans_ruin.jpg',
    'pharoahs_horses.jpg',
    'rose_of_no_mans_land.jpg'
]

let j = 0;

function prev2() {
    if(j <= 0) j = intermediateFlashImages.length;
    j--;
    return setImg2();
}

function next2() {
    if(j >= intermediateFlashImages.length - 1) j = -1;
    j++;
    return setImg2();
}

function setImg2() {
    return intermediate_img.setAttribute('src', 'tattoo_images/' + 'Intermediate/' + intermediateFlashImages[j])
}

//intermediate image slider function

let badass_img = document.querySelector('#badassFlashImage');
let badassFlashImages = [
    'battle_royale.jpg',
    'crucifiction.jpg',
    'rock_of_ages.jpg'
]

let k = 0;

function prev3() {
    if(k <= 0) k = badassFlashImages.length;
    k--;
    return setImg3();
}

function next3() {
    if(k >= badassFlashImages.length - 1) k = -1;
    k++;
    return setImg3();
}

function setImg3() {
    return badass_img.setAttribute('src', 'tattoo_images/' + 'Badass/' + badassFlashImages[k])
}