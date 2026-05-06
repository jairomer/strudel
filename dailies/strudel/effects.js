// "I wanna go to Festival" @by Chicca
// "follow me on TikTok: Calmed.Chicca"
setcpm(60)
/*
$: note("[c2 ~ c3]/3 [c2 c3 c2]/5 [c3 ~ c2]/7")
   .sound("sawtooth")
   .cutoff(sine.range(10, 1000).fast("[3 5 7]/4"))
   .delay("[0.125 0.25 0.375]/3")
   .delayfeedback(0.6)
   .room(0.4)

$: s("[bd*2 hh*2]!2").bank("RolandTR909").lpf(700)
*/
/* Basic Effects */

// lpf - low pass filter
// cutoff - kind of similar to lpf
// vowel - Make it sound through a phonetic vowel

//$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4> [eb2 eb3]*4")
//  .sound("sawtooth")
  //.lpf(sine.range(400, 800).fast("1"))
  //.lpf(800)
  //.lpf("200 1000 200 1000")
  //.cutoff(800)
//  .vowel("<a e i o u>")

//$: sound("hh*16").gain("[.26 1]*4")

//$: sound("bd*4, [~ sd:1]*2")

//$: note("<[c3, g3, b3] [bb2, f3, d4] [a2, f4, g2] [ab2, f3, g4]>")
//   .sound("sawtooth")
   //.lpf(600)
   //.attack(.5)   // Time it takes to fade in
   //.decay(.5)    // Time it takes to fade to sustain
   //.sustain(.7) // Level after decay
   //.release(0.25)   // TIme it takes to fade out after note is finished
//   .adsr(".1:.1:.5:.2")
//   .vowel("<a e i o u>")

//$: note("[~ [<[<d3, a3, f4>]!2 [d3,bb3,g4]!2> ~ ]]*2")
//   .sound("gm_electric_guitar_muted")
//   .delay(.5)

//$: note("[~ [<[<d3, a3, f4>]!2 [d3, bb3, g4]!2 > ~ ]]*2")
//  .sound("gm_electric_guitar_muted")
//  .delay(.5)

/*
delay(a,b,c)
- a: delay volume
- b: delay time
- c: feedback (smaller number, quicker fade)
*/
//$: sound("bd rim").bank("RolandTR707").delay(".8:.125:.6")

// room aka reverb

/*
$: note("<4 [3@3 4] [<2 0> ~@16] ~>")
.scale("D4:minor").sound("gm_accordion:2")
.room("2")
.delay(".3")
.gain(".5")

$: sound("bd rim").bank("RolandTR707").delay(".2")

$: note("[ ~ [<[d3, a3, f4]!2 [d3, bb3, g4]!2>] ~ ]*2")
.sound("gm_electric_guitar_muted")

$: note("[ 0 [~ 0] 4 [3 2] [0 ~] [0 ~] <0 2> ~]/2")
.scale("D2:minor")
.sound("sawtooth,triangle")
.lpf("800")//.hush()
*/

// This controls the stereo
//$: sound("[numbers:1 numbers:2 numbers:3 numbers:4]/4")
  //.speed("[<1 2 3 4>]")
//.pan("0 0.3 .6 1")

// Sounds can also be reversed using negative numbers with speed()
//$: sound("bd rim [~bd] rim").speed("<1 2 -1 -2>").room(.2)

//$: sound("bd*4, ~ rim ~ cp")
//  .fast("<1 [2 2]>")
  //.slow(2)

/* Modulation with signals */
// We can control the values with signals

//$: sound("hh*16")
  //.gain(sine)
  //.gain(raw)
  //.gain(saw)
  //.gain(square)
  //.gain(tri)
  //.gain(rand)
  //.gain(perlin)

// We can also change the modulation speed with slow/fast
//$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
//  .sound("sawtooth")
//  .lpf(sine.range(100, 2000).slow(4)) // Take 8 cycles
