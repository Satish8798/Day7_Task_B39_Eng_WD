//creating an XMLhttpRequest instance
let xhr=new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all')

xhr.onload=function(){
    let data=JSON.parse(xhr.responseText);
    //a. get all the countries from Asia/region Asia using the filter function
    let asianCountries=data.filter((d)=>{
        return d.region==='Asia' || d.continents==='Asia';
    });
    console.log('Asian Countries:')
    for(let k of asianCountries){
        console.log(k.name.common);
    }
    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    let twoLakhsPopulatedCountries=data.filter((d)=>{
        return d.population<200000;
    });
    console.log('Countries with less than 2 lakhs population:');
    for(let k of twoLakhsPopulatedCountries){
        console.log(`
        Name:${k.name.common}
        Population: ${k.population}`);
    }

    //c.Print the following details name, capital, flag using forEach function
    console.log('Name, Capital and Flag of All countires:');
    data.forEach((d)=>{
        console.log(`
        Name: ${d.name.common}
        Capital: ${d.capital}
        Flag: ${d.flag}
        `);
    });

    //Print the total population of countries using reduce function
    let totalPopulaton=data.reduce((prev,curr)=>{
        return prev+curr.population;
    },0)

    console.log(`Total population of all countires:${totalPopulaton}`)

    //e.Print the country which uses US Dollars as currency.

    /*since all the countries are not having currencies property,
     not able to use filter directly but written some logic*/

   console.log(`Countries that use US dollars are:`);
    for(let i=0;i<data.length;i++){
        let keys=Object.keys(data[i]); //storing all the properties of eahh object in data 
        for(let m of keys){
            if(m==='currencies'){ //if object is having the currencies property then it will search for USD
            let currency=Object.keys(data[i].currencies);
            for(let k of currency){
                if( k==='USD'){
                    console.log(data[i].name.common)
                }
            }}
        }
    } 
  
}
xhr.send();