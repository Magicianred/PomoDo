function getSeason(d) {
  d = d || new Date();
  var mon = d.getMonth() + 1;
  var day = d.getDate();
  var seasons = ['summer','fall','winter','spring', 'christmas'];

  //Winter
  if (mon >= 1 && mon <= 2) {
    return 'winter';
  }

  //Spring
  else if (mon >= 2 && mon <= 6) {
    return 'spring';
  }

  //Summer
  else if (mon >= 6 && mon <= 8) {
    return 'summer';
  }


  //Fall
  else if (mon >= 9 && mon <= 11) {
    return 'fall';
  }

  //Winter+Christmas
  else if (mon == 12) {
    if (day >= 1 && day <= 7) {
      return 'winter';
    }
    else if (day >= 8 && day <= 31) {
      return 'christmas';
    }
  }

  mon = Math.floor((mon % 12) / 3);
  return seasons[mon];
}

document.body.classList.add(getSeason())
