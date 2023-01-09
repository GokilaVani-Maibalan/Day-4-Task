
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    var results=JSON.parse(request.response);    
    results.forEach(result => {
        console.log(result.flags);
    });
}