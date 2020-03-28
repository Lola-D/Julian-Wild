let modal = null

const openModal = function(evenement) {
    evenement.preventDefault()
    const target = document.querySelector(evenement.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
}

const closeModal = function(evenement) {
    if (modal === null) return
    evenement.preventDefault()
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal = null
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})

window.addEventListener('keydown', function (evenement) {
    if (evenement.key === "Escape" || evenement.key === "Esc") {
        closeModal(evenement)
    }
})