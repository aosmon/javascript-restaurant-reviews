  navigator.serviceWorker.register('/sw.js').then(function(reg) {

    console.log('Service worker successfully registered', reg);
});
