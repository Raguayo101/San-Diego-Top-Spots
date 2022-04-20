$(document).ready(function () {
    // write your code here
    $.getJSON('data.JSON', data => {
        

        data.forEach(data => {
            $('#table').append('<tr><td>' + data.name + '</td><td>' + data.description +'</td>'+ "<td><a href='https://www.google.com/maps?q=" + data.location + "'>" + 'Link' + "</a>" + '</td></tr>')
        })

     
    })
});
