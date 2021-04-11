
/* Author: 

*/
console.log("connect");
document.querySelector('.main-form').addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
    console.log(companytype.value);
    console.log(formValidation());
});

function formValidation() {

    let fname = document.querySelector('#fname');
    let lname = document.querySelector('#lname');
    let phoneno = document.querySelector('#phoneno');
    let company = document.querySelector('#company');
    let companytype = document.querySelector('#companytype');
    let country = document.querySelector('#country');
    let email = document.querySelector('#email');

    let userCheck = /^[A-Za-z. ]{3,30}$/;
    let number = /^[0-9]{10}$/;
    let emailexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let span = document.createElement('span');

    if (!fname.value || !userCheck.test(fname.value)) {
        span.innerHTML = "* Please enter min 3 and max 30 character";
        fname.parentElement.appendChild(span);
        return false;
    } else if (!lname.value || !userCheck.test(lname.value)) {
        span.innerHTML = "* Please enter min 3 and max 30 character";
        lname.parentElement.appendChild(span);
        return false;
    } else if (!phoneno.value || !number.test(phoneno.value)) {
        span.innerHTML = "* Please enter 10 digit phone number";
        phoneno.parentElement.appendChild(span);
        return false;
    } else if (!company.value || !userCheck.test(company.value)) {
        span.innerHTML = "* Please enter min 3 and max 30 character";
        company.parentElement.appendChild(span);
        return false;
    } else if (companytype.value === "select") {
        span.innerHTML = "* Please select company type";
        companytype.parentElement.appendChild(span);
        return false;
    } else if (country.value === "choose") {
        span.innerHTML = "* Please select company type";
        country.parentElement.appendChild(span);
        return false;
    } else if (!email.value || !emailexp.test(email.value)) {
        span.innerHTML = "* Please enter valid email ID";
        email.parentElement.appendChild(span);
        return false;
    }
    else {
        removeSpan(fname);
        removeSpan(lname);
        removeSpan(phoneno);
        removeSpan(company);
        removeSpan(email);
        removeSpan(companytype);
        removeSpan(country);
        return true;
    }
}
function removeSpan(elem) {
    let span = elem.parentElement.querySelectorAll('span');
    for (let i = 0; i < span.length; i++) {
        span[i].remove();
    }
}

// ============== Search form ======

// document.querySelector('.searchform').addEventListener("submit",function(e){
//     e.preventDefault();
//     searchValidation();
// })

// function searchValidation (){
//     let searchVal = document.querySelector('.search-control input');
//         console.log(searchVal);
//     let span = document.createElement('p');
//     let userCheck = /^[A-Za-z. ]/;
//     if(!userCheck.test(searchVal.value  )){
//         span.innerHTML = "* Please enter valid input";
//         searchVal.parentElement.appendChild(span);
//         return false;
//     }
//     else {
//         removeSpan(searchVal);
//         return true
//     }
// }


// ======Scroll button=====

function scrolltoTop() {

    let scrollBtn = document.querySelector('.ScrollBtn a');

    window.addEventListener("scroll", function () {

        let scrollVal = this.scrollY;

        if (scrollVal > 600) {
            scrollBtn.style.display = "block";
        }
        else {
            scrollBtn.style.display = "none";
        }
    });
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
}
scrolltoTop();


// ========sticky Navbar======

function stickybar() {
    let headerNav = document.querySelector('.header-mid');

    window.addEventListener("scroll", function () {
        let scrollVal = this.scrollY;
        // console.log(scrollVal);

        if (scrollVal > 30) {
            headerNav.classList.add('active');
        }
        else {
            headerNav.classList.remove('active');
        }
    });
}
stickybar()


// ==========Hubburger menu ==========

function toggle(){

    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

toggle();