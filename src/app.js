console.log("Merhaba Kodlama ");
//18.10.2021 Başlangıç..
//JS type Safe değildir.
var dolarBugün=9.20


let dolarDün=8.80;

console.log(dolarDün);



const euroDün=11.2;

//euroDün=11; Hata const read-only olduğundan dolayı.
console.log(euroDün);


//Array camelCase Kullanılır değişken tanımlanırken NOT:Tanımlamaya Göre Değişir.
//Pascalcase kullanılır.
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Knot Kredisi"];

//console.log(konutKredileri);

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;++i){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
