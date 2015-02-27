var userListData = [];

$(document).ready(function(){
  populateUsers();

  $('#loginForm').submit(function(event){
    event.preventDefault();
    console.log(event);
  })
})

function populateUsers() {
  var tableContent = '';

  $.getJSON('/users/userlist', function(data) {
    userListData = data;
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td>' + this.username + '</td>';
      tableContent += '</tr>';
    });
    $('#userlist table tbody').html(tableContent);
  });
}
