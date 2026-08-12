document.addEventListener('DOMContentLoaded', function () {
  // Mission archive: duplicate gallery track for seamless infinite scroll
  var track = document.getElementById('galleryTrack');
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  // Ticker: duplicate for seamless infinite scroll
  var ticker = document.getElementById('tickerTrack');
  if (ticker) {
    ticker.innerHTML += ticker.innerHTML;
  }

  // Flight manual: FAQ accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    var arrow = item.querySelector('.arrow');

    question.addEventListener('click', function () {
      var isOpen = answer.classList.contains('show');

      faqItems.forEach(function (otherItem) {
        otherItem.querySelector('.faq-answer').classList.remove('show');
        otherItem.querySelector('.arrow').classList.remove('down');
      });

      if (!isOpen) {
        answer.classList.add('show');
        arrow.classList.add('down');
      }
    });
  });

  // HUD altitude indicator: scroll progress
  var progress = document.getElementById('scanProgress');
  function updateProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Scroll reveal: fade + rise elements into view as the user scrolls
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Section nav: highlight the dot matching the section in view
  var navDots = document.querySelectorAll('.section-nav__dot');
  var trackedSections = [];
  navDots.forEach(function (dot) {
    var section = document.getElementById(dot.dataset.target);
    if (section) trackedSections.push({ dot: dot, section: section });
  });

  if (trackedSections.length && 'IntersectionObserver' in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = trackedSections.find(function (t) { return t.section === entry.target; });
        if (!match) return;
        if (entry.isIntersecting) {
          navDots.forEach(function (d) { d.classList.remove('active'); });
          match.dot.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    trackedSections.forEach(function (t) { navIo.observe(t.section); });
  }
});
