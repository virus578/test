// async function xx() {
//   let p1 = await new Promise((succ, fail) => {
//     setTimeout(() => {
//       console.log(2342342)
//     }, 1000)
//   });
//   console.log(p1);
//   console.log(11111111111);
// }
// xx();
async function xx() {
  let p1 = new Promise((succ, fail) => {
    setTimeout(() => {
      succ(2222222222222);
    }, 1000)
  });

  let p2 = await p1;
  console.log(p2);
  console.log(11111111111);
}
xx();