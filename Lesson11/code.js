
function text1() {
    console.log('hello world');
}

text1();

function text2(message) {
    console.log(message);
}

text2('hello world2');

function text3(num1, num2) {
    let ans = num1 + num2;

    return ans;
}

let answer=text3(1, 1);

console.log(answer);

function text4(num1, num2, num3) {
    let ans = (num1 + num2) - num3;

    return ans;
}

let ans = text4(3, 3, 2);

console.log('text4=',ans)

function text5(string1, string2){
    let name = string1 + string2;

    return name;
}

let name = text5('Agnes', 'Wong');

console.log(name)

