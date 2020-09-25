class Person {
    constructor(name='Anonymous',age=0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` The student's major is ${this.major}`
        }
        return description
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }

    hasHomelocation(){
        return !!this.homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomelocation()) {
            greeting += `I am visiting from ${this.homeLocation}`
        }

        return greeting
    }

}

const traveler = new Traveler('Amado',22,'Saudier')
console.log(traveler.getGreeting())


// const me = new Student('Hussein Badawy',21,'Computer Science');
// console.log(me.getDescription())


// const other = new Student();
// console.log(other.hasMajor())