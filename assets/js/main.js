/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
	
	//Function.
	function setGuests() {
  var guestId = +window.location.search.substr(4)
  var guests = guestArr[guestId] || guestArr[0]
  var dearEl = document.getElementById('dear')
  var guestEl1 = document.getElementById('guest1')
  var guestEl2 = document.getElementById('guest2')
  var guestEl3 = document.getElementById('guest3')
  var delim1 = document.getElementById('delim1')
  var delim2 = document.getElementById('delim2')
  var you = document.getElementById('you')
  if (guests.names.length > 1) {
    dearEl.textContent  = 'Дорогие'
    you.textContent = 'вас'
    for (var j=0; j < guests.names.length; j++) {
      if (j == 0 && guests.names.length === 1) {
        guestEl1.textContent  = ''
        guestEl2.textContent  = ''
        guestEl3.textContent  = guests.names[j]
      } else if (j == 0 && guests.names.length === 2) {
        guestEl1.textContent  = ''
        guestEl2.textContent  = guests.names[j]
        delim2.textContent  = 'и'
      } else if (j == 0 && guests.names.length === 3) {
        guestEl1.textContent  = guests.names[j]
        delim1.textContent  = ','
      } else if (j === 1 && guests.names.length === 2) {
        guestEl3.textContent  = guests.names[j]
      } else if (j === 1 && guests.names.length === 3) {
        guestEl2.textContent  = guests.names[j]
        delim2.textContent  = 'и'
      } else if (j === 2) {
        guestEl3.textContent  = guests.names[j]
      }
    }
  } else {
    if (guests.names[0] == 'Лера' ||
        guests.names[0] == 'Аня' ||
        guests.names[0] == 'Оля' ||
        guests.names[0] == 'Маша' ||
        guests.names[0] == 'Александра') {
      dearEl.textContent  = 'Дорогая'
      you.textContent = 'тебя'
    } else if (guests.names[0] == 'Вова' ||
               guests.names[0] == 'Коля' ||
               guests.names[0] == 'Максим' ||
               guests.names[0] == 'дедушка Ваня') {
      dearEl.textContent  = 'Дорогой'
      you.textContent = 'тебя'
    } else {
      dearEl.textContent  = 'Дорогие'
      you.textContent = 'вас'
    }
    guestEl1.textContent  = ''
    guestEl2.textContent  = ''
    guestEl3.textContent  = guests.names[0]
  }
}

})(jQuery);
