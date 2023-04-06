// // const color = require("cli-color");
// // console.log(color.red("hello node js"));
// const auth = require("./auth.js");

// // auth.register("tilak");
// auth.login("tilak", "secret");

// const path = require("path");
// console.log(__filename);

// //dirname
// console.log("folder name:", path.dirname(__filename));

// //filename

// console.log("folder name:", path.basename(__filename));

// //extension
// console.log("ext name:", path.extname(__filename));

// //parse

// console.log("parse", path.parse(__filename));

// //join
// console.log("join:", path.join(__dirname, "order", "app.js"));

//file system
// const path = require("path");

// const fs = require("fs");

// //make a directory

// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log("something went wrong...");
//     return;
//   }
//   console.log("folder is created");
// });

// //create a file
// fs.writeFile(path.join(__dirname, "test", "test.txt"), "hello node", (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.appendFile(
//     path.join(__dirname, "test", "test.txt"),
//     "more data",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("data added");
//     }
//   );
//   console.log("file created successfully...");
// });
//Read file
// const path = require("path");

// const fs = require("fs");
// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const content = Buffer.from(data);

//   console.log(content.toString());
// });

// const path = require("path");

// const fs = require("fs");
// const { log } = require("console");
// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//os module
// const os = require("os");
// // console.log("os type:", os.type());
// // console.log("os platform:", os.platform());
// // console.log("os platform:", os.arch());
// // console.log("os platform:", os.cpus());
// // console.log("free memory:", os.freemem());
// // console.log("total memory:", os.totalmem());
// console.log("uptime:", os.uptime());

// //event modules
// const Emitter = require("events");
// const myEmitter = new Emitter();
// myEmitter.on("somename", (data) => {
//   console.log(data);
// });
// myEmitter.emit("somename", {
//   name: "tilak",
// });
// class Auth extends Emitter {
//   register(username) {
//     console.log("registered successfully...");
//     this.emit("registered", username);
//   }
// }

// const auth = new Auth();
// //verify email
// auth.on("registered", (data) => {
//   console.log(`sending email to ${data}`);
// });
// //welcome email
// auth.on("registered", (data) => {
//   console.log(`sending welcome email to ${data}`);
// });
// auth.register("tilak");
