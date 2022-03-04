// Write your solution here!
const cats =  ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name)
    console.log(cats)
}

destructivelyAppendCat('Ralph')

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat() {
    cats.pop()
}

destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    cats.shift()
}

destructivelyRemoveFirstCat()

function appendCat(name) {
    return [...cats, name]
}

appendCat("Broom")

function prependCat(name) {
    return [name, ...cats]
}

prependCat("Arnold")

function removeLastCat() {
    const [firstElement, secondElement, ...restArr] = cats
    return [firstElement, secondElement]
}

removeLastCat()

function removeFirstCat() {
    const [firstElement, ...restArr] = cats
    return restArr
}

console.log(removeLastCat())