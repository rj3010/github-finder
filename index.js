
$(document).ready(function(){
    $('#btn').click(function(e){
       e.preventDefault();
       $('#tBody').empty();
       var userId = $('#search').val();
       $('#search').val('');
       var url ='https://api.github.com/search/users?q=';
       var search = url + userId; 
       fetch(search)
       .then((response) => {
           return response.json();
       })
       .then((myJson) => {
           myJson.items.forEach((ele) => {
               $('#tBody').append(`<tr><td>${ele.id}</td><td>${ele.login}</td><td>${ele.score}</td><td><button class="btn btn-primary getLink" value="${ele.repos_url}">Show Repos</button></td><td><img height="140px" width="130px" class="justify-content-center" src="${ele.avatar_url}" alt="user's image"></img></td></tr>`);
           })
       })
    })
})
$(document).on('click', '.getLink',function(event){
    event.preventDefault();
    var urlRepos = event.target.value;
    var getUrl = localStorage.getItem('url');
    if(getUrl == null){
        localStorage.setItem('url',urlRepos);
    }else{
        localStorage.removeItem('url');
        localStorage.setItem('url',urlRepos);
    }
    window.location.href = 'user_repo.html';
})
    