const splitBill = (amount, numPeople) => `Each function needs to pay ${amount / numPeople}`

console.log(splitBill(10, 5))

const countdown = (startingNumber, step) => {
    let countFromNum = startingNumber + step;
    return () => countFromNum -= step;
}

const countdownTimer = countdown(20, 2)
console.log(countdownTimer())
console.log(countdownTimer())
console.log(countdownTimer())