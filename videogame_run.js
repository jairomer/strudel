//setcpm(60)

// Same length
//$: note("c!2 [eb, <g a bb a>]").sound("piano") 

// Share the same time
//$: note("c*2 [eb, <g a bb a>]").s("piano")

// Single "press" that occupies 2 times
//$: n("c@2 [eb, <g a bb a>]").s("piano")

$: s("bd*2 sd").bank("RolandTR909")//.lpf(900)
$: note("c eb g <d a> ").scale("<C:minor A:major>/4").sound("saw").lpf(1500)

