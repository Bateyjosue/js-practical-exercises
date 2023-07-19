function removeDuplicate(arr){
    let obj = {}
    arr.map((el, index) => {
        if(!Object.values(obj).includes(el)) {
            obj[index] = el
        }
    });

    return Object.values(obj)
}
