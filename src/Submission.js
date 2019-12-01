const fs = require('fs');
const ws = fs.createReadStream("out.csv");

fs.createReadStream('Data.csv')
  .pipe(csv.parse({ headers: true }))
  .on('data', row => console.log(row))


// The purpose of this script is to incorporate the submission system

// #region Class
class problemArea{
    constructor(summary, priority, location, idNum) {
        this.summary = summary;
        this.priority = level;
        this.location = location;
        this.id = idNum;
    }
}
// #endregion

// #region Functions

//purpose: 
//function is to consume input information about the issue and create
function submitPA(summary,priority, location, idNum) {
    var newPA = new problemArea(summary, priority, location, idNum);
    fs.appendFile('Data.csv',csv,)
}
// #endregion 



