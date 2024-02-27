export {};

// Should you use Single or Double quotes for Strings in TS

// 👇️ default
const str1 = 'single quotes';
console.log(str1);

// 👇️ when the string contains a single quote
const str2 = "It's him";
console.log(str2);

const person = 'Bobby Hadz';
// 👇️ backticks when interpolating variables
const str3 = `hello ${person}`;
console.log(str3);
