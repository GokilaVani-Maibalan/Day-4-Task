var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
let countries=[];
request.onload=function(){
    var results=JSON.parse(request.response);    
    console.log(results[0])
    results.forEach(result => {

        // 1st approach using object
        let country={
            "name":result.name.common,
            "population":result.population,
            "region":result.region,
            "subregion":result.subregion
        }
        console.log(country);

        // 2nd approach
        console.log(result.name.common);
        console.log(result.population);
        console.log(result.region);
        console.log(result.subregion);

        
    });
}