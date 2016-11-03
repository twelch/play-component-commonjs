var $map = $('#map-panel');

$map.glmap();

$map.on('map.load', function() {
  console.log('map loaded!');
});

