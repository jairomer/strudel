stack(
  // drums
  s("bd,[~ <sd!3 sd(3,4,2)>],hh*8")
  .speed(perlin.range(.8,.9)), // random sample speed variation
  // bassline
  "<a1 b1*2 a1(3,8) e2>" 
  .off(1/8,x=>x.add(12).degradeBy(.5)) // random octave jumps
  .add(perlin.range(0,.5)) // random pitch variation
  .superimpose(add(.05)) // add second, slightly detuned voice
  .note() // wrap in "note"
  .decay(.15).sustain(0) // make each note of equal length
  .s('sawtooth') // waveform
  .gain(.4) // turn down
  .cutoff(sine.slow(7).range(300,5000)), // automate cutoff
  // chords
  "<Am7!3 <Em7 E7b13 Em7 Ebm7b5>>".voicings('lefthand') 
  .superimpose(x=>x.add(.04)) // add second, slightly detuned voice
  .add(perlin.range(0,.5)) // random pitch variation
  .note() // wrap in "note"
  .s('sawtooth') // waveform
  .gain(.16) // turn down
  .cutoff(500) // fixed cutoff
  .attack(1) // slowly fade in
)
.slow(3/2)
