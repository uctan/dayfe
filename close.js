var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconColose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

function toggleModal(e){
    console.log(e.target)
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
iconColose.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if (e.target == e.currentTarget){
        toggleModal()
    }
})