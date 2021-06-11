export function heightConversor(height) {
    let meters = height / 10

    let totalInches = (meters * 39.3700787).toFixed(0)

    let feet = Math.floor(totalInches / 12);
    let inches = (totalInches - (feet * 12));

    if(inches < 10) {
        inches = `0${inches}`
    }

    return `${meters} m (${feet}'${inches}")`
}

export function weightConversor(weight) {
    let kg = weight / 10
    let lbs = (kg * 2.20462).toFixed(1)

    return `${kg} kg (${lbs} lbs)`
}
