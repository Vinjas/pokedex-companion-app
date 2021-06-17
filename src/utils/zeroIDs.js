function zeroIDs(id) {
    let strID = id.toString()
    
    switch (strID.length) {
        case 1:
            return `00${id}`

        case 2:
            return `0${id}`

        default:
            return id

    }
}

export default zeroIDs

