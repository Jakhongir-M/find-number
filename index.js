alert("siz kiritkan sonlardan eng kattasini topib beramiz!!!");
let firestNumer = +prompt("hohlagan sonni kiriting");
let secondNumer = +prompt("ikkinchi hohlagan sonni kiriting");
let threeNumber = +prompt("uchinchi hohlagan sonni kiriting");

let a = firestNumer;
let s = secondNumer;
let d = threeNumber;

if (a >= s && a >= d) {
  alert(`${a} kotta`);
} else if (s >= a && s >= d) {
  alert(`${s} kotta`);
} else if (d >= a && d >= s) {
  alert(`${d} kotta`);
} else {
  alert("aldama harf kirg'azib qoygansan");
}
// ______________________________________________
alert("Siz kiritadigan sonlardan eng kichikini topib beramiz ");

let q = +prompt("hohlagan sonni kiriting");
let w = +prompt("ikkinchi hohlagan sonni kiriting");
let e = +prompt("uchinchi hohlagan sonni kiriting");

if (q <= w && q <= e) {
  alert(`${q} eng kichigi`);
} else if (w <= q && w <= e) {
  alert(`${w} eng kichigi`);
} else if (e <= q && e <= w) {
  alert(`${e} eng kichikgi`);
} else {
  alert("aldama harf kirg'azib qoygansan");
}

// _____________________________________________
// alert("Siz kiritadigan sonlardan o'rtachasini topib beramiz  ");

// let z = +prompt("hohlagan sonni kiriting");
// let x = +prompt("ikkinchi hohlagan sonni kiriting");
// let c = +prompt("uchinchi hohlagan sonni kiriting");

// if (z < x && z > c) {
//   alert(`${z} o'rtachasi`);
// } else if (x < z && x > c) {
//   alert(`${x} o'rtachasi`);
// } else if (c < z && c > x) {
//   alert(`${c} o'rtachasi`);
// } else {
//   alert("aldama harf kirg'azib qoygansan");
// }
