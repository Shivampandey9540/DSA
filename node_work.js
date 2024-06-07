
// function getSong() {
//     let _song = '';
//     let i = 100;
//     for (i; i > 0; i -= 1) {
//       _song += `${i} beers on the wall, you take one down and pass it around, ${
//         i - 1
//       } bottles of beer on the wall\n`;
//       if (i === 1) {
//         _song += "Hey let's get some more beer";
//       }
//     }

//     return _song;
//   }

//   function singSong(_song) {
//     if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
//     console.log(_song);
//   }

//   const song = getSong();
//   // this will work
//   singSong(song);

// function getSong() {
//     let _song = '';
//     let i = 100;
//     for (i; i > 0; i -= 1) {
//       /* eslint-disable no-loop-func */
//       setTimeout(function () {
//         _song += `${i} beers on the wall, you take one down and pass it around, ${
//           i - 1
//         } bottles of beer on the wall\n`;
//         if (i === 1) {
//           _song += "Hey let's get some more beer";
//         }
//       }, 0);
//       /* eslint-enable no-loop-func */
//     }

//     return _song;
//   }

//   function singSong(_song) {
//     if (!_song) throw new Error("song is '' empty, FEED ME A SONG!");
//     console.log(_song);
//   }

//   const song = getSong('beer');
//   // this will not work
//   singSong(song);
// Uncaught Error: song is '' empty, FEED ME A SONG!

//   // operations defined elsewhere and ready to execute
// const operations = [
//     { func: function1, args: args1 },
//     { func: function2, args: args2 },
//     { func: function3, args: args3 },
//   ];

//   function executeFunctionWithArgs(operation, callback) {
//     // executes function
//     const { args, func } = operation;
//     func(args, callback);
//   }

//   function serialProcedure(operation) {
//     if (!operation) process.exit(0); // finished
//     executeFunctionWithArgs(operation, function (result) {
//       // continue AFTER callback
//       serialProcedure(operations.shift());
//     });
//   }

//   serialProcedure(operations.shift());



const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');
const events  = require("node:events")

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {

    console.log(`worker ${worker.process.pid} died, ${signal}${code}`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    events.EventEmitter()
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}