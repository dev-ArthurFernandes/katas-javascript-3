const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let array = []
    for(let i = 1; i <= 25; i++){
        array.push(i)
    }
    return array
}

function kata2() {
    let array = []
    for(let i = 25; i >= 1; i--){
        array.push(i)
    }
    return array
}

function kata3() {
    let array = []
    for(let i = 1; i <= 25; i++){
        array.push(i * -1)
    }
    return array
}

function kata4() {
    let array = []
    for(let i = 25; i >= 1; i--){
        array.push(i * -1)
    }
    return array
}

function kata5() {
    let array = []

    for(let i = 25; i >= 1; i--){
        if(i % 2 === 1){
            array.push(i)
        }
    }
    for(let i = 1; i <= 25; i++){
        if(i % 2 === 1){
            array.push(i * -1)
        }
    }
    return array
}

function kata6() {
    let array = []
    for(let i = 1; i<=100;i++){
        if(i % 3 === 0){
            array.push(i)
        }
    }
    return array
}

function kata7() {
    let array = []
    for(let i = 1; i<=100;i++){
        if(i % 7 === 0){
            array.push(i)
        }
    }
    return array
}

function kata8() {
    let array = []
    for(let i = 100; i>=1;i--){
        if(i % 7 === 0 || i % 3 === 0){  
            array.push(i)
        }
    }
    return array
}

function kata9() {
    let array = []
    for(let i = 5; i <= 100; i++){
        if(i % 2 === 1 && i % 5 === 0){
            array.push(i)
        }
    }
    return array
}  

function kata10() {
    return sampleArray
}

function kata11(array) {

    let lista = []
    for(let i = 0; i < array.length;i++){
        if(array[i] % 2 === 0){
            lista.push(array[i])
        }
    }
    return lista
}

function kata12(array) {
    let lista = []
    for(let i = 0; i < array.length;i++){
        if(array[i] % 2 === 1){
            lista.push(array[i])
        }
    }
    return lista
}

function kata13(array) {
    let lista = []
    for(let i = 0; i < array.length;i++){
        if(array[i] % 8 === 0){
            lista.push(array[i])
        }
    }
    return lista
}

function kata14(array) {
    let lista = []
    for(let i = 0; i < array.length;i++){
        lista.push(array[i]**2)
    }
    return lista
}

function kata15() {
    let somados = 0    
    for(let i = 1;i<=20;i++){
        somados += i
    }
    return somados
}

function kata16(array) {
    let somados = 0    
    for(let i = 0;i < array.length;i++){
        somados += array[i]
    }
    return somados
}

function kata17(array) {
    let menor = array[0]
    for(let i = 1; i < array.length; i++){
        let maisMenor = array[i]
        if(menor > array[i]){
            menor = array[i]
        }
    }
    return menor
}

function kata18(array) {
    let maior = array[0]
    for(let i = 1; i < array.length; i++){
        let maisMenor = array[i]
        if(maior < array[i]){
            maior = array[i]
        }
    }
    return maior
}

console.log("-----KATA1-----")
console.log(kata1())
console.log("-----KATA2-----")
console.log(kata2())
console.log("-----KATA3-----")
console.log(kata3())
console.log("-----KATA4-----")
console.log(kata4())
console.log("-----KATA5-----")
console.log(kata5())
console.log("-----KATA6-----")
console.log(kata6())
console.log("-----KATA7-----")
console.log(kata7())
console.log("-----KATA8-----")
console.log(kata8())
console.log("-----KATA9-----")
console.log(kata9())
console.log("-----KATA10-----")
console.log(kata10(sampleArray))
console.log("-----KATA11-----")
console.log(kata11(sampleArray))
console.log("-----KATA12-----")
console.log(kata12(sampleArray))
console.log("-----KATA13-----")
console.log(kata13(sampleArray))
console.log("-----KATA14-----")
console.log(kata14(sampleArray))
console.log("-----KATA15-----")
console.log(kata15())
console.log("-----KATA16-----")
console.log(kata16(sampleArray))
console.log("-----KATA17-----")
console.log(kata17(sampleArray))
console.log("-----KATA18-----")
console.log(kata18(sampleArray))