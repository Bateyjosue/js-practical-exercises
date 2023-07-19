function greatestCommonDivision(num1, num2){
    let num1Divisor = divisor(num1);
    let num2Divisor = divisor(num2);

    let divisors = num1Divisor.filter(el => num2Divisor.includes(el))
    console.log(divisors);

    return divisors

}

const divisor = (num) => {
    let div = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            div.push(i)
        }
    }
    return div
}
