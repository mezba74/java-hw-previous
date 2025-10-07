let price = 500

let age =11

if (age < 10) {
    console.log("FREE")
}

else if (age >= 10 && age <= 17) {
    console.log(price - (price * 50 / 100))
}

else if (age >= 18 && age <= 59) {
    console.log(price)
}

else if (age >= 60) {
    console.log(price - (price * 40 / 100))
}