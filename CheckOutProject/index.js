if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    document.getElementsByClassName('btn btn-header')[0].addEventListener('click', getCouponsClicked)
    document.getElementsByClassName('btn btn-header')[0].addEventListener('click', showCoupons)
}

function getCouponsClicked() {
    alert('Congratulations! You just received one available coupon!')
}

function showCoupons(){
    alert('Coupon Code: CSC301')

}