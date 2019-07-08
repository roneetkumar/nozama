let $ = (ele) => document.querySelector(ele);

let colorValues = ['#00BCD4'];
let color = colorValues[Math.floor(Math.random() * colorValues.length)];

let li = $('ul.link-list').getElementsByTagName('li');
let cards = $('main').getElementsByClassName('card');
let category = $('.selected').innerHTML.toLowerCase();
let buttons = $('main').getElementsByTagName('button');

window.onscroll = function() {
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

function overlayClose() {
    $('.side-nav').style.transform = 'translateX(-312px)';
    $('.overlay').style.display = 'none';
    $('body').style.overflow = 'initial';
    $('.product-info').classList.remove('isOpened');
    if ($('#myinput').value !== '') {
        $('.close').style.display = 'block';
    } else {
        $('.topbar').classList.remove('searchOpen');
    }
    $('.login').style.transform = 'translate(-50%,-50%) scale(0)';
}

function searchFunction() {
    let input, filter, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();

    for (i = 0; i < cards.length; i++) {
        a = cards[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filter() {
    for (let i = 0; i < cards.length; i++) {
        if (!cards[i].classList.contains(category)) {
            cards[i].style.display = 'none';
        } else {
            cards[i].style.display = '';
        }
    }
}

function sortList(sortBy) {
    product = product.slice(0);
    product.sort(function(a, b) {
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

product.forEach(function(item) {
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
    li[i].onclick = function() {
        let selected = $('.selected');
        category = this.innerHTML.toLowerCase();

        selected.classList.remove('selected');
        this.classList.add('selected');
        filter();
    }
}


window.onload = function() {
    filter();
    $('header').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + color + ' 100%)';
    $('footer').style.background = 'linear-gradient(360deg, ' + color + ' 0%, rgba(0,0,0,0) 100%';
}

$('.menu').onclick = function() {
    $('.side-nav').style.transform = 'translateX(0)';
    $('.overlay').style.display = 'block';
    $('body').style.overflow = 'hidden';
    $('.search').style.zIndex = '0';
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        $('.product-info').classList.add('isOpened');
        let selectedProduct = this.parentElement.querySelector('h1').innerHTML;
        $('.overlay').style.display = 'block';
        $('.search').style.zIndex = '0';
        $('body').style.overflow = 'hidden';

        product.forEach(function(item) {
            if (selectedProduct === item.name) {
                let categories = item.categories.split(' ');
                // category += categories;

                const productInfo = `
                <svg class="closeCard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" /></svg>
                <img src='${item.imgSrc}'>
                <h2>${item.name}</h2>
                <h1>$${item.price} CAD</h1>
                <h5>${categories}</h5>
                `;

                $('.product-info').innerHTML = productInfo;

                $('.closeCard').onclick = function() {
                    $('.product-info').classList.remove('isOpened');
                    $('.overlay').style.display = 'none';
                    $('body').style.overflow = 'initial';
                    console.log(this);
                }
            }
        });
    }
}

$('.close').onclick = function(event) {
    $('.topbar').classList.remove('searchOpen');
    $('#myinput').value = "";
    searchFunction();
    $('.overlay').style.display = 'none';
    this.style.display = 'none';
    filter();
    event.stopPropagation();
}

$('.overlay').onclick = () => overlayClose();

$('.search').onclick = function() {
    $('.topbar').classList.add('searchOpen');
    $('.overlay').style.display = 'block';
    $('body').style.overflow = 'hidden';
}


$('.login h1').onclick = function() {
    this.classList.toggle('login-switch');
    if (this.classList.contains('login-switch')) {
        this.innerHTML = 'Log In';
    } else {
        this.innerHTML = 'Sign Up';
    }
}

$('.topbar span').onclick = function() {
    $('.login').style.transform = 'translate(-50%,-50%) scale(1)';
    $('.overlay').style.display = 'block';
    $('body').style.overflow = 'hidden';
}

// function populateUserData() {
//
// }

$('.login-form button').onclick = function() {
    const userInput = $('.inputLogin').value.toUpperCase();
    const userPassword = $('.inputPassword').value.toUpperCase();
    // console.log(userInput, userPassword);
    for (let i = 0; i < user.length; i++) {
        console.log(userInput === user[i].name.id.toUpperCase() || userInput === user[i].email.toUpperCase());
        if (userInput === user[i].name.id.toUpperCase() || userInput === user[i].email.toUpperCase()) {
            if (userPassword === user[i].password) {
                overlayClose();
                $('.topbar span').innerHTML = user[i].name.first + ' ' + user[i].name.last;
                $('.nav-heading h1.title').innerHTML = user[i].name.first + ' ' + user[i].name.last;
                $('.nav-heading a h1.email').innerHTML = user[i].email;
                $('.nav-heading a').href = 'mailto: ${user[i].email}';


                break;
            } else {
                console.log('password wrong');
                $('.login-form .inputPassword').placeholder = "Incorrent Password";
                $('.login-form .inputPassword').value = "";
            }
            break;
        } else {
            $('.login-form .inputLogin').value = "";
            $('.login-form .inputLogin').placeholder = "Incorrent Username";
            $('.login-form .inputPassword').value = "";
        }
    }
}