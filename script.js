let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // تغيير الصورة كل 3 ثوانٍ
}

function showTab(event, tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });

    let buttons = document.querySelectorAll('.tab-button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
