const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  
const fifteen= inventors.filter(function(inventor){
if(inventor.year>=1500 && inventor.year<1600){
    return true;
}
});
console.table(fifteen);
  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const fullNames = inventors.map(inventor =>inventor.first + " " +inventor.last);    
  console.table(fullNames);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
const ordered= inventors.sort((a,b)=>b.year >a.year ? 1:-1);
console.table(ordered);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?


const yearLived= inventors.reduce((total,inventor)=>{
 return total+inventor.passed - inventor.year;
},0);
console.log(yearLived);


  // 5. Sort the inventors by years lived
 const inLived= inventors.sort((a,b)=>{
     const ineventor= a.passed- a.year;
     const nextineventor= b.passed-b.year;
     return nextineventor > ineventor ? 1: -1;
 });
 console.table(inLived);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const alpha= people.sort((lastOne,firstOne)=> {
    const [aLast, aFirst]=lastOne.split(', ');
    const [bLast, bFirst]=firstOne.split(', ');
    return aLast > bLast ? 1: -1; 
  });
  console.table(alpha);
  
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'car', 'car', 'truck' ];
const transportation= data.reduce((obj,item) => {
 if(!obj[item]){
     obj[item]=0;
 }
    obj[item]++;
   
return obj;


},{});
console.log(transportation);

let obj = {
  a: 1,
  b: 2,
  c: {
      age: 30
  }
};

var objclone = Object.assign({},obj);
console.log('objclone: ', objclone);

var newobj= JSON.parse(JSON.stringify(obj));
newobj.c.age=70;
console.log('new obj', newobj);

// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { 
//     console.log(i); }, i * 1000 );
// }
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        var b = 3;
        b++;
        console.log(b)
    }
    inner();
}
outer();