let $ = (ele) => document.querySelector(ele);
let $$ = (ele) => document.querySelectorAll(ele);


let colors = ['00BCD4', '673AB7', '607D8B', '795548', '009688', '3F51B5'];
let selectedColor = colors[Math.floor(Math.random() * colors.length)];

let li = $('ul.link-list').getElementsByTagName('li');

let category = $('.selected').innerHTML.toLowerCase();

product.forEach(product => {
    let category = product.categories.toLowerCase();
    const card = `
    <div class="card ${category}">
    <img src="${product.imgSrc}" alt="${product.name}" onerror="this.src='assets/head_paper.png'" loading="lazy">
    <a><h2> $${product.price} CAD </h2>
    <h1>${product.name}</h1></a>
    <button> ADD TO CART </button>
    </div>
    `;
    $('main').innerHTML += card;
});

let cards = $$('main .card');
let buttons = $$('main button');

window.onscroll = function () {
    let fab = $('.fab svg');
    let hook = $('#hook');
    let flag = $('body').scrollHeight / 3;
    let position = window.scrollY;
    if (position > flag) {
        fab.style.transform = "translate(-50%,-50%) rotate(180deg)";
        hook.href = "#top";
    } else {
        fab.style.transform = "translate(-50%,-50%) rotate(0deg)";
        hook.href = "#bottom";
    }
};

function productInfoShow() {
    $('.product-info').classList.add('isOpened');
}

function productInfoHide() {
    $('.product-info').classList.remove('isOpened');
}

function canScroll() {
    $('body').style.overflow = 'initial';
}

function canNotScroll() {
    $('body').style.overflow = 'hidden';
}

function searchOpen() {
    $('.topbar').classList.add('searchOpen');
}

function searchClose() {
    $('.topbar').classList.remove('searchOpen');
}

function sideNavOpen() {
    $('.side-nav').style.transform = 'translateX(0)';
    $('.search').style.zIndex = '0';
}

function sideNavClose() {
    $('.side-nav').style.transform = 'translateX(-312px)';
}

function loginShow() {
    $('.search').style.zIndex = '0';
    $('.login').style.transform = 'translate(-50%,-50%) scale(1)';
}

function loginHide() {
    $('.login').style.transform = 'translate(-50%,-50%) scale(0)';
}

function searchInputCheck() {
    if ($('#myinput').value !== '') {
        $('.close').style.display = 'block';
    } else {
        searchClose();
    }
}

function overlayHide() {
    $('.overlay').style.display = 'none';
    $('.search').style.zIndex = '1';
    $('.cart').style.zIndex = '0';
    $('.overlay').style.opacity = '0';
    canScroll();
}

function overlayShow() {
    $('.overlay').style.display = 'block';
    $('.overlay').style.opacity = '1';
    canNotScroll();
}

function tooltip(text) {
    $('.tooltip').innerHTML = text;
    $('.tooltip').style.display = 'block';
    setTimeout(() => {
        $('.tooltip').style.display = 'none'
    }, 800);
}


function productInfoClose() {
    productInfoHide();
    canScroll();
    overlayHide();
}


function toggleLogIn() {
    $('.login h1.LoggedOut').classList.toggle('login-switch');
    $('.login h1.LoggedIn').classList.toggle('login-switch');
    if ($('.login h1.LoggedOut').classList.contains('login-switch') || $('.login h1.LoggedOut').classList.contains('login-switch')) {
        $('.login h1.LoggedOut').innerHTML = 'Log In';
        $('.login h1.LoggedIn').innerHTML = 'User Info';
    } else {
        $('.login h1.LoggedOut').innerHTML = 'Sign Up';
        $('.login h1.LoggedIn').innerHTML = 'Account Info';
    }
}

function logout() {
    // clear();
    $('.nav-heading h1.title').innerHTML = '';
    $('.nav-heading a h1.email').innerHTML = '';
    $('.nav-heading a').href = '';
    $('.topbar span').innerHTML = 'Sign Up | Log In';
    $('ul.nav-menu .signin').style.display = 'block';
    $('ul.nav-menu .logout').style.display = 'none';
    $('ul.nav-menu .signin h1').innerText = 'Sign In | Sign Up';
    $('.menu-cart').style.display = 'none';
    $('.login h1.LoggedIn').style.display = 'flex';
    $('.login h1.LoggedOut').style.display = 'block';
    sideNavClose();
    overlayHide();
    loginHide();
    setTimeout(function () {
        $('.login-form').style.display = 'block';
        $('.signup-form').style.display = 'block';
        $('.account-info').style.display = 'none';
    }, 500);
    sessionStorage.clear();
}


function searchFunction() {
    let input = document.getElementById('myinput').value.toUpperCase();
    let productName = $$('.card a');

    productName.forEach(product => {
        if (product.innerText.toUpperCase().includes(input)) {
            product.parentElement.style.display = '';
        } else {
            product.parentElement.style.display = 'none';
        }
    });
}

