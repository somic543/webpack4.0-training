var myCart = ['shoes', 'pants', 'food', 'television'];
function calculateCart(cart) {
    let bill = 0;
    cart.forEach(product => {     
        if (product == 'shoes') {bill += 100;}
        else if (product == 'food') {bill += 1000;}
        else {bill += 10;}
    });
    bill += 200;
    return bill;
}

module.exports = {
    myCart: myCart,
    calculateCart: calculateCart
}