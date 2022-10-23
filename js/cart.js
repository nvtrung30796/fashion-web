
const btn = document.querySelectorAll('.button')
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target;
            var product = btnItem.parentElement.parentElement
            var productImg = product.querySelector('img').src
            var productName = product.querySelector('p').innerText
            var productInfo = product.querySelector('span').innerText
            var productPrice = product.querySelector('.price').innerText
            addCart(productPrice, productName, productInfo, productImg)
        }
    })
})

// Add cart
function addCart(productPrice, productName, productInfo, productImg) {
    var addtr = document.createElement('tr')
    var cartItem = document.querySelectorAll('tbody tr')
    for (let i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll('.product-name')
        if (productT[i].innerHTML == productName) {
            openSelectedProduct()
            return
        }
    }

    var trcontent = '<tr> <td> <img src="' + productImg + '" alt=""> <div class="item-info"><p class="product-name">' + productName + '</p><span>' + productInfo + '</span></div></td><td><div class="main-price-list"><span class="price">' + productPrice + '</span><small>đ</small></div></td><td><input class="cart-input" type="number" value="1" min="1"></td><td><i class="far fa-trash-alt cart-delete"></i></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector('tbody')
    cartTable.append(addtr)
    const inp1 = document.querySelectorAll('.cart-input')
    inp1.forEach(function (input1, index) {
        input1.addEventListener("click", function () {
            {
                cartTotal()
            }
        })
    })
    cartTotal()
    deleteCart()
}
// Money total
function cartTotal() {
    var cartItem = document.querySelectorAll('tbody tr')
    var sum = 0;
    for (let i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input').value
        var productPrice = cartItem[i].querySelector('.price').innerHTML
        totalMultiply = inputValue * productPrice * 1000;
        sum = sum + totalMultiply
        totalString = sum.toLocaleString()
    }
    var priceTotal = document.querySelector('.price-total')
    if (sum != 0) {
        priceTotal.innerHTML = totalString;
    }
    else {
        priceTotal.innerHTML = 0;
    }

}
// Delete cart
function deleteCart() {
    var cartItem = document.querySelectorAll('tbody tr')
    for (let j = 0; j < cartItem.length; j++) {
        var productD = document.querySelectorAll('.cart-delete')
        productD[j].addEventListener('click', function (event) {
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement.parentElement
            cartItemDelete.remove()
            cartTotal()
        })
    }

}

const inp = document.querySelectorAll('.cart-input')
inp.forEach(function (input, index) {
    input.addEventListener("click", function () {
        {
            cartTotal()
        }
    })
})

// Open & Close popup
function closeSelectedProduct() {
    document.getElementById('selected-product').style.display = 'none';
}
function openSelectedProduct() {
    document.getElementById('selected-product').style.display = 'block';
}










