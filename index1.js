$(document).ready(function(){
    $('#tableBody').empty();
    let url = localStorage.getItem('url')
    fetch(url)
    .then((response) =>{
       return response.json();
    })
    .then((myJson) =>{
        console.log(myJson);
        myJson.forEach((ele) =>{
            $('#tableBody').append(`<tr><td>${ele.name}</td><td>${ele.description}</td><td>${ele.language}</td><td>${ele.created_at}</td><td>${ele.updated_at}</td></tr>`);
        })
    })
})