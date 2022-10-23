// Login modal
const modalCloseLogin = document.querySelector('#loginModal .modal')
const modalContainerLogin = document.querySelector('#loginModal .modal__body')

modalCloseLogin.addEventListener('click', closeModal)
modalContainerLogin.addEventListener('click', function (event) {
    event.stopPropagation()
})
// Register modal
const modalCloseRegister = document.querySelector('#registerModal .modal')
const modalContainerRegister = document.querySelector('#registerModal .modal__body')

modalCloseRegister.addEventListener('click', closeModal)
modalContainerRegister.addEventListener('click', function (event) {
    event.stopPropagation()
})
// Restore modal
const modalCloseRestore = document.querySelector('#restoreModal .modal')
const modalContainerRestore = document.querySelector('#restoreModal .modal__body')

modalCloseRestore.addEventListener('click', closeModal)
modalContainerRestore.addEventListener('click', function (event) {
    event.stopPropagation()
})


// Open & Close Modal form
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}
function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';

}
function openRestoreModal() {
    document.getElementById('restoreModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}
function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'block';
}

function closeRestoreModal() {
    document.getElementById('restoreModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('restoreModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'none';
}

// Login form Validation
function emailIsValid1(email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
}

function checkInfo() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email == "") {
        email = "";
        document.getElementById('email-success').innerHTML = "";
        document.getElementById('email-error').innerHTML = "Vui lòng nhập Email"
        document.getElementById('email-error-icon').style.display = 'block';
        document.getElementById('email-success-icon').style.display = 'none';

    }
    else if (!emailIsValid1(email)) {
        email = "";
        document.getElementById('email-success').innerHTML = "";
        document.getElementById('email-error').innerHTML = "Email không đúng định dạng"
        document.getElementById('email-error-icon').style.display = 'block';
        document.getElementById('email-success-icon').style.display = 'none';
    }
    else {
        document.getElementById('email-error').innerHTML = "";
        document.getElementById('email-success').innerHTML = "Email hợp lệ"
        document.getElementById('email-error-icon').style.display = 'none';
        document.getElementById('email-success-icon').style.display = 'block';
    }

    if (password == "") {
        password = "";
        document.getElementById('password-success').innerHTML = "";
        document.getElementById('password-error').innerHTML = "Vùi lòng nhập mật khẩu";
        document.getElementById('password-error-icon').style.display = 'block';
        document.getElementById('password-success-icon').style.display = 'none';

    }
    else if (password.length < 6) {
        password = "";
        document.getElementById('password-success').innerHTML = "";
        document.getElementById('password-error').innerHTML = "Mật khẩu ít nhất 6 kí tự"
        document.getElementById('password-error-icon').style.display = 'block';
        document.getElementById('password-success-icon').style.display = 'none';


    }
    else {
        document.getElementById('password-error').innerHTML = "";
        document.getElementById('password-success').innerHTML = "Mật khẩu hợp lệ";
        document.getElementById('password-error-icon').style.display = 'none';
        document.getElementById('password-success-icon').style.display = 'block';
    }
    if (email && password) {
        console.log(email, password);
    }
}

// Register form Validation
function emailIsValid2(emailRegister) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailRegister)
}
function checkInfoRegister() {
    let fnameRegister = document.getElementById('fnameRegister').value;
    let emailRegister = document.getElementById('emailRegister').value;
    let passwordRegister = document.getElementById('passwordRegister').value;
    let passwordRetype = document.getElementById('passwordRetype').value;
    if (fnameRegister == "") {
        fnameRegister = "";
        document.getElementById('fname-success').innerHTML = "";
        document.getElementById('fname-error').innerHTML = "Vui lòng nhập Họ và tên";
        document.getElementById('fname-error-icon').style.display = 'block';
        document.getElementById('fname-success-icon').style.display = 'none';
    }
    else if (fnameRegister != "") {
        document.getElementById('fname-success').innerHTML = "Họ và tên hợp lệ";
        document.getElementById('fname-error').innerHTML = ""
        document.getElementById('fname-error-icon').style.display = 'none';
        document.getElementById('fname-success-icon').style.display = 'block';
    }
    if (emailRegister == "") {
        emailRegister = "";
        document.getElementById('email-success__register').innerHTML = "";
        document.getElementById('email-error__register').innerHTML = "Vui lòng nhập Email"
        document.getElementById('email-error-icon__register').style.display = 'block';
        document.getElementById('email-success-icon__register').style.display = 'none';

    }
    else if (!emailIsValid2(emailRegister)) {
        emailRegister = "";
        document.getElementById('email-success__register').innerHTML = "";
        document.getElementById('email-error__register').innerHTML = "Email không đúng định dạng"
        document.getElementById('email-error-icon__register').style.display = 'block';
        document.getElementById('email-success-icon__register').style.display = 'none';
    }
    else {
        document.getElementById('email-error__register').innerHTML = "";
        document.getElementById('email-success__register').innerHTML = "Email hợp lệ"
        document.getElementById('email-error-icon__register').style.display = 'none';
        document.getElementById('email-success-icon__register').style.display = 'block';
    }

    if (passwordRegister == "") {
        passwordRegister = "";
        document.getElementById('password-success__register').innerHTML = "";
        document.getElementById('password-error__register').innerHTML = "Vùi lòng nhập mật khẩu";
        document.getElementById('password-error-icon__register').style.display = 'block';
        document.getElementById('password-success-icon__register').style.display = 'none';

    }
    else if (passwordRegister.length < 6) {
        passwordRegister = "";
        document.getElementById('password-success__register').innerHTML = "";
        document.getElementById('password-error__register').innerHTML = "Mật khẩu ít nhất 6 kí tự"
        document.getElementById('password-error-icon__register').style.display = 'block';
        document.getElementById('password-success-icon__register').style.display = 'none';


    }
    else {
        document.getElementById('password-error__register').innerHTML = "";
        document.getElementById('password-success__register').innerHTML = "Mật khẩu hợp lệ";
        document.getElementById('password-error-icon__register').style.display = 'none';
        document.getElementById('password-success-icon__register').style.display = 'block';
    }

    if (passwordRetype == "") {
        passwordRetype = "";
        document.getElementById('password-success__retype').innerHTML = "";
        document.getElementById('password-error__retype').innerHTML = "Vui lòng nhập mật khẩu";
        document.getElementById('password-error-icon__retype').style.display = 'block';
        document.getElementById('password-success-icon__retype').style.display = 'none';

    }
    else if (passwordRetype != passwordRegister) {
        passwordRetype = "";
        document.getElementById('password-success__retype').innerHTML = "";
        document.getElementById('password-error__retype').innerHTML = "Mật khẩu không khớp";
        document.getElementById('password-error-icon__retype').style.display = 'block';
        document.getElementById('password-success-icon__retype').style.display = 'none';

    }
    else {
        passwordRetype = "";
        document.getElementById('password-success__retype').innerHTML = "Mật khẩu hợp lệ";
        document.getElementById('password-error__retype').innerHTML = "";
        document.getElementById('password-error-icon__retype').style.display = 'none';
        document.getElementById('password-success-icon__retype').style.display = 'block';
    }
}

