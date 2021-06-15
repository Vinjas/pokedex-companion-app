export function baseHappiness(base) {
    if(base === 70) {
        return `${base} ( Normal )`
    } else if (base < 70) {
        return `${base} ( Low )`
    } else if (base > 70) {
        return `${base} ( High )`
    }
}