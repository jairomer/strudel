/******************
* PATTERN EFFECTS *
*******************/
// Functions that are more unique to tidal.

//$: n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz")
  //.rev()
  //.jux(rev)

//$: note("c2, eb3 g3 [bb3 c4]").sound("piano").slow("0.5,1,1.5")

// ADDITION
// Increases or decreases the notes on the scale.
//setcpm(60)
//$: note("c2 [eb3,g3]".add("<0 <1 -1>>").add("0,7"))
//   .adsr("[.1 .05]:.2:[1 0.1]")
//   .sound("gm_acoustic_bass")
//   .room(.5)

//$: n("0 1 [2 3] 2").sound("jazz").jux(rev)

// "ply(n)" Will be used to multiply the whole thing by n
// Useful for general speedups
//$: sound("hh hh, bd rim [~cp] rim").bank("RolandTR707").lpf(500).ply(2)

// "off(ratio, effect)"
// By every "ratio", apply "effect"
//$: n("0 [4 <3 2>] <2 3> [~ 1]"
//     .off(1/16, x=>x.add(4))
//    )
//    .scale("<C5:minor Db5:mixolydian>/2")
//    .s("triangle")
//    .room(.5)
//    .dec(.1)

// Can also be used to modify sounds and can be nested.
//$: s("bd sd [rim bd] sd, [~ hh]*4")
//  .bank("CasioRZ1")
//  .off(2/16, x=>x.speed(1.5).gain(.25).off(3/16, y=>y.vowel("<a e i o>*8")))

// SUMMARY

// Reverse
// $: n("0 2 4 6 ~ 7 9 5").scale("C:minor").rev()

// Jux
// $: n("0 2 4 6 ~ 7 9 5").scale("C:minor").jux(rev)

// Add
// $: n("0 2 4 6 ~ 7 9 5".add("<0 1 2 1>")).scale("D:minor")

// Ply
//$: sound("bd sd [~ bd] sd").ply("<1 2 3>")

// Off
//$: sound("bd sd [~ bd] sd, hh*8").off(1/16, x=>x.speed(10))
