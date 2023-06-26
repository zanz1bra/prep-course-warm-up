export {};

const repeatString = (valueToRepeat: string, count: number) => {
    return valueToRepeat.repeat(count);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
