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
let basic_cptn = document.getElementById('basicCaption');

let basicFlashImages = [
    'dragon.jpg',
    'eagle.jpg',
    'heart.jpg',
    'mother.jpg',
    'panther.jpg',
    'rose.jpg',
    'ship.jpg',
    'skull.jpg',
    'swallow.jpg',
    'good_luck.jpg',
    'grim_reaper.jpg',
    'snakes.jpg',
    'butterfly.jpg',
    'wolf.jpg',
    'girls.jpg'
]

let basicCaptions = [
    'Dragon, hot stuff!',
    'The eagle has landed.',
    'Big love.',
    'I love you mum!',
    "Panther? Don't mind if do!",
    'Kiss from a rose.',
    'Ahoy sailor.',
    'Yes please!',
    'Simple but beautiful.',
    'Good luck bro!',
    'Gruesome!',
    'Elongated, limbless, carnivorous reptiles.',
    'Lovely.',
    'Oooooooooooooooowhoo!!!',
    'Girls, girls, girls!'
]

let i = 0;

function prev() {
    if(i <= 0) i = basicFlashImages.length;
    i--;
    if(i <= 0) i = basicCaptions.length;
    return setImg(), setCptn();
}

function next() {
    if(i >= basicFlashImages.length) i = 0;
    i++;
    if(i >= basicCaptions.length ) i = 0;
    return setImg(), setCptn();
}

function setImg() {
    return basic_img.setAttribute('src', 'tattoo_images/' + 'Basic/' + basicFlashImages[i])
}

function setCptn() {
    return basic_cptn.innerHTML = basicCaptions[i];
}


//intermediate image slider function

let intermediate_img = document.querySelector('#intermediateFlashImage');
let intermediate_cptn = document.getElementById('intermediateCaption');

let intermediateFlashImages = [
    'jesus.jpg',
    'mans_ruin.jpg',
    'pharoahs_horses.jpg',
    'rose_of_no_mans_land.jpg',
    'tiger_and_snake.jpg',
    'virgin_mary.jpg',
    'butterfly_lady.jpg',
    'snake_and_eagle.jpg',
    'sacred_heart.jpg',
    'mermaid.jpg',
    'true_love.jpg',
    'pinup.jpg',
    'battle_royale.jpg',
    'crucifiction.jpg',
    'rock_of_ages.jpg',
    'sundance.jpg'
]

let intermediateCaptions = [
    'Our lord and saviour.',
    'Ruined me, ruin you too.',
    'A reflection of the human spirit.',
    'La rose sous le boulets.',
    'What a combo!',
    'Mother of god, Blessed Mother, Madonna, Our Lady.',
    'Would look great on your chest...',
    'Who will? Snake or Eagle?',
    'The most sacred heart of Jesus.',
    'Sailors beware!',
    'True love will find you in the end.',
    'Sorry mum.',
    "Wouldn't want to get in the way of that battle.",
    "Jesus died for somebody's sins but not mine.",
    'Rock of Ages.',
    'Dancing for some sun.'
]

let j = 0;

function prev2() {
    if(j <= 0) j = intermediateFlashImages.length;
    j--;
    if(j <= 0) j = intermediateCaptions.length;
    return setImg2(), setCptn2();
}

function next2() {
    if(j >= intermediateFlashImages.length) j = 0;
    j++;
    if(j >= intermediateCaptions.length) j = 0;
    return setImg2(), setCptn2();
}

function setImg2() {
    return intermediate_img.setAttribute('src', 'tattoo_images/' + 'Intermediate/' + intermediateFlashImages[j])
}

function setCptn2() {
    return intermediate_cptn.innerHTML = intermediateCaptions[j];
}

//badass image slider function

let badass_img = document.querySelector('#badassFlashImage');
let badass_cptn = document.getElementById('badassCaption');

let badassFlashImages = [
    'lady_bodysuit.jpg',
    'front_piece.jpg',
    'full_back.jpg',
    'old.jpg',
    'jaboc.jpg',
    'simple.jpg',
    'devil.jpg',
    'front_lady.jpg',
    'marvin.jpg'
]

let badassCaptions = [
    "Now we're talking!",
    'Take me now.',
    'This is art.',
    'The moustache is a must.',
    'Naughty... but I like it.',
    'Simple. Pleasing on the eye.',
    'Bad to the bone.',
    'Tattoos are forever.',
    'Im walking on sunshine.'
]

let k = 0;

function prev3() {
    if(k <= 0) k = badassFlashImages.length;
    k--;
    if(k <= 0) k = badassCaptions.length
    return setImg3(), setCptn3();
}

function next3() {
    if(k >= badassFlashImages.length) k = 0;
    k++;
    if(k >= badassCaptions.length) k = 0;
    return setImg3(), setCptn3();
}

function setImg3() {
    return badass_img.setAttribute('src', 'tattoo_images/' + 'Badass/' + badassFlashImages[k])
}

function setCptn3() {
    return badass_cptn.innerHTML = badassCaptions[k];
}
