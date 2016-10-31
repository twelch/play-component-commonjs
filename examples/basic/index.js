$('#plug2-test1').plug2();
var p2t3 = new dots.plug2(
  document.getElementById('plug2-test2'), 
  { 'message': 'plug2 direct invoke with message override!' }
).init();

$('#plug2-test3').plug2();
$('#plug2-test4').plug2();
dots.plug2.defaults.message = 'plug2 direct invoke with static default override!';    
var p2t4 = new dots.plug2(document.getElementById('plug2-test4')).init();

$('#plug3-test1').plug3();
var p3t2 = new dots.plug3(document.getElementById('plug3-test2'), { 'message': 'plug3 direct invoke with message override!' }).init();

$('#plug3-test3').plug3({ 'message': 'plug3 with custom options passed' });
$('#plug3-test4').plug3({ 'message': 'plug3 test4 with custom options passed' });
$('#plug3-test4').plug3({ 'message': 'plug3 test4 with new custom options passed' });

$('#plug4-test1').plug4();
var p4t2 = dots.plug4(document.getElementById('plug4-test2'), { 'message': 'plug4 direct invoke with message override!' });

$('#plug4-test3').plug4();
$('#plug4-test4').plug4({ 'message': 'plug4 test3 before update!' });
$('#plug4-test4').plug4({ 'message': 'plug4 test3 after update!' });

$('#plug5-test1').plug5();
