export function hatchCycle(number) {
    let stepsMin = number * 255 + ""
    let stepsMax = number * 257 + ""
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(stepsMin))
        stepsMin = stepsMin.replace(pattern, "$1.$2");
    while (pattern.test(stepsMax))
        stepsMax = stepsMax.replace(pattern, "$1.$2");

    return `${number} ( ${stepsMin} - ${stepsMax} steps )`
}