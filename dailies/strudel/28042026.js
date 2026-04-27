/***************/
/* FIRST NOTES */
/***************/

//$: note("48 52 <55 54> <90 91>").s("piano")

//$: note("<c1 d1>, e <g f> b a b <f c>").s("piano")

/* Different sounds */
// gm_electric_guitar_muted
// gm_acoustic_bass
// gm_voice_oohs
// gm_xylophone
// gm_blown_bottle
// sawtooth
// square

//$: note("[36 43, <56 65> 54 62 <64 54>]*4").s("sawtooth, piano").lpf(900)
//$: note(" 65 63 67 61").s("gm_voice_oohs")

$: n("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>")
.s("gm_xylophone")

$: n("60 <63 62 65 63>")
.s("gm_xylophone")

$: s("bd*4, [ ~ <sd cp> ]*2, [~ hh]*4")
.bank("RolandTR909")
