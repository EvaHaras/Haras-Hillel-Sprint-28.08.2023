const buttons = document.querySelectorAll('.discover__button');
const cards = document.querySelectorAll('.discover__card');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach((button) => {
            button.classList.remove('active')
        });

        const cardsFor = button.dataset.for;
        
        cards.forEach((card) => {
            card.classList.remove('active');
        });

        cards.forEach(card => {
            const tab = card.dataset.tab;
            if (tab === cardsFor) {
                card.classList.add('active');
            }
        });

        button.classList.add('active');
    });
});