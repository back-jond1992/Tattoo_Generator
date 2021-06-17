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

let basic_img = document.getElementById('basic_image');
let b_images = [
    Basic/dragon.jpg,
    Basic/eagle.jpg,
    Basic/heart.jpg,
    Basic/mother.jpg,
    Basic/panther.jpg,
    Basic/rose.jpg,
    Basic/ship.jpg,
    Basic/skull.jpg,
    Basic/swallow.jpg
]
let i = 0;

function prev() {
    if(i <= 0) i = b_images.length;
    i--;
    return setImg();
}

function next() {
    if(i >= b_images.length-1) i=-1;
    i++;
    return setImg();
}

function setImg() {
    return basic_img.setAttribute('src', 'tattoo_images/' + b_images[i])
}
