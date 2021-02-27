const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];




function ignoreLeadingArticle(bandName){
        return bandName.replace(/^(a |the |an )/i, '').trim();
     }



   
const sortedBands= bands.sort((a,b)=>{
    return ignoreLeadingArticle(a)> ignoreLeadingArticle(b) ? 1: -1;
  
});
console.log(sortedBands);



document.querySelector('#bands').innerHTML= bands.map(band=>`<li>${band}</li>`).join('');























// function ignoreLeadingArticle(bandName){
//     return bandName.replace(/^(a |the |an )/i, '').trim();
// }
// const sortedBands= bands.sort((a,b)=>ignoreLeadingArticle(a)>ignoreLeadingArticle(b)? 1: -1);
// document.querySelector('#bands').innerHTML= sortedBands.map(band=>`<li>${band}</li>`).join('');
// console.log(sortedBands);






