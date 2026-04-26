setcpm(90/4)

//$: sound(" [mt*60 ht*60]*1.5 [ bd*40 bd*50 ] < mt*40 lt*30> ")

// $: note("c e g b").sound("space:1")

$: sound(
  `bd*2, - cp,
  - - - oh, hh*4,
  [ < - casio > casio]*4
  `
)

$: n("0 1 4 2 0 6 3 2").sound("jazz")
