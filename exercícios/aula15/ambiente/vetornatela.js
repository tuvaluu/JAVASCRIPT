let valores = [8, 3, 9, 1, 5, 9, 3, 6, 2, 7, 0]

/*for (let pos = 0;pos < valores.length; pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for (let pos in valores) {
    console.log (valores[pos])
}