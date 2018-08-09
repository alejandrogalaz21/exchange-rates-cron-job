// Pregunta (1)
// Cual es el resultado ? 
"use strict";

require('./cron-jobs')



// x = 3.14
// console.log(x)
// x is not defined



// Pregunta (2)
// Cual es el resultado ? 

// x = 3.14
// console.log(x)
// x is not defined


// Pregunta (3)
// this keyword


// this.name = 'alejandro '

// const myName = function() {
//   console.log(this.name)
// }

// myName.call(this)

// const fetch = require('node-fetch')


// fetch('https://khatractiondataapi.azurewebsites.net/api/KadenceController', 
//     {method: 'GET', headers: { token: 'jgalaz@alioit.com' }}
//     )
//     .then(r => r.json())
//     .then(res => {
//       const {AgencyID} = res[0]
      
//       console.log(AgencyID)
//     })
//     .catch(err => {
//       console.log('sorry the fetch faild')
//       console.log(err)
      
//     })


// const format1 = data => `${data} formated 1 :)`
// const format2 = data => `${data} formated 2 -_.`


// const print = (data, formater) => {
//   const result = formater(data)
//   console.log(`the result is ${result}`)
// }    

// const printCurry = (data) => (formater) => console.log(`printCurry ${formater(data)}`)

// // print('alejandro galaz', format2)

// printCurry('hello')(format2)


// const inventors = [
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//   { first: 'Bob', last: 'Hammarström', year: 1829, passed: 1909 }
// ]


// const inventorsSorted = inventors.sort(function(a, b) {
  
//   const textA = a.first.toUpperCase()
//   const textB = b.first.toUpperCase()
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
// })

// console.log(inventorsSorted)

