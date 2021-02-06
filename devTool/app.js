const dogs = [{ name: 'Snickers', age: 2 },
             { name: 'hugo', age: 8 }];

function makeGreen(){
    const p= document.querySelector('p');
    p.style.color="black";
    p.style.font="30px";
    p.style.fontFamily="Times New Roman", Times, serif;
}
console.log('hello');
console.log('Hello I am a %s string!', '💩');
//Warning
console.warn('OH NO!');

//Error
console.error('oh shit!');

//Info
console.info('Crocodiles eat 3-4 people per year');

//Testing
 const p = document.querySelector('p');
 console.assert(p.classList.contains('.ouch'), 'That is wrong');

// //Clearing
console.clear();

console.log(p);
console.dir(p);
// console.clear();





dogs.forEach(dog=>{
    console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });

//     // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    // console.time('fetching');
    // fetch('https://api.github.com/users/madhurima-ms')
    //   .then(data => data.json())
    //   .then(data => {
    //     console.timeEnd('fetching');
    //    console.log(data);
    //   });
      console.time('fetching data');
      fetch('https://twitter.com/madhurima_ms')
      .then(data=>data.json())
      .then(data =>{
        console.timeEnd('fetching data');
         console.log(data); 
      });

//     