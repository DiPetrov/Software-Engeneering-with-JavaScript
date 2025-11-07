function cats(input) {

    class Cat {
        constructor (catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }

        meow() {
            return(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let data of input) {
        let parsedData = data.split(' ');
        let catName = parsedData[0];
        let catAge = parsedData[1];

        let cat = new Cat(catName, catAge);
        console.log(cat.meow());
    }
}

cats(['Mellow 2', 'Tom 5']);