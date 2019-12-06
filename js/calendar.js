document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'rrule' ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    defaultDate: '2019-08-12',
    editable: true,
    events: [
      {
        title: 'rrule event',
        rrule: {
          dtstart: '2019-08-09T13:00:00',
          // until: '2019-08-01',
          freq: 'weekly'
        },
        duration: '02:00'
      }
    ],
    eventClick: function(arg) {
      if (confirm('delete event?')) {
        arg.event.remove()
      }
    }
  });

  calendar.render();
});
