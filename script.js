function calc() {
  var edge1 = Number(document.getElementById('edge1').value),
   edge2 = Number(document.getElementById('edge2').value);


  let edge1sqr = edge1 * edge1,
  edge2sqr = edge2 * edge2;

  let clc = Math.sqrt(edge1sqr + edge2sqr);
  alert(clc)
}