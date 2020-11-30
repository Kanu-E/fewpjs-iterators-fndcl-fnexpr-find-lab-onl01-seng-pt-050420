const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
   let x = record.find(s => {return s.result === "W"})
  return x ? x.year : undefined
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]




console.log(superbowlWin(record))
