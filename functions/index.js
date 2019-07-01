let $ = (ele) => document.querySelector(ele);


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

window.onload = filter();

$('.menu').onclick = function() {
    $('.navMenu').style.transform = 'translateX(0)';
    $('.nav-overlay').style.display = 'block';
    $('body').style.overflow = 'hidden';
    $('.search').style.zIndex = '0';
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


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        $('.product-info').classList.add('isOpened');
        $('.nav-overlay').style.display = 'block';
        let selectedProduct = this.parentElement.querySelector('h1').innerHTML;
        $('.search').style.zIndex = '0';

        data.forEach(function(item) {
            if (selectedProduct == item.productName) {
                console.log(item.price);
                const productInfo = `
                <h4>${item.productName}</h4>
                <h4>${item.price}</h4>
                <img src='${item.imgSrc}'>
                <h4>${item.category}</h4>
                `;

                $('.product-info').innerHTML = productInfo;
            }
        });
    }
}

$('.search').onclick = function() {
    $('.topbar').classList.add('searchOpen');
    $('.nav-overlay').style.display = 'block';
}

$('.close').onclick = function(event) {
    $('.topbar').classList.remove('searchOpen');
    $('#myinput').value = "";
    searchFunction();
    $('.nav-overlay').style.display = 'none';
    $('.close').style.display = 'none';
    event.stopPropagation();
}