  navigator.serviceWorker.register('/js/sw.js').then(function(reg) {

    console.log('Service worker successfully registered', reg);
});
