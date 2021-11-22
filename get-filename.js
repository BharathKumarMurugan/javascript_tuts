const url = "file:///C:/BHARATH/BharathKumarMurugan.pdf";

let filename = url.toString().match(/.*\/(.+?)\./);
let filenameExt = url.toString().split(".").pop().trim();
console.log(filename);
if (filename && filename.length > 1) console.log([filename[1], filenameExt]);
