// slider Js Kodu Başlangıç

let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const translateValue = -currentSlide * 100 + '%';
        slider.style.transform = `translateX(${translateValue})`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
// slider Js Kodu Bitiş

// Ekibimiz Bölümü
function hoverMember(element) {
    element.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
}

function unhoverMember(element) {
    element.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
}
