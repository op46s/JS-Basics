function yardGreening (input) {

    let totalPrice = 7.61 * input[0];
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice - discount;

    console.log("The final price is: " + finalPrice + " lv.");
    console.log("The discount is: " + discount + " lv.")

}

yardGreening ([550]);
