
// 1. Object with property (string, boolean, number, object, array, method which will return a property value) 
const products = {
    name: 'laptop', price: 35000, isAvailabel: true,
    phone: {
        brand: {
            brandName: 'Symphony', price: 12000, color: 'black'
        },
    },
    laptopBrand: ['HP', 'Asus', 'Dell', 'Lenovo', 'Sumsung'],

    objMethod: function () {
        console.log(this.name);
        console.log(this.laptopBrand);
    },
}

// products.objMethod();


// 2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property) 
const threeProperty = `${products.name} = ${products.price} || ${products.laptopBrand[1]} || ${products.phone.brand.name} = ${products.phone.brand.price}`;
// console.log(threeProperty);


// 3.1: no parameter arrow function. return 89 
const number = () => console.log(89);
// number();


// 3.2: single parameter arrow function. will divide input by 7 
const divide = num => console.log(num / 7);
// divide(70);


// 3.3: arrow function with two parameters. 
const twoNum = (num1, num2) => console.log((num1 + num2) * 5);
// twoNum(2, 3);


// 3.4 multi-line arrow function. two parameter. 
const sumation = (num1, num2) => {
    const result = (num1 + 7) + (num2 + 7);
    return result;
}

// console.log(sumation(2, 3));


// 4. map divide each element by 7 
const numbers = [14, 12, 15, 74, 70, 54, 35];
const divide7 = numbers.map(number => number / 7);
// console.log(divide7);


// 5. map, forEach, filter, find 
const sampleNumer = [12, 65, 12, 32, 45];
const mapNum = sampleNumer.map(num => num * 2);
// console.log(mapNum);

sampleNumer.forEach(element => {
    // console.log(element);
})


const mir = arr => {
    for (const n of arr) {
        console.log(n);
    }
}
// mir(sampleNumer);


const filterNum = sampleNumer.filter(num => num > 15);
// console.log(filterNum);




// 6. desctructuring on object and array 
const { name, laptopBrand } = products;
const { brandName, price, color } = products.phone.brand;
// console.log(name, laptopBrand);
// console.log(brandName, price, color);

const [, , third] = [12, 10, 30];
// console.log(third);



