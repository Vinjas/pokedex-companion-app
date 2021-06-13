export function genderRates(rate) {
    let female = (rate * 100) / 8;
    let male = 100 - female;
    return [`${male} %`, `${female} %`]
}
