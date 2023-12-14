// "Waa2"
// @license CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// @by Felix Roos
let bpq_val = "6"
let bpf_val = 400

note(
  "a4 [a3 c3] a3 c3"
  .sub("<7 12 5 12>".slow(2))
  .off(1/4,x=>x.add(7))
  .off(1/8,x=>x.add(120))
)
  .slow(2)
  .clip(sine.range(0.3, 2).slow(28))
  .s("square".fast(3))
  .cutoff(cosine.range(500,4000).slow(16))
  .gain(.5)
  .room(.5)
  .lpa(.125).lpenv(-2).v("8:.125").fanchor(.25).bpf(bpf_val).bpq(bpq_val)
