  navigator.serviceWorker.register('/js/sw.js').then(function(reg) {

    console.log('Service worker successfully registered', reg);
    
    if (reg.waiting) {
      return;
    }

    if (reg.installing) {
      return;
    }

  }, function(err) {
      console.log(err);
});