function filter() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains(category)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

function sortList(sortBy) {
    product = product.slice(0);
    product.sort(function (a, b) {
        let x, y;
        if (sortBy === 'A') {
            x = a.name.toLowerCase();
            y = b.name.toLowerCase();
        } else {
            x = a.price;
            y = b.price;
        }
        return x < y ? -1 : x > y ? 1 : 0;
    });
}

sortList('A');

function openCart() {
    $('.cart').style.transform = 'translate(-50%, -50%) scale(1)'
    $('.cart').style.zIndex = '1'
    $('.cart').classList.add('openCart');
    $('.cart svg').style.display = 'none';
    $('.search').style.zIndex = '0';
    $('.cart span').style.display = 'none';
    setTimeout(function () {
        $('.cart h1').style.display = 'block';
    }, 300);
}

function closeCart() {
    if ($('.cart').classList.contains('openCart')) {
        $('.cart').style.transform = 'translate(-50%, 0%) scale(1)'
        // $('.cart').onclick = '';
    }
    $('.cart').classList.remove('openCart');
    $('.cart h1').style.display = '';
    setTimeout(function () {
        $('.cart svg').style.display = '';
        $('.cart span').style.display = '';
    }, 300);
}


$('.menu-cart').onclick = () => {
    cartIconFunction();
}

$('.contact').onclick = () => {
    $('.contactUs').style.transform = 'translate(-50%,-50%)';
    sideNavClose();
    overlayShow();
}

$('.findUs').onclick = () => {
    $('.findUsMap').style.transform = 'translate(-50%,-50%)';
    sideNavClose();
    overlayShow();
}


function cartIconFunction() {
    let logged = $('.login h1.LoggedOut').style.display;
    let itemCounter = $('.item-counter').innerText;
    let cartOpened = $('.cart').classList.contains('openCart');

    if (logged == 'none' && itemCounter != 0) {
        openCart();
        overlayShow();
        canNotScroll();
        sideNavClose();
    } else {
        if (!cartOpened) {
            $('.cart').style.animation = 'shake .1s ease-in-out 2';
            setTimeout(function () {
                $('.cart').style.animation = '';
            }, 400);
            window.navigator.vibrate(200);
            if (logged != 'none') {
                tooltip('Please Login')

            } else if (itemCounter == 0) {
                tooltip('Empty Cart')
            }
        }
        else {
            closeCart();
            overlayHide();
            canScroll();
            event.stopPropagation();
        }
    }
}

$('.cart').onclick = () => {
    cartIconFunction();
}

$('.closeCart').onclick = (event) => {
    closeCart();
    overlayHide();
    canScroll();
    event.stopPropagation();
}

$('.menu').onclick = function () {
    sideNavOpen();
    overlayShow();
    canNotScroll();
}

for (let i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        let selected = $('.selected');
        category = this.innerHTML.toLowerCase();
        selected.classList.remove('selected');
        this.classList.add('selected');
        filter();
    }
}

window.onload = function () {
    $('header').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + '#' + selectedColor + ' 100%)';
    $('footer').style.background = 'linear-gradient(360deg, ' + '#' + selectedColor + ' 0%, rgba(0,0,0,0) 100%';
    filter();
    loginSteps();
}

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
        $('.search').style.zIndex = '0';
        let selectedProduct = this.querySelector('h1').innerHTML;
        product.forEach(product => {
            if (selectedProduct === product.name) {
                let categories = product.categories.split(' ');
                const productInfo = `
                <svg  onclick='productInfoClose()' class="closeCard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" /></svg>
                <img src='${product.imgSrc}'>
                <h2>${product.name}</h2>
                <h1>$${product.price} CAD</h1>
                <h5>${categories}</h5>
                `;

                $('.product-info').innerHTML = productInfo;
            }
        });
        productInfoShow();
        overlayShow();
        canNotScroll();
    }
}

$('.close').onclick = function (event) {
    this.style.display = 'none';
    $('#myinput').value = "";
    searchClose();
    searchFunction();
    overlayHide();
    filter();
    event.stopPropagation();
}

$('.overlay').onclick = function () {
    overlayHide();
    searchInputCheck();
    sideNavClose();
    productInfoHide();
    canScroll();
    loginHide();
    closeCart();
    $('.contactUs').style.transform = 'translate(-50%,100%)';
    $('.findUsMap').style.transform = 'translate(-50%,100%)';

}

$('.search').onclick = function () {
    searchOpen();
    overlayShow();
    canNotScroll();
}

$('.login h1.LoggedOut').onclick = () => toggleLogIn();
$('.login h1.LoggedIn').onclick = () => toggleLogIn();

$('#myinput').onkeyup = () => searchFunction();

$('.login-form').onsubmit = (event) => {
    event.preventDefault();
    login();
}

