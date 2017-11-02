//TODO INCORPORATE REACT SOMEHOW

const fetch = require('node-fetch');

function loadUser(username)
{
    //	Send	data	to	remote	service
    fetch("localhost:5000/users/:"+username)
        .then(function(res)
        {
            document.getElementById("username").innerHTML
        })
        .catch(function(res){});
}