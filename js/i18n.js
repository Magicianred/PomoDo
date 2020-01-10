$(function(){
  const i18n = {
    'it': {
      //Navbar and Sidenav
      'habits': 'Abitudini',
      'calendar': 'Calendario',
      //PomoDo
      'objective' : 'Scrivi il tuo obiettivo...', //??? Come si mette il placeholder?
      'changes' : 'I cambiamenti in questa sezione si rifletteranno all\'inizio della prossima sessione di lavoro/pausa.',
      'min-work' : 'Minuti di lavoro',
      'min-break' : 'Minuti di pausa',
      'session' : 'Le tue sessioni',
      //Footer
      'create' : 'Creato da ',
      'design' : 'Design di ',
      'font' : 'Font di ',
    },
    'en': {
      // Navbar and Sidenav
      'habits': 'Habits',
      'calendar': 'Calendar',
      //PomoDo
      'objective' : 'Write there your objective',
      'changes' : 'Changes made here will reflect at the start of the next work/break session.',
      'min-work' : 'Work Duration',
      'min-break' : 'Break Duration',
      'session' : 'Your Sessions',
      //Footer
      'create' : 'Created by ',
      'design' : 'Designed by ',
      'font' : 'Font by ',
    },
  };

  const translate = function(lang){
    let translation = i18n[lang];
    Object.entries(translation).forEach(function(entry){
      document.querySelectorAll('.i18n-' + entry[0]).forEach(function(el){
        el.firstChild.textContent = entry[1].toString();
      });
    });
  };

  (function(){
    let lang = localStorage.getItem('lang');
    if(lang !== null && lang !== 'en' && Object.keys(i18n).includes(lang)){
      translate(lang);
    }
  })();

  $('.translate-btn').on('click', function(e){
    e.preventDefault();
    let lang = $(this).data('lang');
    localStorage.setItem("lang", lang);
    translate(lang);
  })

});
