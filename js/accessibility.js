// Accessibility features

document.addEventListener('DOMContentLoaded', () => {  

/**
 * Disable leaflet links on map
 */

const mapLeafletLinks = document.querySelector('.leaflet-control-attribution').getElementsByTagName('a');

for (var mapLink of mapLeafletLinks){
  mapLink.setAttribute('tabIndex', '-1');
}
    
  
});
  
