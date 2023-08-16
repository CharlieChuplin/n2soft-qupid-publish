const menu = document.querySelector('#header');
const menuHeight = menu.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > menuHeight) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

/*#header.scrolled {background: #fff;} 스크롤 시 nav 배경 색상 변경*/
/*#header.scrolled .nav .gnb a {color : #101010;} 스크롤 시 nav 폰트 색상 변경 */
