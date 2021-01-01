const toggleBtn = document.querySelector('.dropdown-toggle'),
        menu = document.querySelector('.dropdown-menu'),
        items = document.querySelectorAll('.dropdown-item'),
        nextBtn = document.querySelector('.next-btn');

toggleBtn.innerText = '지점을 선택해주세요';

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

function selectItems(items){
    const value = items.currentTarget.textContent.trim();
    // const value = items.currentTarget.outerText;
    toggleBtn.textContent = value;
    toggleBtn.classList.add('select');
    nextBtn.removeAttribute('disabled');
    menu.classList.remove('active');
}

// 가능할까?
//menu.addEventListener('click', selectItems);

items.forEach((items)=>{
    items.addEventListener('click', selectItems)
});
