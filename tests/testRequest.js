const chai = require("chai")
chai("http://www.google.com/", function(err,res,bod) {
  console.log(err)
  console.log(res)
  console.log(bod)
})
