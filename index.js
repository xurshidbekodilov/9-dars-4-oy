//foreach1 Berilgan sonlar massividagi har bir elementni 2 ga ko'paytirib, natijani konsolga chiqazuvchi funksiyani yozin
/*
let arr = [2, 1, 5, 9, 4, 8];
let newArr = [];
arr.forEach(function(value){
    newArr.push(value*2);
})
console.log(newArr);
*/

//foreach2 Berilgan so'zlar massividagi har bir so'zni katta harflarda konsolga chiqazuvchi funksiyani yozing
/*
let words = ["hello", "world", "javascript", "is", "fun"];
let newWords = [];
words.forEach(function(word) {
    newWords.push(word.toUpperCase());
});
*/

//foreach3 Berilgan raqamlar massividagi har bir elementga 5 qo'shib, yangi massiv yaratadigan va uni konsolga chiqazuvchi funksiyani yozing
/*
let arr = [2, 1, 5, 9, 4, 8];
let newArr = [];
arr.forEach(function(value){
    newArr.push(value+5);
})
console.log(newArr);
*/

//foreach4 Obyektga oid ekan. ustoz ishlamay qo'yaver dedilar

//map1 Berilgan sonlar massividagi har bir elementni 2 ga ko'paytirib, yangi massiv qaytaruvchi funksiyani yozing
/*
let arr = [2, 1, 5, 9, 4, 8];
let res = arr.map(function(value){
    return value*2;
})
console.log(res);
*/

//map2 Berilgan so'zlar massividagi har bir so'zni katta harflarga aylantirib, yangi massiv qaytaruvchi funksiyani yozing
/*
let words = ["hello", "world", "javascript", "is", "fun"];
let newWords = arr.map(function(value){
    return value.toUpperCase();
})
console.log(newWords);
*/

//map3  Berilgan sonlar massividagi har bir elementga 5 qo'shib, yangi massiv qaytaruvchi funksiyani yozing
/*
let arr = [2, 1, 5, 9, 4, 8];
let res = arr.map(function(value){
    return value+5;
})
console.log(res);
*/

//map4 Obyektga oid ekan. ustoz ishlamay qo'yaver dedilar

//filter1 Berilgan sonlar massividan faqat juft sonlarni chiqarib, yangi massiv yaratadigan funksiyani yozing
/*
let arr = [2, 1, 5, 9, 4, 8];
let res = arr.filter(function(value){
    return value%2==0;
})
console.log(res);
*/

//filter2  Berilgan so'zlar massivida uzunligi 5 dan katta bo'lgan so'zlarni chiqarib, yangi massiv yaratadigan funksiyani yozing
/*
let words = ["hello", "assalom", "javascript", "tohirjon", "fun"];
let newWords = words.filter(function(value){
    return value.length>5;
})
console.log(newWords);
*/

//filter3 Berilgan yoshlar massividan faqat 18 yoshdan katta bo'lganlarni chiqarib, yangi massiv yaratadigan funksiyani yozing
/*
let arr = [20, 12, 25, 9, 24, 18];
let res = arr.filter(function(value){
    return value>18;
})
console.log(res);
*/

//filter4 Obyektga oid ekan. ustoz ishlamay qo'yaver dedilar

//find1  Berilgan sonlar massividan qiymati 10 dan katta bo'lgan birinchi sonni topuvchi funksiyani yozing.
/*
let arr = [2, 12, 25, 9, 24, 18];
let res = arr.find(function(value){
    return value>10;
})
console.log(res);
*/

//find2 Obyektga oid ekan. ustoz ishlamay qo'yaver dedilar

//some1 Berilgan sonlar massivida kamida bitta musbat son bor-yo'qligini tekshiruvchi funksiyani yozing
/*
let arr = [20, 12, 25, 9, 24, 18];
let res = arr.some(function(value){
    return value > 0;
})
console.log(res);
*/

//some2 Berilgan so'zlar massivida kamida bitta uzunligi 5 dan katta bo'lgan so'z bor-yo'qligini tekshiruvchi funksiyani yozing
/*
let arr = ['cat', 'dog', 'elephant'];
let res = arr.some(function(value){
    return value.length > 5;
})
console.log(res);
*/

//every1 Berilgan sonlar massivida barcha sonlar musbat ekanligini tekshiruvchi funksiyani yozing
/*
let arr = [-20, 12, 25, -9, 24, 18];
let res = arr.every(function(value){
    return value > 0;
})
console.log(res);
*/

//every2 Obyektga oid ekan. ustoz ishlamay qo'yaver dedilar