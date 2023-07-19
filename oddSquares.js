function oddSquares(arr){
    let filtered = arr.filter(el => !(el % 2 == 0))
    return filtered.map(el => el * el)
}
