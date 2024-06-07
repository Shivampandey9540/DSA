// import fs from "fs"
const { rejects } = require("assert");
let fs = require("fs");
const { resolve } = require("path");
async function first() {
  try {
    // setTimeout(() => {
    fs.promises.readFile("question.js", "utf-8");
    // Promise.resolve("resolved")
    // }, 5000)
  } catch (error) {
    throw new Error(error);
  }
  // let ans = await fs.promises.readFile("./question.js", 'utf8')
  // console.log(ans)
}
async function second() {
  try {
    let promiseReturn = await new Promise((resolve, rejects) => {
      if (rejects) {
        rejects("someThing Went wrong");
      }
      console.log("hello");
      return 10;
    });
  } catch (error) {
    // console.log(error);
    throw new error;
  }
}
second();

async function main() {
  try {
    Promise.race([first(), second()]);
  } catch (error) {
    console.log(error);
  }
}
// main();
