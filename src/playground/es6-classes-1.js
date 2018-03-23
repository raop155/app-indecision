
class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	};

	getGreeting() {
		return `Hi. I am ${this.name}!.`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}


class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMayor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if(this.hasMayor()) description += ` Their major is ${this.major}.`;
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	hasHomeLocation() {
		return !!this.homeLocation;
	}

	getGreeting() {
		let gretting = super.getGreeting();
		let messageGretting = this.hasHomeLocation() ? gretting += `. I'm visiting from ${this.homeLocation}.`  : gretting;
		return messageGretting;
	}

}


const me = new Traveler('Ricardo Olarte', 27, 'Perú');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
