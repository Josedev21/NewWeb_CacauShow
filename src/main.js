document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbasAtivas()
            aba.classList.add('shows__layout__produtos__list--is-active')
            
            removeButtonActive()
            botao.target.classList.add('shows__layout__list__item--is-active');

        })
    }
})

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length;i++) {
        buttons[i].classList.remove('shows__layout__list__item--is-active')
    }
}

function escondeAbasAtivas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__layout__produtos__list--is-active')
    }
}