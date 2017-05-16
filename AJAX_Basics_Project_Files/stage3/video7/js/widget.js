$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

  $.getJSON('../data/rooms.json', function (response) {
    var roomsHTML = '<ul class="rooms">';

    $.each(response, function (index, room) {
      if (room.available === true) {
        roomsHTML += '<li class="empty">';
      } else {
        roomsHTML += '<li class="full">';
      }
      roomsHTML += room.room + '</li>';
    }); // end each loop

    roomsHTML += '</ul>';
    $('#roomList').html(roomsHTML);
  }); // end getJSON
}); // end ready
