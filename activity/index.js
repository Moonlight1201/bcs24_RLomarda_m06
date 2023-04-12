function oddEvenChecker (num){
   if (typeof num === 'number') {
        num % 2 == 0

        ? console.log('Number is even')
        : console.log('Number is odd')
   }
   else {
    console.log('Invalid Input')
   }
}

function budgetChecker(num){
    if (typeof num ==="number") {
        num > 40000
        ? console.log('You are over the budget')
        : console.log('You have resources left')
    }
    else {
        console.log('Invalid Input')
    }
}

oddEvenChecker(3);
oddEvenChecker(4);
oddEvenChecker('hi');
budgetChecker(40100);
budgetChecker(10000);
budgetChecker('hello');