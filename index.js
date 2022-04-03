var vowels = 'aeiou'
var count =0;
var str = "This is a string";
console.log(str.length)
var wordCount = str.split(/\s+/).length;
console.log(wordCount)
function vowel(str){
return str.match(/[aeiou]/gi)
? str.match(/[aeiou]/gi).length:0

}

console.log(vowel(str))