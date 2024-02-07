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
if(!Array.isArray(arr)){
return "Please input Array"
}
    let newArr = []
    for (let element of arr) {

        if (!isNaN(element) && typeof element !=="object" && typeof element !=="string") {
            newArr.push(element)
        }
    }
return newArr
}
console.log(deleteInvalids([ 1 , 2 , -3 ]))

// 444444444444444444
function password(obj) {
    if (typeof obj.name === "undefined" || typeof obj.birthYear === "undefined" || typeof obj.siteName === "undefined") {
        return "invalid"
    }

    const birthYearDigit = obj.birthYear.toString()
    if (birthYearDigit.length !== 4) {
        return "please provide 4 digit"
    }

    const siteNameUperCase = obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
    const kutupass = `${siteNameUperCase}#${obj.name}@${obj.birthYear}`
    return kutupass
}
// console.log(password({ name: "kutubudin", birthYear: 4042, siteName: "Facebook" }))

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "“invalid input”"
    }
    let totalIcome = 0
    for (let income of arr) {
        if (income >= 3000) {
            const textInIncome = income - income * 20 / 100
            totalIcome += textInIncome

        } else if (income < 3000) {
            totalIcome += income
        }

    }
    const totalSave = totalIcome - livingCost
    if (totalSave >= 0) {
        return totalSave
    }
    else if (totalSave < 0) {
        return "earn more"
    }
    // console.log(totalSave)
}
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))


//.............................

const numbers = [58, 9, NaN, 6, NaN, 8, "hello"]
for (let i of numbers) {
    // console.log(!isNaN(i))
    if (!isNaN(i)) {
        // console.log(i)
    }
    if (typeof i === "number") {
        // console.log(i)
    }

}