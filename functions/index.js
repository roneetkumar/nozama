let $ = (ele) => document.querySelector(ele);

let colorValues = ['#304FFE', '#5D737E', '#9067C6', '#00BCD4'];
let color = colorValues[Math.floor(Math.random() * colorValues.length)];

let li = $('ul.link-list').getElementsByTagName('li');
let cards = $('main').getElementsByClassName('card');
let category = $('.selected').innerHTML.toLowerCase();
let buttons = $('main').getElementsByTagName('button');

window.onscroll = function() {
    let fab = $('.fab svg');
    let hook = $('#hook');
    let flag = document.body.scrollHeight / 3;
    let position = window.pageYOffset
    if (position > flag) {
        fab.style.transform = "translate(-50%,-50%) rotate(180deg)";
        hook.href = "#top";
    } else {
        fab.style.transform = "translate(-50%,-50%) rotate(0deg)";
        hook.href = "#bottom";
    }
};

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

function sortList() {
    data = data.slice(0);
    data.sort(function(a, b) {
        let x = a.productName.toLowerCase();
        let y = b.productName.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
}

function sortListp() {
    data = data.slice(0);
    data.sort(function(a, b) {
        let x = a.price;
        let y = b.price;
        return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log(data);
}

sortList();


data.forEach(function(item) {
    let category = item.categories.toLowerCase();
    const card = `
    <div class="card ${category}">
    <img src="${item.imgSrc}" onerror="this.src='assets/head_paper.png'">
    <a><h2> $${item.price} CAD </h2>
    <h1>${item.productName}</h1></a>
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
    // $('nav#top').style.background = color;
    $('header').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + color + ' 100%)';
    $('footer').style.background = 'linear-gradient(360deg, ' + color + ' 0%, rgba(0,0,0,0) 100%';
}

$('.menu').onclick = function() {
    $('.navMenu').style.transform = 'translateX(0)';
    $('.nav-overlay').style.display = 'block';
    $('body').style.overflow = 'hidden';
    $('.search').style.zIndex = '0';
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        $('.product-info').classList.add('isOpened');
        let selectedProduct = this.parentElement.querySelector('h1').innerHTML;
        $('.nav-overlay').style.display = 'block';
        $('.search').style.zIndex = '0';
        $('body').style.overflow = 'hidden';

        data.forEach(function(item) {
            if (selectedProduct == item.productName) {
                // let categories = item.categories.split(' ');
                // let category;
                // let i = 0;
                // while (categories.length > i) {
                //     category += '#' + categories[i++];
                // }
                const productInfo = `
                <svg class="closeCard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" /></svg>
                <img src='${item.imgSrc}'>
                <h2>${item.productName}</h2>
                <h1>$${item.price} CAD</h1>
                <h5></h5>
                `;


                $('.product-info').innerHTML = productInfo;

                $('.closeCard').onclick = function() {
                    $('.product-info').classList.remove('isOpened');
                    $('.nav-overlay').style.display = 'none';
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
    $('.nav-overlay').style.display = 'none';
    this.style.display = 'none';
    filter();
    event.stopPropagation();
}

$('.nav-overlay').onclick = function() {
    $('.navMenu').style.transform = 'translateX(-312px)';
    $('.nav-overlay').style.display = 'none';
    $('body').style.overflow = 'initial';
    $('.product-info').classList.remove('isOpened');
    if ($('#myinput').value !== '') {
        $('.close').style.display = 'block';
    } else {
        $('.topbar').classList.remove('searchOpen');
    }
}

$('.search').onclick = function() {
    $('.topbar').classList.add('searchOpen');
    $('.nav-overlay').style.display = 'block';
    $('body').style.overflow = 'hidden';
}