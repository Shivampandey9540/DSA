let promis1= new Promise((resolve, reject)=>{
    setTimeout(resolve,1000, "one")
})
let promis2= new Promise((resolve, reject)=>{
    setTimeout(resolve,2000, "Two")
})
async function prom() {
  try {
    // const value = new Promise.race(s1, s2);
    Promise.race([promis1, promis2]).then((value)=> console.log("value", value));
    // console.log(value);
  } catch (error) {
    console.log(error);
  }
}

prom();