// Restore form Validation
function emailIsValid3(emailRetore) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailRetore)
}
function checkInfoRestore() {
    let emailRetore = document.getElementById('emailRetore').value;
    if (emailRetore == "") {
        emailRetore = "";
        document.getElementById('email-success__restore').innerHTML = "";
        document.getElementById('email-error__restore').innerHTML = "Vui lòng nhập Email"
        document.getElementById('email-error-icon__restore').style.display = 'block';
        document.getElementById('email-success-icon__restore').style.display = 'none';

    }
    else if (!emailIsValid3(emailRetore)) {
        emailRetore = "";
        document.getElementById('email-success__restore').innerHTML = "";
        document.getElementById('email-error__restore').innerHTML = "Email không hợp lệ"
        document.getElementById('email-error-icon__restore').style.display = 'block';
        document.getElementById('email-success-icon__restore').style.display = 'none';

    }
    else {
        document.getElementById('email-success__restore').innerHTML = "Email hợp lệ";
        document.getElementById('email-error__restore').innerHTML = ""
        document.getElementById('email-error-icon__restore').style.display = 'none';
        document.getElementById('email-success-icon__restore').style.display = 'block';

    }

}

// Back-to-top // Page-navigation-bar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("to-top").style.opacity = "1";
    } else {
        document.getElementById("to-top").style.opacity = "0";
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("page-navigation-bar").style.opacity = "1";
    } else {
        document.getElementById("page-navigation-bar").style.opacity = "0";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Mobile-menu
function openMobileMenu() {
    document.getElementById('nav-mobile-content').style.display = 'block';
    document.getElementById('close-menu').style.display = 'block';
    document.getElementById('open-menu').style.display = 'none';


}
function closeMobileMenu() {
    document.getElementById('nav-mobile-content').style.display = 'none';
    document.getElementById('open-menu').style.display = 'inline-block';
    document.getElementById('close-menu').style.display = 'none';
}



// Toggle Button
// Filter & Sort Function
function openCloseFilterList() {
    var sort = document.getElementById('sort__function--list');
    var filter = document.getElementById('filter__function--list');
    var downFilter = document.getElementById('filter__function--icon');
    var deleteFilter = document.getElementById('filter__function--icon-delete');
    var downSort = document.getElementById('sort__function--icon');
    var deleteSort = document.getElementById('sort__function--icon-delete');
    if (filter.style.display === 'none') {
        filter.style.display = 'block';
        sort.style.display = 'none';
        downFilter.style.opacity = "0";
        deleteFilter.style.opacity = "1";
        deleteSort.style.opacity = "0";
        downSort.style.opacity = "1";
    } else {
        filter.style.display = 'none';
        downFilter.style.opacity = "1";
        deleteFilter.style.opacity = "0";
    }
}

function openCloseSortList() {
    var filter = document.getElementById('filter__function--list');
    var sort = document.getElementById('sort__function--list');
    var downSort = document.getElementById('sort__function--icon');
    var deleteSort = document.getElementById('sort__function--icon-delete');
    var deleteFilter = document.getElementById('filter__function--icon-delete');
    var downFilter = document.getElementById('filter__function--icon');
    if (sort.style.display === 'none') {
        sort.style.display = 'block';
        filter.style.display = 'none';
        downSort.style.opacity = "0";
        deleteSort.style.opacity = "1";
        deleteFilter.style.opacity = "0";
        downFilter.style.opacity = "1";
    } else {
        sort.style.display = 'none';
        downSort.style.opacity = "1";
        deleteSort.style.opacity = "0";
    }
}

function openClosePriceFilterList() {
    var price = document.getElementById('item-filter__prices');
    var color = document.getElementById('item-filter__colors');
    var size = document.getElementById('item-filter__sizes');
    if (price.style.display === 'none') {
        price.style.display = 'block';
        color.style.display = 'none';
        size.style.display = 'none';
    } else {
        price.style.display = 'none';
    }
}

function openCloseColorFilterList() {
    var price = document.getElementById('item-filter__prices');
    var color = document.getElementById('item-filter__colors');
    var size = document.getElementById('item-filter__sizes');
    if (color.style.display === 'none') {
        price.style.display = 'none';
        color.style.display = 'block';
        size.style.display = 'none';
    } else {
        color.style.display = 'none';
    }
}
function openCloseSizeFilterList() {
    var price = document.getElementById('item-filter__prices');
    var color = document.getElementById('item-filter__colors');
    var size = document.getElementById('item-filter__sizes');
    if (size.style.display === 'none') {
        price.style.display = 'none';
        color.style.display = 'none';
        size.style.display = 'block';
    } else {
        size.style.display = 'none';
    }
}

// Navigation-bar for Mobile viewport
function openCloseFirstTitle() {
    var firstTitle = document.getElementById('sub-mobile-menu__first--01');
    var secondaryTitle = document.getElementById('sub-mobile-menu__first--02');
    if (firstTitle.style.display === 'none') {
        firstTitle.style.display = 'block';
        secondaryTitle.style.display = 'none';

    } else {
        firstTitle.style.display = 'none';
    }
}

function openCloseSecondaryTitle() {
    var firstTitle = document.getElementById('sub-mobile-menu__first--01');
    var secondaryTitle = document.getElementById('sub-mobile-menu__first--02');
    if (secondaryTitle.style.display === 'none') {
        secondaryTitle.style.display = 'block';
        firstTitle.style.display = 'none';

    } else {
        secondaryTitle.style.display = 'none';
    }
}

function openCloseFirstSubTitle() {
    var firstSubTitle = document.getElementById('sub-mobile-menu__secondary--01');
    var secondarySubTitle = document.getElementById('sub-mobile-menu__secondary--02');
    var thirdSubTitle = document.getElementById('sub-mobile-menu__secondary--03');
    if (firstSubTitle.style.display === 'none') {
        firstSubTitle.style.display = 'block';
        secondarySubTitle.style.display = 'none';
        thirdSubTitle.style.display = 'none';
    } else {
        firstSubTitle.style.display = 'none';
    }
}

function openCloseSecondarySubTitle() {
    var firstSubTitle = document.getElementById('sub-mobile-menu__secondary--01');
    var secondarySubTitle = document.getElementById('sub-mobile-menu__secondary--02');
    var thirdSubTitle = document.getElementById('sub-mobile-menu__secondary--03');
    if (secondarySubTitle.style.display === 'none') {
        firstSubTitle.style.display = 'none';
        secondarySubTitle.style.display = 'block';
        thirdSubTitle.style.display = 'none';
    } else {
        secondarySubTitle.style.display = 'none';
    }
}

function openCloseThirdSubTitle() {
    var firstSubTitle = document.getElementById('sub-mobile-menu__secondary--01');
    var secondarySubTitle = document.getElementById('sub-mobile-menu__secondary--02');
    var thirdSubTitle = document.getElementById('sub-mobile-menu__secondary--03');

    if (thirdSubTitle.style.display === 'none') {
        firstSubTitle.style.display = 'none';
        secondarySubTitle.style.display = 'none';
        thirdSubTitle.style.display = 'block';

    } else {
        thirdSubTitle.style.display = 'none';
    }
}
// Footer for Mobile viewport
function openCloseFirstListFooter() {
    var firstFooterList = document.getElementById('firstListFooter');
    var secondaryFooterList = document.getElementById('secondListFooter');
    var thirdFooterList = document.getElementById('thirdListFooter');
    if (firstFooterList.style.display === 'none') {
        firstFooterList.style.display = 'block';
        secondaryFooterList.style.display = 'none';
        thirdFooterList.style.display = 'none';

    } else {
        firstFooterList.style.display = 'none';
    }
}

function openCloseSecondaryListFooter() {
    var firstFooterList = document.getElementById('firstListFooter');
    var secondaryFooterList = document.getElementById('secondListFooter');
    var thirdFooterList = document.getElementById('thirdListFooter');
    if (secondaryFooterList.style.display === 'none') {
        firstFooterList.style.display = 'none';
        secondaryFooterList.style.display = 'block';
        thirdFooterList.style.display = 'none';

    } else {
        secondaryFooterList.style.display = 'none';
    }
}

function openCloseThirdListFooter() {
    var firstFooterList = document.getElementById('firstListFooter');
    var secondaryFooterList = document.getElementById('secondListFooter');
    var thirdFooterList = document.getElementById('thirdListFooter');
    if (thirdFooterList.style.display === 'none') {
        firstFooterList.style.display = 'none';
        secondaryFooterList.style.display = 'none';
        thirdFooterList.style.display = 'block';
    } else {
        thirdFooterList.style.display = 'none';
    }
}

// Size-guide
function openSizeGuide() {
    document.getElementById('size-guide').style.display = 'block';
}
function closeSizeGuide() {
    document.getElementById('size-guide').style.display = 'none';
}




// Add Class - sub-detail-product__small (Detail-product page for Desktop viewport)
function addFirstClass() {
    var firstClass = document.getElementById("img-first-border");
    var secondaryClass = document.getElementById("img-secondary-border");
    var thirdClass = document.getElementById("img-third-border");
    var fourthClass = document.getElementById("img-fourth-border");
    var fifthClass = document.getElementById("img-fifth-border");
    firstClass.classList.add('img-border');
    secondaryClass.classList.remove('img-border');
    thirdClass.classList.remove('img-border');
    fourthClass.classList.remove('img-border');
    fifthClass.classList.remove('img-border');
}

function addSecondaryClass() {
    var firstClass = document.getElementById("img-first-border");
    var secondaryClass = document.getElementById("img-secondary-border");
    var thirdClass = document.getElementById("img-third-border");
    var fourthClass = document.getElementById("img-fourth-border");
    var fifthClass = document.getElementById("img-fifth-border");
    firstClass.classList.remove('img-border');
    secondaryClass.classList.add('img-border');
    thirdClass.classList.remove('img-border');
    fourthClass.classList.remove('img-border');
    fifthClass.classList.remove('img-border');
}
function addThirdClass() {
    var firstClass = document.getElementById("img-first-border");
    var secondaryClass = document.getElementById("img-secondary-border");
    var thirdClass = document.getElementById("img-third-border");
    var fourthClass = document.getElementById("img-fourth-border");
    var fifthClass = document.getElementById("img-fifth-border");
    firstClass.classList.remove('img-border');
    secondaryClass.classList.remove('img-border');
    thirdClass.classList.add('img-border');
    fourthClass.classList.remove('img-border');
    fifthClass.classList.remove('img-border');
}
function addFourthClass() {
    var firstClass = document.getElementById("img-first-border");
    var secondaryClass = document.getElementById("img-secondary-border");
    var thirdClass = document.getElementById("img-third-border");
    var fourthClass = document.getElementById("img-fourth-border");
    var fifthClass = document.getElementById("img-fifth-border");
    firstClass.classList.remove('img-border');
    secondaryClass.classList.remove('img-border');
    thirdClass.classList.remove('img-border');
    fourthClass.classList.add('img-border');
    fifthClass.classList.remove('img-border');
}
function addFifthClass() {
    var firstClass = document.getElementById("img-first-border");
    var secondaryClass = document.getElementById("img-secondary-border");
    var thirdClass = document.getElementById("img-third-border");
    var fourthClass = document.getElementById("img-fourth-border");
    var fifthClass = document.getElementById("img-fifth-border");
    firstClass.classList.remove('img-border');
    secondaryClass.classList.remove('img-border');
    thirdClass.classList.remove('img-border');
    fourthClass.classList.remove('img-border');
    fifthClass.classList.add('img-border');
}


// Open & close Info product of detail product page - detail-product-page - Mobile viewport
function openCloseInfoProductMobile() {
    var infoProductListMobile = document.getElementById('detail-product-info-product__list--mobile');
    var preserProductListMobile = document.getElementById('detail-product-preservation-product__list--mobile');
    var plusIconMobile = document.getElementById('info-plus-mobile')
    var minusIconMobile = document.getElementById('info-minus-mobile')
    var pluSIconMobile = document.getElementById('info-pluS-mobile')
    var minuSIconMobile = document.getElementById('info-minuS-mobile')
    if (infoProductListMobile.style.display === 'none') {
        infoProductListMobile.style.display = 'block';
        preserProductListMobile.style.display = 'none'
        plusIconMobile.style.opacity = "0";
        minusIconMobile.style.opacity = "1"
        pluSIconMobile.style.opacity = "1";
        minuSIconMobile.style.opacity = "0"
    }
    else {
        infoProductListMobile.style.display = 'none';
        plusIconMobile.style.opacity = "1";
    }
}
// Open & close Preser product of detail product page - detail-product-page - Mobile viewport
function openClosePreserProductMobile() {
    var infoProductListMobile = document.getElementById('detail-product-info-product__list--mobile');
    var preserProductListMobile = document.getElementById('detail-product-preservation-product__list--mobile');
    var plusIconMobile = document.getElementById('info-plus-mobile')
    var minusIconMobile = document.getElementById('info-minus-mobile')
    var pluSIconMobile = document.getElementById('info-pluS-mobile')
    var minuSIconMobile = document.getElementById('info-minuS-mobile')
    if (preserProductListMobile.style.display === 'none') {
        preserProductListMobile.style.display = 'block';
        infoProductListMobile.style.display = 'none'
        plusIconMobile.style.opacity = "1";
        minusIconMobile.style.opacity = "0"
        pluSIconMobile.style.opacity = "0";
        minuSIconMobile.style.opacity = "1"
    }
    else {
        preserProductListMobile.style.display = 'none';
        pluSIconMobile.style.opacity = "1";
    }
}

// Open & close Info product of detail product page - detail-product-page - Tablet viewport
function openCloseInfoProductTablet() {
    var infoProductListTablet = document.getElementById('detail-product-info-product__list--tablet');
    var preserProductListTablet = document.getElementById('detail-product-preservation-product__list--tablet');
    var plusIconTablet = document.getElementById('info-plus-tablet')
    var minusIconTablet = document.getElementById('info-minus-tablet')
    var pluSIconTablet = document.getElementById('info-pluS-tablet')
    var minuSIconTablet = document.getElementById('info-minuS-tablet')
    if (infoProductListTablet.style.display === 'none') {
        infoProductListTablet.style.display = 'block';
        preserProductListTablet.style.display = 'none'
        plusIconTablet.style.opacity = "0";
        minusIconTablet.style.opacity = "1"
        pluSIconTablet.style.opacity = "1";
        minuSIconTablet.style.opacity = "0"
    }
    else {
        infoProductListTablet.style.display = 'none';
        plusIconTablet.style.opacity = "1";
    }
}
// Open & close Preser product of detail product page - detail-product-page - Tablet viewport
function openClosePreserProductTablet() {
    var infoProductListTablet = document.getElementById('detail-product-info-product__list--tablet');
    var preserProductListTablet = document.getElementById('detail-product-preservation-product__list--tablet');
    var plusIconTablet = document.getElementById('info-plus-tablet')
    var minusIconTablet = document.getElementById('info-minus-tablet')
    var pluSIconTablet = document.getElementById('info-pluS-tablet')
    var minuSIconTablet = document.getElementById('info-minuS-tablet')
    if (preserProductListTablet.style.display === 'none') {
        preserProductListTablet.style.display = 'block';
        infoProductListTablet.style.display = 'none'
        plusIconTablet.style.opacity = "1";
        minusIconTablet.style.opacity = "0"
        pluSIconTablet.style.opacity = "0";
        minuSIconTablet.style.opacity = "1"
    }
    else {
        preserProductListTablet.style.display = 'none';
        pluSIconTablet.style.opacity = "1";
    }
}

// Open & close Info product of detail product page - detail-product-page - Desktop viewport
function openCloseInfoProductDesktop() {
    var infoProductListDesktop = document.getElementById('detail-product-info-product__list--desktop');
    var preserProductListDesktop = document.getElementById('detail-product-preservation-product__list--desktop');
    var plusIconDesktop = document.getElementById('info-plus-desktop')
    var minusIconDesktop = document.getElementById('info-minus-desktop')
    var pluSIconDesktop = document.getElementById('info-pluS-desktop')
    var minuSIconDesktop = document.getElementById('info-minuS-desktop')
    if (infoProductListDesktop.style.display === 'none') {
        infoProductListDesktop.style.display = 'block';
        preserProductListDesktop.style.display = 'none'
        plusIconDesktop.style.opacity = "0";
        minusIconDesktop.style.opacity = "1"
        pluSIconDesktop.style.opacity = "1";
        minuSIconDesktop.style.opacity = "0"
    }
    else {
        infoProductListDesktop.style.display = 'none';
        plusIconDesktop.style.opacity = "1";
    }
}
// Open & close Preser product of detail product page - detail-product-page - Desktop viewport
function openClosePreserProductDesktop() {
    var infoProductListDesktop = document.getElementById('detail-product-info-product__list--desktop');
    var preserProductListDesktop = document.getElementById('detail-product-preservation-product__list--desktop');
    var plusIconDesktop = document.getElementById('info-plus-desktop')
    var minusIconDesktop = document.getElementById('info-minus-desktop')
    var pluSIconDesktop = document.getElementById('info-pluS-desktop')
    var minuSIconDesktop = document.getElementById('info-minuS-desktop')
    if (preserProductListDesktop.style.display === 'none') {
        preserProductListDesktop.style.display = 'block';
        infoProductListDesktop.style.display = 'none'
        plusIconDesktop.style.opacity = "1";
        minusIconDesktop.style.opacity = "0"
        pluSIconDesktop.style.opacity = "0";
        minuSIconDesktop.style.opacity = "1"
    }
    else {
        preserProductListDesktop.style.display = 'none';
        pluSIconDesktop.style.opacity = "1";
    }
}


// Open & close Newest post sidebar - desktop
function openCloseNewestPostDesktop() {
    var newestPostDesktop = document.getElementById('main-newest-post__desktop');
    if (newestPostDesktop.style.display === 'block') {
        newestPostDesktop.style.display = 'none';
    }
    else {
        newestPostDesktop.style.display = 'block';
    }
}

function openCloseCategoryPostDesktop() {
    var categoryPostDesktop = document.getElementById('main-category-post__desktop');
    if (categoryPostDesktop.style.display === 'block') {
        categoryPostDesktop.style.display = 'none';
    }
    else {
        categoryPostDesktop.style.display = 'block';
    }
}

// Open & close Newest post sidebar - tablet
function openCloseNewestPostTablet() {
    var newestPostTablet = document.getElementById('main-newest-post__tablet');
    if (newestPostTablet.style.display === 'block') {
        newestPostTablet.style.display = 'none';
    }
    else {
        newestPostTablet.style.display = 'block';
    }
}

function openCloseCategoryPostTablet() {
    var categoryPostTablet = document.getElementById('main-category-post__tablet');
    if (categoryPostTablet.style.display === 'block') {
        categoryPostTablet.style.display = 'none';
    }
    else {
        categoryPostTablet.style.display = 'block';
    }
}

// Open & close Newest post sidebar - mobile
function openCloseNewestPostMobile() {
    var newestPostMobile = document.getElementById('main-newest-post__mobile');
    if (newestPostMobile.style.display === 'none') {
        newestPostMobile.style.display = 'block';
    }
    else {
        newestPostMobile.style.display = 'none';
    }
}

function openCloseCategoryPostMobile() {
    var categoryPostMobile = document.getElementById('main-category-post__mobile');
    if (categoryPostMobile.style.display === 'none') {
        categoryPostMobile.style.display = 'block';
    }
    else {
        categoryPostMobile.style.display = 'none';
    }
}

// Open & close address - Desktop
//Binh Dinh
function openCloseAddressBinhDinhDesktop() {
    var addressBDDesktop = document.getElementById('main-address__content--BD-Desktop');
    var addressPlusBDDesktop = document.getElementById('address-plus__BD--Desktop');
    var addressMinusBDDesktop = document.getElementById('address-minus__BD--Desktop');
    if (addressBDDesktop.style.display === 'none') {
        addressBDDesktop.style.display = 'block';
        addressPlusBDDesktop.style.opacity = "0"
        addressMinusBDDesktop.style.opacity = "1"
    }
    else {
        addressBDDesktop.style.display = 'none';
        addressPlusBDDesktop.style.opacity = "1"
        addressMinusBDDesktop.style.opacity = "0"
    }
}
//Can Tho
function openCloseAddressCanThoDesktop() {
    var addressCTDesktop = document.getElementById('main-address__content--CT-Desktop');
    var addressPlusCTDesktop = document.getElementById('address-plus__CT--Desktop');
    var addressMinusCTDesktop = document.getElementById('address-minus__CT--Desktop');
    if (addressCTDesktop.style.display === 'none') {
        addressCTDesktop.style.display = 'block';
        addressPlusCTDesktop.style.opacity = "0"
        addressMinusCTDesktop.style.opacity = "1"
    }
    else {
        addressCTDesktop.style.display = 'none';
        addressPlusCTDesktop.style.opacity = "1"
        addressMinusCTDesktop.style.opacity = "0"
    }
}
//Da Nang
function openCloseAddressDaNangDesktop() {
    var addressDANDesktop = document.getElementById('main-address__content--DAN-Desktop');
    var addressPlusDANDesktop = document.getElementById('address-plus__DAN--Desktop');
    var addressMinusDANDesktop = document.getElementById('address-minus__DAN--Desktop');
    if (addressDANDesktop.style.display === 'none') {
        addressDANDesktop.style.display = 'block';
        addressPlusDANDesktop.style.opacity = "0"
        addressMinusDANDesktop.style.opacity = "1"
    }
    else {
        addressDANDesktop.style.display = 'none';
        addressPlusDANDesktop.style.opacity = "1"
        addressMinusDANDesktop.style.opacity = "0"
    }
}
//Dong Nai
function openCloseAddressDongNaiDesktop() {
    var addressDONDesktop = document.getElementById('main-address__content--DON-Desktop');
    var addressPlusDONDesktop = document.getElementById('address-plus__DON--Desktop');
    var addressMinusDONDesktop = document.getElementById('address-minus__DON--Desktop');
    if (addressDONDesktop.style.display === 'none') {
        addressDONDesktop.style.display = 'block';
        addressPlusDONDesktop.style.opacity = "0"
        addressMinusDONDesktop.style.opacity = "1"
    }
    else {
        addressDONDesktop.style.display = 'none';
        addressPlusDONDesktop.style.opacity = "1"
        addressMinusDONDesktop.style.opacity = "0"
    }
}
//Ho Chi Minh
function openCloseAddressHoChiMinhDesktop() {
    var addressHCMDesktop = document.getElementById('main-address__content--HCM-Desktop');
    var addressPlusHCMDesktop = document.getElementById('address-plus__HCM--Desktop');
    var addressMinusHCMDesktop = document.getElementById('address-minus__HCM--Desktop');
    if (addressHCMDesktop.style.display === 'none') {
        addressHCMDesktop.style.display = 'block';
        addressPlusHCMDesktop.style.opacity = "0"
        addressMinusHCMDesktop.style.opacity = "1"
    }
    else {
        addressHCMDesktop.style.display = 'none';
        addressPlusHCMDesktop.style.opacity = "1"
        addressMinusHCMDesktop.style.opacity = "0"
    }
}
//Quang Ngai
function openCloseAddressQuangNgaiDesktop() {
    var addressQNDesktop = document.getElementById('main-address__content--QN-Desktop');
    var addressPlusQNDesktop = document.getElementById('address-plus__QN--Desktop');
    var addressMinusQNDesktop = document.getElementById('address-minus__QN--Desktop');
    if (addressQNDesktop.style.display === 'none') {
        addressQNDesktop.style.display = 'block';
        addressPlusQNDesktop.style.opacity = "0"
        addressMinusQNDesktop.style.opacity = "1"
    }
    else {
        addressQNDesktop.style.display = 'none';
        addressPlusQNDesktop.style.opacity = "1"
        addressMinusQNDesktop.style.opacity = "0"
    }
}
//Vung Tau
function openCloseAddressVungTauDesktop() {
    var addressVTDesktop = document.getElementById('main-address__content--VT-Desktop');
    var addressPlusVTDesktop = document.getElementById('address-plus__VT--Desktop');
    var addressMinusVTDesktop = document.getElementById('address-minus__VT--Desktop');
    if (addressVTDesktop.style.display === 'none') {
        addressVTDesktop.style.display = 'block';
        addressPlusVTDesktop.style.opacity = "0"
        addressMinusVTDesktop.style.opacity = "1"
    }
    else {
        addressVTDesktop.style.display = 'none';
        addressPlusVTDesktop.style.opacity = "1"
        addressMinusVTDesktop.style.opacity = "0"
    }
}

// Open & close address - Tablet
//Binh Dinh
function openCloseAddressBinhDinhTablet() {
    var addressBDTablet = document.getElementById('main-address__content--BD-Tablet');
    var addressPlusBDTablet = document.getElementById('address-plus__BD--Tablet');
    var addressMinusBDTablet = document.getElementById('address-minus__BD--Tablet');
    if (addressBDTablet.style.display === 'none') {
        addressBDTablet.style.display = 'block';
        addressPlusBDTablet.style.opacity = "0"
        addressMinusBDTablet.style.opacity = "1"
    }
    else {
        addressBDTablet.style.display = 'none';
        addressPlusBDTablet.style.opacity = "1"
        addressMinusBDTablet.style.opacity = "0"
    }
}
//Can Tho
function openCloseAddressCanThoTablet() {
    var addressCTTablet = document.getElementById('main-address__content--CT-Tablet');
    var addressPlusCTTablet = document.getElementById('address-plus__CT--Tablet');
    var addressMinusCTTablet = document.getElementById('address-minus__CT--Tablet');
    if (addressCTTablet.style.display === 'none') {
        addressCTTablet.style.display = 'block';
        addressPlusCTTablet.style.opacity = "0"
        addressMinusCTTablet.style.opacity = "1"
    }
    else {
        addressCTTablet.style.display = 'none';
        addressPlusCTTablet.style.opacity = "1"
        addressMinusCTTablet.style.opacity = "0"
    }
}
//Da Nang
function openCloseAddressDaNangTablet() {
    var addressDANTablet = document.getElementById('main-address__content--DAN-Tablet');
    var addressPlusDANTablet = document.getElementById('address-plus__DAN--Tablet');
    var addressMinusDANTablet = document.getElementById('address-minus__DAN--Tablet');
    if (addressDANTablet.style.display === 'none') {
        addressDANTablet.style.display = 'block';
        addressPlusDANTablet.style.opacity = "0"
        addressMinusDANTablet.style.opacity = "1"
    }
    else {
        addressDANTablet.style.display = 'none';
        addressPlusDANTablet.style.opacity = "1"
        addressMinusDANTablet.style.opacity = "0"
    }
}
//Dong Nai
function openCloseAddressDongNaiTablet() {
    var addressDONTablet = document.getElementById('main-address__content--DON-Tablet');
    var addressPlusDONTablet = document.getElementById('address-plus__DON--Tablet');
    var addressMinusDONTablet = document.getElementById('address-minus__DON--Tablet');
    if (addressDONTablet.style.display === 'none') {
        addressDONTablet.style.display = 'block';
        addressPlusDONTablet.style.opacity = "0"
        addressMinusDONTablet.style.opacity = "1"
    }
    else {
        addressDONTablet.style.display = 'none';
        addressPlusDONTablet.style.opacity = "1"
        addressMinusDONTablet.style.opacity = "0"
    }
}
//Ho Chi Minh
function openCloseAddressHoChiMinhTablet() {
    var addressHCMTablet = document.getElementById('main-address__content--HCM-Tablet');
    var addressPlusHCMTablet = document.getElementById('address-plus__HCM--Tablet');
    var addressMinusHCMTablet = document.getElementById('address-minus__HCM--Tablet');
    if (addressHCMTablet.style.display === 'none') {
        addressHCMTablet.style.display = 'block';
        addressPlusHCMTablet.style.opacity = "0"
        addressMinusHCMTablet.style.opacity = "1"
    }
    else {
        addressHCMTablet.style.display = 'none';
        addressPlusHCMTablet.style.opacity = "1"
        addressMinusHCMTablet.style.opacity = "0"
    }
}
//Quang Ngai
function openCloseAddressQuangNgaiTablet() {
    var addressQNTablet = document.getElementById('main-address__content--QN-Tablet');
    var addressPlusQNTablet = document.getElementById('address-plus__QN--Tablet');
    var addressMinusQNTablet = document.getElementById('address-minus__QN--Tablet');
    if (addressQNTablet.style.display === 'none') {
        addressQNTablet.style.display = 'block';
        addressPlusQNTablet.style.opacity = "0"
        addressMinusQNTablet.style.opacity = "1"
    }
    else {
        addressQNTablet.style.display = 'none';
        addressPlusQNTablet.style.opacity = "1"
        addressMinusQNTablet.style.opacity = "0"
    }
}
//Vung Tau
function openCloseAddressVungTauTablet() {
    var addressVTTablet = document.getElementById('main-address__content--VT-Tablet');
    var addressPlusVTTablet = document.getElementById('address-plus__VT--Tablet');
    var addressMinusVTTablet = document.getElementById('address-minus__VT--Tablet');
    if (addressVTTablet.style.display === 'none') {
        addressVTTablet.style.display = 'block';
        addressPlusVTTablet.style.opacity = "0"
        addressMinusVTTablet.style.opacity = "1"
    }
    else {
        addressVTTablet.style.display = 'none';
        addressPlusVTTablet.style.opacity = "1"
        addressMinusVTTablet.style.opacity = "0"
    }
}

// Open & close address - Mobile
//Binh Dinh
function openCloseAddressBinhDinhMobile() {
    var addressBDMobile = document.getElementById('main-address__content--BD-Mobile');
    var addressPlusBDMobile = document.getElementById('address-plus__BD--Mobile');
    var addressMinusBDMobile = document.getElementById('address-minus__BD--Mobile');
    if (addressBDMobile.style.display === 'none') {
        addressBDMobile.style.display = 'block';
        addressPlusBDMobile.style.opacity = "0"
        addressMinusBDMobile.style.opacity = "1"
    }
    else {
        addressBDMobile.style.display = 'none';
        addressPlusBDMobile.style.opacity = "1"
        addressMinusBDMobile.style.opacity = "0"
    }
}
//Can Tho
function openCloseAddressCanThoMobile() {
    var addressCTMobile = document.getElementById('main-address__content--CT-Mobile');
    var addressPlusCTMobile = document.getElementById('address-plus__CT--Mobile');
    var addressMinusCTMobile = document.getElementById('address-minus__CT--Mobile');
    if (addressCTMobile.style.display === 'none') {
        addressCTMobile.style.display = 'block';
        addressPlusCTMobile.style.opacity = "0"
        addressMinusCTMobile.style.opacity = "1"
    }
    else {
        addressCTMobile.style.display = 'none';
        addressPlusCTMobile.style.opacity = "1"
        addressMinusCTMobile.style.opacity = "0"
    }
}
//Da Nang
function openCloseAddressDaNangMobile() {
    var addressDANMobile = document.getElementById('main-address__content--DAN-Mobile');
    var addressPlusDANMobile = document.getElementById('address-plus__DAN--Mobile');
    var addressMinusDANMobile = document.getElementById('address-minus__DAN--Mobile');
    if (addressDANMobile.style.display === 'none') {
        addressDANMobile.style.display = 'block';
        addressPlusDANMobile.style.opacity = "0"
        addressMinusDANMobile.style.opacity = "1"
    }
    else {
        addressDANMobile.style.display = 'none';
        addressPlusDANMobile.style.opacity = "1"
        addressMinusDANMobile.style.opacity = "0"
    }
}
//Dong Nai
function openCloseAddressDongNaiMobile() {
    var addressDONMobile = document.getElementById('main-address__content--DON-Mobile');
    var addressPlusDONMobile = document.getElementById('address-plus__DON--Mobile');
    var addressMinusDONMobile = document.getElementById('address-minus__DON--Mobile');
    if (addressDONMobile.style.display === 'none') {
        addressDONMobile.style.display = 'block';
        addressPlusDONMobile.style.opacity = "0"
        addressMinusDONMobile.style.opacity = "1"
    }
    else {
        addressDONMobile.style.display = 'none';
        addressPlusDONMobile.style.opacity = "1"
        addressMinusDONMobile.style.opacity = "0"
    }
}
//Ho Chi Minh
function openCloseAddressHoChiMinhMobile() {
    var addressHCMMobile = document.getElementById('main-address__content--HCM-Mobile');
    var addressPlusHCMMobile = document.getElementById('address-plus__HCM--Mobile');
    var addressMinusHCMMobile = document.getElementById('address-minus__HCM--Mobile');
    if (addressHCMMobile.style.display === 'none') {
        addressHCMMobile.style.display = 'block';
        addressPlusHCMMobile.style.opacity = "0"
        addressMinusHCMMobile.style.opacity = "1"
    }
    else {
        addressHCMMobile.style.display = 'none';
        addressPlusHCMMobile.style.opacity = "1"
        addressMinusHCMMobile.style.opacity = "0"
    }
}
//Quang Ngai
function openCloseAddressQuangNgaiMobile() {
    var addressQNMobile = document.getElementById('main-address__content--QN-Mobile');
    var addressPlusQNMobile = document.getElementById('address-plus__QN--Mobile');
    var addressMinusQNMobile = document.getElementById('address-minus__QN--Mobile');
    if (addressQNMobile.style.display === 'none') {
        addressQNMobile.style.display = 'block';
        addressPlusQNMobile.style.opacity = "0"
        addressMinusQNMobile.style.opacity = "1"
    }
    else {
        addressQNMobile.style.display = 'none';
        addressPlusQNMobile.style.opacity = "1"
        addressMinusQNMobile.style.opacity = "0"
    }
}
//Vung Tau
function openCloseAddressVungTauMobile() {
    var addressVTMobile = document.getElementById('main-address__content--VT-Mobile');
    var addressPlusVTMobile = document.getElementById('address-plus__VT--Mobile');
    var addressMinusVTMobile = document.getElementById('address-minus__VT--Mobile');
    if (addressVTMobile.style.display === 'none') {
        addressVTMobile.style.display = 'block';
        addressPlusVTMobile.style.opacity = "0"
        addressMinusVTMobile.style.opacity = "1"
    }
    else {
        addressVTMobile.style.display = 'none';
        addressPlusVTMobile.style.opacity = "1"
        addressMinusVTMobile.style.opacity = "0"
    }
}


