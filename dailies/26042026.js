/******************/
/*   BASIC BEATS  */
/******************/

/* BASIC ROCK */
// $: sound("[bd sd]*2, hh*8").bank("RolandTR909")

/* CLASSIC HOUSE */
// $: sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")

/* We will rock you */
//setcpm(81/2);
//$: sound("bd*2 cp").bank("RolandTR909")

/* Yellow Magic Orchstra - Firecracker */
// setcpm(120/2)
//$: sound("bd sd, - - - hh - hh - -, - perc - perc:1*2").bank("RolandCompurhythm1000")

/* 16 STEP SEQUENCER */
// These are useful for premade compositions
/*
setcpm(90/4)
$: sound(`
[- - oh -] [- - - - ] [ insect - - - ] [- - - -],
[hh hh - -] [hh - hh -] [hh - hh -] [hh - hh -],
[- - - -] [cp - - -] [crow - - -] [cp - - -],
[bd - - -] [- - - bd] [- - bd -] [bd - - bd]
`)
*/

/*
setcpm(88/4)
$: sound(`
[hh hh hh hh] [hh hh hh hh] [hh hh hh hh] [hh hh - -],
[bd bd:2 - -] [- - bd -] [bd bd - bd] [ - rd - - ],
[ lt:3 - - - ] [ lt lt - - ] [ - lt - lt:1 ] [ - - oh:1 - ],
[ - - sd sd ] [ cp - - sd:2 ] [ - sd:3 cp - ] [ - cp - - ]  
`).bank("RolandTR808")
*/)
