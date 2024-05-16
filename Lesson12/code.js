let animals = ['Lion', 'Dog', 'Bear'];

print();

animals.push('Fox');

print();

//remove animals
animals.pop();


print();

var result = animals.find(x => x == 'Dog');

if (result == undefined) {
    console.log('========');
    console.log('animals not exists');
}
else {
    console.log('========');
    console.log('animals exists');
}

function print() {
    console.log('=========')
    for(i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    }
}

let index = animals.findIndex(x => x == 'Bear');
if (index == -1){
    console.log('animals not exists');
}
else{
    console.log('I found the animals and is called' , animals[index], 'it was found in index', index);
}
console.log(index);

let animalsEndWithLetterA = animals.filter(x => x.endsWith('n'))

console.log(animalsEndWithLetterA);


