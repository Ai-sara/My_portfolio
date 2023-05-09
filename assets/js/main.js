/*=============== FILTERS TABS ===============*/
const tabs=document.querySelectorAll('[data-target]'),
      tabContent=document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target=document.querySelector(tab.dataset.target);

        tabContent.forEach(tc=>{
            tc.classList.remove('filters__active')
        })

        target.classList.add('filters__active')

        tabs.forEach(t=>{
            t.classList.remove('filters-tab-active')
        })
        tab.classList.add('filters-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay:500})
sr.reveal(`.profile__profession`, {delay:600})
sr.reveal(`.profile__social`, {delay:700})
sr.reveal(`.profile__info-group`, {interval:100,delay:700})
sr.reveal(`.profile__buttons`, {delay:800})
sr.reveal(`.change-theme`, {delay:800})
sr.reveal(`.filters__content`, {delay:900})
sr.reveal(`.filters`, {delay:1000})

// /*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent),
    projectContainer=document.getElementById('bg');
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal');
            projectContainer.classList.add('bg-active')
        })
    }



}
showModal('open-modal_1','modal__content_1');
showModal('open-modal_2','modal__content_2');
showModal('open-modal_3','modal__content_3');
showModal('open-modal_4','modal__content_4');
showModal('open-modal_5','modal__content_5')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))


// let preveiwContainer = document.querySelector('.modal__container');
let previewBox = document.querySelectorAll('.modal__content');

// document.querySelectorAll('.projects__content .projects__card').forEach(product =>{
//   product.onclick = () =>{
//     preveiwContainer.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       let target = preview.getAttribute('data-target');
//       if(name == target){
//         preview.classList.add('show-modal');
//       }
//     });
//   };
// });

previewBox.forEach(close =>{
    const projectContainer=document.getElementById('bg');
  close.querySelector('.close-modal').onclick = () =>{
    close.classList.remove('show-modal');
    projectContainer.classList.remove('bg-active')
    // preveiwContainer.style.display = 'none';
  };

});