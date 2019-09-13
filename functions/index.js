let $ = (ele) => document.querySelector(ele);
let $$ = (ele) => document.querySelectorAll(ele);
sortList('A');

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

window.onload = function () {
    $('header').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + '#' + selectedColor + ' 100%)';
    $('footer').style.background = 'linear-gradient(360deg, ' + '#' + selectedColor + ' 0%, rgba(0,0,0,0) 100%';
    filter();
    loginSteps();
}

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
            if (userPassword === user[i].password.toUpperCase()) {

                sessionStorage.id = user[i].name.id;
                sessionStorage.fname = user[i].name.first;
                sessionStorage.lname = user[i].name.last;
                sessionStorage.email = user[i].email;
                sessionStorage.mobile = user[i].mobile;
                sessionStorage.password = user[i].password;

                loginSteps();

            } else {
                $('.login-form .inputPassword').value = "";
                $('.login-form .inputPassword').placeholder = "Incorrect Password";
            }
        }
    }

    if (foundUser == false) {
        $('.login-form .inputLogin').value = "";
        $('.login-form .inputLogin').placeholder = "Incorrent Username";
        $('.login-form .inputPassword').value = "";
    }
}

let counter = 0;
let total = 0;
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.onclick = (event) => {
        event.stopPropagation();
        const cartItem = `
        <div class="item">
            <h1>${button.parentElement.querySelector('h1').innerText}</h1 >
            <hr>
            <svg class="removeCartItem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                <path d="M0 0h24v24H0z" fill="none" /></svg>
            <h1 class="item-price"> ${button.parentElement.querySelector('h2').innerText} </h1>
        </div>`;

        let price = button.parentElement.querySelector('h2').innerText;

        price = price.substring(1, price.length - 3);

        total += +price;

        $('.total').innerText = "$" + total + " CAD";

        $('.cart span').style.transform = 'rotate(0deg)'

        $('.cart-items').innerHTML += cartItem;

        counter += 1;
        let removeItem = $$('.cart-items .item .removeCartItem');
        removeItem.forEach(button => {
            button.onclick = () => {
                button.parentElement.style.transform = 'translateX(-200%)';
                setTimeout(function () {
                    button.parentElement.remove();
                }, 400);
                counter -= 1;

                $('.cart span').innerText = counter;
                price = button.parentElement.querySelector('h1.item-price').innerText;
                price = price.substring(1, price.length - 3);
                total -= +price;
                $('.total').innerText = "$" + total + " CAD";
            }
        });
        $('.cart span').innerText = counter;
    }
}

function checkNumber(string) {
    return /^[A-Z][a-z]+$/.test(string);
}

let FormInputs = {
    firstName: $("input[placeholder='First Name']"),
    lastName: $("input[placeholder='Last Name']"),
    mobile: $("input[placeholder='Mobile Number']"),
    cardNo: $("input[placeholder='Card No']"),
    cvv: $("input[placeholder='CVV']"),
    city: $("input[placeholder='City']"),
    date: $("input[placeholder='Expiration Date']"),
    country: $("input[placeholder='Country']"),
    province: $("input[placeholder='Province']"),
    cardHolder: $("input[placeholder='Card Holder Name']"),
    email: $("input[placeholder='Email']"),
    address: $("input[placeholder='Address']"),
};