$('.logout').onclick = () => logout();
$('.logoutBtn').onclick = () => logout();

$('.topbar span').onclick = function () {
    loginShow();
    overlayShow();
    canNotScroll();
}

$('.nav-menu .signin').onclick = function () {
    loginShow();
    overlayShow();
    canNotScroll();
    sideNavClose();
}


function loginSteps() {
    if (sessionStorage.id != null) {
        overlayHide();
        loginHide();
        $('ul.nav-menu .logout').style.display = 'block';
        $('ul.nav-menu .signin h1').innerText = 'Account';
        setTimeout(function () {
            $('.login-form').style.display = 'none';
            $('.signup-form').style.display = 'none';
            $('.account-info').style.display = 'block';
        }, 500);

        $('.login h1.LoggedIn').style.display = 'flex';
        $('.login h1.LoggedOut').style.display = 'none';
        $('.menu-cart').style.display = 'flex';

        $('.topbar span').innerHTML = sessionStorage.fname + ' ' + sessionStorage.lname;
        $('.nav-heading h1.title').innerHTML = sessionStorage.fname + ' ' + sessionStorage.lname;
        $('.nav-heading a h1.email').innerHTML = sessionStorage.email;
        $('.nav-heading a').href = 'mailto: ${sessionStorage.email}';

        $('.account-info span.name').innerText = sessionStorage.fname + ' ' + sessionStorage.lname;
        $('.account-info span.mobile').innerText = sessionStorage.mobile;
        $('.account-info span.email').innerText = sessionStorage.email;
    }
    else {

        $('.nav-heading h1.title').innerHTML = '';
        $('.nav-heading a h1.email').innerHTML = '';
        $('.nav-heading a').href = '';
        $('.topbar span').innerHTML = 'Sign Up | Log In';
        $('.account-info span.name').innerText = '';
        $('.account-info span.mobile').innerText = '';
        $('.account-info span.email').innerText = '';

    }

}

function login() {
    const userInput = $('.inputLogin').value.toUpperCase();
    const userPassword = $('.inputPassword').value.toUpperCase();
    let foundUser = false;

    for (let i = 0; i < user.length; i++) {
        if (userInput === user[i].name.id.toUpperCase() || userInput === user[i].email.toUpperCase()) {
            foundUser = true;
            if (userPassword === user[i].password) {

                sessionStorage.id = user[i].name.id;
                sessionStorage.fname = user[i].name.first;
                sessionStorage.lname = user[i].name.last;
                sessionStorage.email = user[i].email;
                sessionStorage.mobile = user[i].mobile;
                sessionStorage.password = user[i].password;

                loginSteps();

            } else {
                $('.login-form .inputPassword').value = "";
                $('.login-form .inputPassword').placeholder = "Incorrent Password";
            }
        }
    }

    if (foundUser == false) {
        $('.login-form .inputLogin').value = "";
        $('.login-form .inputLogin').placeholder = "Incorrent Username";
        $('.login-form .inputPassword').value = "";
    }
}

// let lazyImages = $$('.lazy-img');
// let inAdvance = 300;
// lazy loading images
// function lazyLoad() {
//     lazyImages.forEach(image => {
//         if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
//             image.src = image.dataset.src;
//             image.onload = () => image.classList.add('loaded');
//             console.log(image.src);
//         }
//     });
// }
// lazyLoad();

let counter = 0;
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.onclick = (event) => {
        const cartItem = `
        <div class="item">
            <h1>  ${button.parentElement.querySelector('h1').innerText
            } </h1 >
        <hr>
            <svg class="removeCartItem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" /></svg>
            <h1 class="item-price"> ${button.parentElement.querySelector('h2').innerText} </h1>
        </div>
    `;
        $('.cart span').style.transform = 'rotate(0deg)'
        $('.cart-items').innerHTML += cartItem;
        counter += 1;
        event.stopPropagation();
        let removeItem = $$('.cart-items .item .removeCartItem');
        removeItem.forEach(button => {
            button.onclick = () => {

                button.parentElement.style.transform = 'translateX(-200%)';
                setTimeout(function () {
                    button.parentElement.remove();
                }, 400);
                counter -= 1;

                $('.cart span').innerText = counter;
            }
        });
        $('.cart span').innerText = counter;
    }
}

$('.next-page').onclick = () => {
    let cartItem = $('.cart-items');
    if (counter > 0) {
        cartItem.classList.toggle('cart-switch');
        $('.next-page').classList.toggle('nextClicked');
    }
    if (cartItem.classList.contains('cart-switch')) {
        $('.cartHeading').innerText = 'Checkout';
    } else {
        $('.cartHeading').innerText = 'Cart';
    }
}

function checkNumber(string) {
    return /[a-z]/.test(string);
}

let n = $('.n');

console.log(n);


n.onkeyup = () => {
    console.log('hi');

}