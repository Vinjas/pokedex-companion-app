function zeroIDs(id) {
    let strID = id.toString()
    
    switch (strID.length) {
        case 1:
            return `00${id}`
            break;
        case 2:
            return `0${id}`
            break;
        default:
            return id
            break
    }
}

export default zeroIDs

