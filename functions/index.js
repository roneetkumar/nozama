let $ = (ele) => document.querySelector(ele);
let $$ = (ele) => document.querySelectorAll(ele);


let colors = ['#00BCD4', '#673AB7', '#607D8B'];
let selectedColor = colors[Math.floor(Math.random() * colors.length)];

let li = $('ul.link-list').getElementsByTagName('li');
let cards = $('main').getElementsByClassName('card');
let category = $('.selected').innerHTML.toLowerCase();
let buttons = $('main').getElementsByTagName('button');

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

const searchOpen = () => {
    $('.topbar').classList.add('searchOpen');
}
const searchClose = () => {
    // setTimeout(function () {
    $('.topbar').classList.remove('searchOpen');
    // }, 1355);
}
const sideNavClose = () => $('.side-nav').style.transform = 'translateX(-312px)';
const sideNavOpen = () => {
    $('.side-nav').style.transform = 'translateX(0)';
    $('.search').style.zIndex = '0';
}
const loginHide = () => $('.login').style.transform = 'translate(-50%,-50%) scale(0)';
const loginShow = () => {
    $('.search').style.zIndex = '0';
    $('.login').style.transform = 'translate(-50%,-50%) scale(1)';
}
const productInfoHide = () => $('.product-info').classList.remove('isOpened');
const productInfoShow = () => $('.product-info').classList.add('isOpened');
const canScroll = () => $('body').style.overflow = 'initial';
const canNotScroll = () => $('body').style.overflow = 'hidden';

const overlayHide = () => {
    $('.overlay').style.display = 'none';
    $('.search').style.zIndex = '1';
    $('.cart').style.zIndex = '0';
    $('.overlay').style.opacity = '0';
    searchInputCheck();
    sideNavClose();
    productInfoHide();
    canScroll();
    loginHide();
    closeCart();
}


const overlayShow = () => {
    $('.overlay').style.display = 'block';
    $('.overlay').style.opacity = '1';
    canNotScroll();
}

const toggleLogIn = () => {
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

function searchInputCheck() {
    if ($('#myinput').value !== '') {
        $('.close').style.display = 'block';
    } else {
        searchClose();
    }
}


function searchFunction() {
    let input = document.getElementById('myinput').value.toUpperCase();
    let productName = document.querySelectorAll('.card a');

    productName.forEach(function (item) {
        if (item.innerText.toUpperCase().includes(input)) {
            console.log('hi');
            item.parentElement.style.display = '';

        } else {
            item.parentElement.style.display = 'none';
        }
    });
    // filter();
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

function logout() {
    sideNavClose();
    overlayHide();
    loginHide();
    $('.nav-heading h1.title').innerHTML = '';
    $('.nav-heading a h1.email').innerHTML = '';
    $('.nav-heading a').href = '';
    $('.topbar span').innerHTML = 'Sign Up | Log In';
    $('ul.nav-menu .signin').style.display = 'block';
    $('ul.nav-menu .logout').style.display = 'none';
    $('ul.nav-menu .signin h1').innerText = 'Sign In | Sign Up';
    setTimeout(function () {
        $('.login-form').style.display = 'block';
        $('.signup-form').style.display = 'block';
        $('.account-info').style.display = 'none'

    }, 500);
    $('.login h1.LoggedIn').style.display = 'flex';
    $('.login h1.LoggedOut').style.display = 'block';
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

function openCart() {
    $('.cart').style.zIndex = '1'
    $('.cart').classList.add('openCart');
    $('.cart .svg-group').style.display = 'none';
    $('.search').style.zIndex = '0';
}

function closeCart() {
    // console.log('Cart-closed');
    $('.cart').classList.remove('openCart');
    setTimeout(function () {
        $('.cart .svg-group').style.display = '';
    }, 300);
}

$('.cart').onclick = function () {
    overlayShow();
    openCart();
}


sortList('A');

product.forEach(function (item) {
    let category = item.categories.toLowerCase();
    const card = `
    <div class="card ${category}">
    <img src="${item.imgSrc}" onerror="this.src='assets/head_paper.png'">
    <a><h2> $${item.price} CAD </h2>
    <h1>${item.name}</h1></a>
    <button> VIEW </button>
    </div>
    `;
    $('main').innerHTML += card;
});

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
    filter();
    $('header').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + selectedColor + ' 100%)';
    $('footer').style.background = 'linear-gradient(360deg, ' + selectedColor + ' 0%, rgba(0,0,0,0) 100%';
}

$('.menu').onclick = function () {
    sideNavOpen();
    overlayShow();
    canNotScroll();
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        $('.search').style.zIndex = '0';
        let selectedProduct = this.parentElement.querySelector('h1').innerHTML;
        productInfoShow();
        overlayShow();
        canNotScroll();
        product.forEach(function (item) {
            if (selectedProduct === item.name) {
                let categories = item.categories.split(' ');
                const productInfo = `
                <svg  onclick='productInfoClose()' class="closeCard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" /></svg>
                <img src='${item.imgSrc}'>
                <h2>${item.name}</h2>
                <h1>$${item.price} CAD</h1>
                <h5>${categories}</h5>
                `;

                $('.product-info').innerHTML = productInfo;
            }
        });
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
}

$('.search').onclick = function () {
    searchOpen();
    overlayShow();
    canNotScroll();
}

$('.login h1.LoggedOut').onclick = () => toggleLogIn();
$('.login h1.LoggedIn').onclick = () => toggleLogIn();

$('#myinput').onkeyup = () => searchFunction();

$('.login-form button').onclick = () => login();
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


function productInfoClose() {
    console.log('hi');
    productInfoHide();
    canScroll();
    overlayHide();
}

function login() {
    const userInput = $('.inputLogin').value.toUpperCase();
    const userPassword = $('.inputPassword').value.toUpperCase();
    let foundUser = false;

    for (let i = 0; i < user.length; i++) {
        if (userInput === user[i].name.id.toUpperCase() || userInput === user[i].email.toUpperCase()) {
            foundUser = true;
            if (userPassword === user[i].password) {
                $('.topbar span').innerHTML = user[i].name.first + ' ' + user[i].name.last;
                $('.nav-heading h1.title').innerHTML = user[i].name.first + ' ' + user[i].name.last;
                $('.nav-heading a h1.email').innerHTML = user[i].email;
                $('.nav-heading a').href = 'mailto: ${user[i].email}';
                overlayHide();
                loginHide();

                // $('ul.nav-menu .signin').style.display = 'none';
                $('ul.nav-menu .signin h1').innerText = 'Account';
                $('ul.nav-menu .logout').style.display = 'block';

                setTimeout(function () {
                    $('.login-form').style.display = 'none';
                    $('.signup-form').style.display = 'none';

                    $('.account-info').style.display = 'block'

                }, 500);

                $('.account-info span.name').innerText = user[i].name.first + ' ' + user[i].name.last;
                $('.account-info span.mobile').innerText = user[i].mobile;
                $('.account-info span.email').innerText = user[i].email;

                $('.login h1.LoggedIn').style.display = 'flex';
                $('.login h1.LoggedOut').style.display = 'none';



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