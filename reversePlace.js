function reversePlace(str){
    return str.split(' ').map((el) => el.split('').reverse().join('')).join(' ')
}
