function calculateMoney(number) {
    if (typeof number !== "number") {
        return "please type number"
    }
    else if (number < 0) {
        return "please provide positive value"
    }
    const totalSave = (number * 120) - (500 + (8 * 50))
    return totalSave
}
// console.log(calculateMoney(-1))

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    const nameCaseCheck = name.toLowerCase()

    if (nameCaseCheck.slice(-1) == "a" ||
        nameCaseCheck.slice(-1) == "y" ||
        nameCaseCheck.slice(-1) == "i" ||
        nameCaseCheck.slice(-1) == "e" ||
        nameCaseCheck.slice(-1) == "o" ||
        nameCaseCheck.slice(-1) == "u" ||
        nameCaseCheck.slice(-1) == "w") {
        return "Good Name"
    } else {
        return "Bad Name"
    }

}

// console.log(checkName("masud"))

function deleteInvalids(arr) {

    let newArr = []
    for (let element of arr) {
        console.log(element)
    }


}
deleteInvalids([NaN, 1, 12, 0, -1, undefined])