/**********/
/* SCALES */
/**********/

/*
setcpm(60)
$: n("0 2 4 <[6,8] [7,9]>")
  .scale("C:minor")    // Sad, Dramatic
  //.scale("A2:minor")   // Hopeful
  //.scale("D:dorian")   // Happier
  //.scale("G:mixolydian") // Lighter
  //.scale("A2:minor:pentatonic") 
  //.scale("F:major:pentatonic")
  .sound("piano")
*/
//$: n("[22*2 20 19 18*2 <16 20>]/3").scale("C:minor").s("piano")

/* With a single pattern, you get multiple different sounds*/
/*
$: n("<0 -3>, 2 4 <[6,8] [7,9]>")
.scale("<C:major D:mixolydian>/4")
.s("piano")
*/

// Elongate
//$: n("c@3 eb").sound("gm_acoustic_bass")

setcpm(60)
$: n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
  .scale("<C2:mixolydian F2:mixolydian>")
  .s("gm_acoustic_bass")

$: s("bd*2, [ ~ <sd cp> ], [ ~ hh ]*2 ").bank("RolandTR909")


// Same length
//$: note("c!2 [eb, <g a bb a>]").sound("piano")

// Share the same time
//$: note("c*2 [eb, <g a bb a>]").s("piano")

// Single "press" that occupies 2 times
//$: n("c@2 [eb, <g a bb a>]").s("piano")

