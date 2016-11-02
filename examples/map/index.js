var $map = $('#map');

$map.glmap();

$map.on('map.load', function() {
  console.log('map loaded!');
});

