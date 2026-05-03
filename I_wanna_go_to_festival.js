// "I wanna go to Festival" @by Chicca
// "follow me on TikTok: Calmed.Chicca"
setcpm(60)
note("[c2 ~ c3]/3 [c2 c3 c2]/5 [c3 ~ c2]/7")
   .sound("sawtooth")
   .cutoff(sine.range(10, 1000).fast("[3 5 7]/4"))
   .delay("[0.125 0.25 0.375]/3")
   .delayfeedback(0.6)
   .room(0.4)
