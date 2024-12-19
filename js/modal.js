// Selecciona todos los botones que abren un modal
const openModalButtons = document.querySelectorAll('.hero__cta');

// Selecciona todos los botones que cierran un modal
const closeModalButtons = document.querySelectorAll('.modal__close');

// Abre el modal correspondiente
openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = button.getAttribute('data-modal'); // Obtén el ID del modal
        const modal = document.getElementById(modalId); // Encuentra el modal correspondiente
        modal.classList.add('modal--show');
    });
});

// Cierra el modal correspondiente
closeModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = button.closest('.modal'); // Encuentra el modal padre
        modal.classList.remove('modal--show');
    });
});