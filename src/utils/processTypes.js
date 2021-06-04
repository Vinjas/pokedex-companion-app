function processTypes(arr, index) {   
    let types = "";
    /*arr.forEach(element => {
        types += element.type.name + " "
    });*/

    types += arr[0].type.name

    return types
}

export default processTypes