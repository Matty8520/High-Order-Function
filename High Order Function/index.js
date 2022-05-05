const countries = [
	{name: "Philippines", continent: "Asia", founded: "1946"},
	{name: "Germany", continent: "Europe", founded: "1949"},
	{name: "Italy", continent: "Europe", founded: "1946"},
	{name: "Brazil", continent: "South America", founded: "1822"},
	{name: "Taiwan", continent: "Asia", founded: "1912"},
	{name: "Canada", continent: "North America", founded: "1867"},
	{name: "China", continent: "Asia", founded: "1949"},
	{name: "France", continent: "Europe", founded: "1792"},
	{name: "Argentina", continent: "South America", founded: "1816"},
	{name: "USA", continent: "North America", founded: "1776"},
	{name: "United Kingdom", continent: "Europe", founded: "1922"},
	{name: "Mexico", continent: "North America", founded: "1821"},
	{name: "South Africa", continent: "Africa", founded: "1961"},
	{name: "Nigeria", continent: "Africa", founded: "1960"}

];

const numbers = [
	{first: "100", last: "50"},
	{first: "75", last: "25"},
]

//filter asian countries
const AsianCountries = countries.filter(countries => countries.continent === "Asia");
console.log(AsianCountries);

//filter countries founded after 1950
const Founded = countries.filter(countries => countries.founded >= "1950");
console.log(Founded);

//map countries name and founded year
const CountriesFounded = countries.map(countries => `${countries.name} [${countries.founded}]`);
console.log(CountriesFounded);

//sort the founded years from earliest to latest
const sortedcountries = countries.sort((a, b) => (a.founded > b.founded ? 1 :
	-1));
console.log(sortedcountries);

//reduce combined the first and last number into one
const reducenumber = numbers.reduce((total, numbers) => total + (numbers.first - numbers.last), 0);
console.log(reducenumber);