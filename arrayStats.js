function arrayStats(array){
    let obj = {};
    let sum = array.reduce((a, b)=> a+b);
    obj['sum'] = sum
    obj['average'] = (sum / array.length).toFixed(2) || 0;
    obj['min'] = Math.min(...array)
    obj['max'] = Math.max(...array)

    return obj
    
}