FormInputs.firstName.onkeyup = () => {
    if (FormInputs.firstName.value != '') {
        if (checkNumber(FormInputs.firstName.value)) {
            FormInputs.firstName.style.border = '2px solid #00E676';
        } else {
            FormInputs.firstName.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.firstName.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.lastName.onkeyup = () => {
    if (FormInputs.lastName.value != '') {
        if (checkNumber(FormInputs.lastName.value)) {
            FormInputs.lastName.style.border = '2px solid #00E676';
        } else {
            FormInputs.lastName.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.lastName.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.mobile.onkeyup = () => {
    if (FormInputs.mobile.value != '') {
        if (/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(FormInputs.mobile.value)) {
            FormInputs.mobile.style.border = '2px solid #00E676';
        } else {
            FormInputs.mobile.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.mobile.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.cardNo.onkeyup = () => {
    if (FormInputs.cardNo.value != '') {
        if (/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/.test(FormInputs.cardNo.value)) {
            FormInputs.cardNo.style.border = '2px solid #00E676';
        } else {
            FormInputs.cardNo.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.cardNo.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.cvv.onkeyup = () => {
    if (FormInputs.cvv.value != '') {
        if (/[0-9]{3}/.test(FormInputs.cvv.value)) {
            FormInputs.cvv.style.border = '2px solid #00E676';
        } else {
            FormInputs.cvv.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.cvv.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.city.onkeyup = () => {

    if (FormInputs.city.value != '') {
        if (checkNumber(FormInputs.city.value)) {
            FormInputs.city.style.border = '2px solid #00E676';
        } else {
            FormInputs.city.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.city.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}


let date = new Date();
date = date.getFullYear();

FormInputs.date.min = `${date}-01`;
FormInputs.date.max = `${date + 20}-01`;

FormInputs.date.onkeyup = () => {
    if (FormInputs.date.value != '') {
        if (/\d{4}-\d{2}$/.test(FormInputs.date.value)) {
            FormInputs.date.style.border = '2px solid #00E676';
        } else {
            FormInputs.date.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.date.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.country.onkeyup = () => {
    if (FormInputs.country.value != '') {
        if (checkNumber(FormInputs.country.value)) {
            FormInputs.country.style.border = '2px solid #00E676';
        } else {
            FormInputs.country.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.country.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.province.onkeyup = () => {
    if (FormInputs.province.value != '') {
        if (/[A-Z]{2}/.test(FormInputs.province.value)) {
            FormInputs.province.style.border = '2px solid #00E676';
        } else {
            FormInputs.province.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.province.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.cardHolder.onkeyup = () => {
    if (FormInputs.cardHolder.value != '') {
        if (/[A-Z]{1}[a-z]{2,15}\s[A-Z]{1}[a-z]{2,15}$/.test(FormInputs.cardHolder.value)) {
            FormInputs.cardHolder.style.border = '2px solid #00E676';
        } else {
            FormInputs.cardHolder.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.cardHolder.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.email.onkeyup = () => {
    if (FormInputs.email.value != '') {
        if (/\w(\w|[!#$%&'*\+\/=?^_`{|}~])*([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+/.test(FormInputs.email.value)) {
            FormInputs.email.style.border = '2px solid #00E676';
        } else {
            FormInputs.email.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.email.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}

FormInputs.address.onkeyup = () => {
    if (FormInputs.address.value != '') {
        if (/^[a-zA-Z0-9\s,'-.]*$/.test(FormInputs.address.value)) {
            FormInputs.address.style.border = '2px solid #00E676';
        } else {
            FormInputs.address.style.border = '2px solid #f44336';
        }
    } else {
        FormInputs.address.style.border = '.5px solid rgba(0,0,0,0.1)';
    }
}


$('.checkoutForm').onsubmit = (event) => {
    event.preventDefault();
    alert('Payment Sucessfull');

    counter = 0;
    let removeItem = $$('.cart-items .item .removeCartItem');
    removeItem.forEach(button => {
        button.parentElement.style.transform = 'translateX(-200%)';
        setTimeout(function () {
            button.parentElement.remove();
        }, 400);
        counter -= 1;

        $('.cart span').innerText = counter;
        price = button.parentElement.querySelector('h1.item-price').innerText;
        price = price.substring(1, price.length - 3);
        total -= +price;
        $('.total').innerText = "$" + total + " CAD";
        $('.cart span').innerText = counter;
        window.location.href = 'index.html';
    })
}
