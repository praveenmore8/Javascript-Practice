var callbackHell1 = document.querySelector('.callbackHell-demo');
callbackHell1.addEventListener('click', call1);

function call1() {
    const cart = ["shoes", "pants", "kurta"];

    api.createOrder(cart, function () {
        api.proceedToPayment(function () {
            api.showOrderSummary(function () {
                api.updateWallet()
           console.log("Inside Callback Hell");
            }
            )
        })
    })
}