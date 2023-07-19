function countZeros(n){
    let count = 0;
    while(n >= 10){
        n = n / 10; 
        count += n ; 
    }
    return count
}