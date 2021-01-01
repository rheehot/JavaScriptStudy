const toggleBtn = document.querySelector('.dropdown-toggle'),
        menu = document.querySelector('.dropdown-menu'),
        items = document.querySelectorAll('.dropdown-item'),
        nextBtn = document.querySelector('.next-btn');

toggleBtn.innerText = '지점을 선택해주세요';

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

// selectItems 함수에 
// menu.classList.remove('active'); 넣기 보다는
//  blur 활용하기
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

toggleBtn.addEventListener(os === 'ios' ? 'mouseout' : 'blur', () => {
    menu.classList.remove('active');
});


function selectItems(items){
    console.log(items.currentTarget.textContent.trim());
    const name = items.currentTarget.textContent.trim();
    // const name = items.currentTarget.outerText;
    toggleBtn.textContent = name;
    toggleBtn.classList.add('select');
    nextBtn.removeAttribute('disabled');
    // menu.classList.remove('active');
}

// 가능할까?
//menu.addEventListener('click', selectItems);

items.forEach((items)=>{
    items.addEventListener('click', selectItems)
});
