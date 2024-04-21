// Получение ссылок на модальные окна и кнопки
const modal1 = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const modal5 = document.getElementById("myModal5");
const modal6 = document.getElementById("myModal6");
const modal7 = document.getElementById("myModal7");
const modal8 = document.getElementById("myModal8");
const modal9 = document.getElementById("myModal9");
const modal10 = document.getElementById("myModal10");
const modal11 = document.getElementById("myModal11");
const modal12 = document.getElementById("myModal12");

const openModal1Btn = document.getElementById("openModal");
const openModal2Btn = document.getElementById("openModal2");
const openModal3Btn = document.getElementById("openModal3");
const openModal4Btn = document.getElementById("openModal4");
const openModal5Btn = document.getElementById("openModal5");
const openModal6Btn = document.getElementById("openModal6");
const openModal7Btn = document.getElementById("openModal7");
const openModal8Btn = document.getElementById("openModal8");
const openModal9Btn = document.getElementById("openModal9");
const openModal10Btn = document.getElementById("openModal10");
const openModal11Btn = document.getElementById("openModal11");
const openModal12Btn = document.getElementById("openModal12");


const closeModal1Btn = document.getElementById("closeModal");
const closeModal2Btn = document.getElementById("closeModal2");
const closeModal3Btn = document.getElementById("closeModal3");
const closeModal4Btn = document.getElementById("closeModal4");
const closeModal5Btn = document.getElementById("closeModal5");
const closeModal6Btn = document.getElementById("closeModal6");
const closeModal7Btn = document.getElementById("closeModal7");
const closeModal8Btn = document.getElementById("closeModal8");
const closeModal9Btn = document.getElementById("closeModal9");
const closeModal10Btn = document.getElementById("closeModal10");
const closeModal11Btn = document.getElementById("closeModal11");
const closeModal12Btn = document.getElementById("closeModal12");


// Функция открытия модального окна
function openModal(modal) {
    modal.style.display = "block";
    modal.classList.add("animate");
}

// Функция закрытия модального окна
function closeModal(modal) {
    modal.style.display = "none";
    modal.classList.remove("animate");
}

// Обработчики событий для кнопок открытия модальных окон
openModal1Btn.addEventListener("click", () => {
    openModal(modal1);
});

openModal2Btn.addEventListener("click", () => {
    openModal(modal2);
});

openModal3Btn.addEventListener("click", () => {
    openModal(modal3);
});
openModal4Btn.addEventListener("click", () => {
    openModal(modal4);
});

openModal5Btn.addEventListener("click", () => {
    openModal(modal5);
});

openModal6Btn.addEventListener("click", () => {
    openModal(modal6);
});
openModal7Btn.addEventListener("click", () => {
    openModal(modal7);
});

openModal8Btn.addEventListener("click", () => {
    openModal(modal8);
});

openModal9Btn.addEventListener("click", () => {
    openModal(modal9);
});
openModal10Btn.addEventListener("click", () => {
    openModal(modal10);
});

openModal11Btn.addEventListener("click", () => {
    openModal(modal11);
});

openModal12Btn.addEventListener("click", () => {
    openModal(modal12);
});


// Обработчики событий для кнопок закрытия модальных окон
closeModal1Btn.addEventListener("click", () => {
    closeModal(modal1);
});

closeModal2Btn.addEventListener("click", () => {
    closeModal(modal2);
});

closeModal3Btn.addEventListener("click", () => {
    closeModal(modal3);
});
closeModal4Btn.addEventListener("click", () => {
    closeModal(modal4);
});

closeModal5Btn.addEventListener("click", () => {
    closeModal(modal5);
});

closeModal6Btn.addEventListener("click", () => {
    closeModal(modal6);
});
closeModal7Btn.addEventListener("click", () => {
    closeModal(modal7);
});

closeModal8Btn.addEventListener("click", () => {
    closeModal(modal8);
});

closeModal9Btn.addEventListener("click", () => {
    closeModal(modal9);
});
closeModal10Btn.addEventListener("click", () => {
    closeModal(modal10);
});

closeModal11Btn.addEventListener("click", () => {
    closeModal(modal11);
});

closeModal12Btn.addEventListener("click", () => {
    closeModal(modal12);
});

// Закрытие модальных окон при клике за пределами окна
window.addEventListener("click", (event) => {
    if (event.target === modal1) {
        closeModal(modal1);
    }
    if (event.target === modal2) {
        closeModal(modal2);
    }
    if (event.target === modal3) {
        closeModal(modal3);
    }
    if (event.target === modal4) {
        closeModal(modal4);
    }
    if (event.target === modal5) {
        closeModal(modal5);
    }
    if (event.target === modal6) {
        closeModal(modal6);
    }
    if (event.target === modal7) {
        closeModal(modal7);
    }
    if (event.target === modal8) {
        closeModal(modal8);
    }
    if (event.target === modal9) {
        closeModal(modal9);
    }
    if (event.target === modal10) {
        closeModal(modal10);
    }
    if (event.target === modal11) {
        closeModal(modal11);
    }
    if (event.target === modal12) {
        closeModal(modal12);
    }
});

  