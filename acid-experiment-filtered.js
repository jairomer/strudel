// @title Squelchy acid experiment @by B:EEP
setcps(172/4/60)
stack(
  note("<d1 g1 a1 d2 g2 a2 d3 g3 a3 g3 d3 a2 g2 d2 a1 g1>*16").sound("triangle, sawtooth")
  .lpf("500 750 1000 1250 1500 1750 2000 2250 2500 2250 2000 1750 1500 1250 1000 750")
  .bpf("<1000 2000 4000 8000>")
  .adsr("0.01:0.1:0.1:0.1")
  .room(0.5)
  .echo(3,0.5,0.5)
  .jux(rev).bpf(50)
)
