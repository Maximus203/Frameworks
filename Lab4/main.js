function add(x, y){
    return x + y + y
}

const diff = function(x, y) {
    return x - y
}

const prod = (x, y) => {
    return x * y
}

let sum = add(3, 6)
console.log(`sum = ${sum}`)

let sub = diff(4, 1)
console.log(`diff = ${sub}`)

console.log(`prod = ${prod(2, 5)}`)
