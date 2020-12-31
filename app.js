const toggleBtn = document.querySelector('.dropdown-toggle'),
        menu = document.querySelector('.dropdown-menu'),
        items = document.querySelectorAll('.dropdown-item'),
        nextBtn = document.querySelector('.next-btn');

toggleBtn.innerText = '지점을 선택해주세요';

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

