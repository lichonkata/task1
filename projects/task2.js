
class Food {
    constructor(id, rating) {
        this.id = id;
        this.rating = rating;
    }
    getvalue() {
        return this
    }
    setRating(rating) {
        this.rating = rating;
    }
}

const desserts = [
    new Food('ice cream', 1),
    new Food('cake', 2),
    new Food('chocolate', 3)

]

const thebest = desserts.filter((item) => item.rating >= 3);
const lessThanThree = desserts.filter((item) => item.rating < 3);

console.log('[thebest]: ', thebest)
console.log('[lessThanThree]: ', lessThanThree)



const fruit = new Food('fruit', null)

desserts.push(fruit.getvalue())
console.log('[All desserts]: ', desserts)

const dislike = desserts.find((item) => !item.rating);
console.log('[Dislike]: ', dislike)


const myNewArray = JSON.parse(JSON.stringify(desserts))

const newDesserts = myNewArray.map(item => new Food(item.id, item.rating)).map((dessert) => {
    if (!dessert.rating) {
        dessert.setRating(10)
    }
    return dessert
});
console.log('[OLD object]:', desserts)
console.log('[NEW object]:', newDesserts)

const norate = desserts.find((item) => !item.rating);
console.log('[NO rate]:',norate)


const newTheBest = newDesserts.filter((item) => item.rating >= 3);
console.log('[Rate 3 or more] :',newTheBest)















