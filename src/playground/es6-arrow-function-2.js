const user = {
    name: 'Hussein',
    medals: ['gold','silver','iorn'],
    printMedalsWon: function ()  {

        this.medals.forEach( (medal) => {
            console.log(this.name + ' won the ' + medal + ' medal')
        })
    }
}

user.printMedalsWon()



const multiplier = {
    numbers: [2,4,90,3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(number => number*3)
    }
}

console.log(multiplier.multiply())