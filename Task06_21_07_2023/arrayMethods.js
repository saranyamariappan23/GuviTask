/**
 * Task file to understand Array Methods on Array of Objects.
 */

// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {

  const countries = JSON.parse(xhr.responseText);
  console.log(countries);

  // a) Get all the countries from Asia continent /region using Filter function
  //console.log(countries.filter((country) => country.region === 'Asia'));

  // b) Get all the countries with a population of less than 2 lakhs using Filter function
 // console.log(countries.filter((country) => country.population < parseInt(200000)));

  // c) Print the following details name, capital, flag using forEach function
    // countries.forEach((country, index) => {
    //   let capital = (country.capital)?country.capital[0]:country.capital;
    //   console.log(++index,'Country Name:',country.name.common,'Capital:',capital,'flag:',country.flag);
    // });

  // d) Print the total population of countries using reduce function

// const population = countries.reduce((accumulator, currentValue,currentIndex) => {
//   console.log(currentValue.name.common,currentValue.population);
//  // accumulator['countryname'].push(currentValue.name.common); // Need Clarification on building the new array object.
//   accumulator.push(currentValue.population);
//    return accumulator;
// },[]
// );

// console.log(population);
  // e) Print the country which uses US Dollars as currency.
  // const USDCountries = countries.reduce(function (accumulator, currentValue, currentIndex) {
  //   if(currentValue.currencies != undefined){
  //     if (currentValue.currencies.USD != undefined ) {
  //           accumulator.push(currentValue);
  //         }
  //   }
  //    return accumulator;
  // }, []);

  // console.log(USDCountries);
}
xhr.send();
