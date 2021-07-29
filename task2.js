console.log("-----------TASK 2-----------");

let qTeams = { aaiec: 400, aaiwc: 60, qai: 200, poc: 100, gtm: 50, hr: 10 };

console.log("Names of teams in ascending order");
keysSorted = Object.keys(qTeams).sort(function (a, b) {
  return qTeams[b] - qTeams[a];
});
console.log(keysSorted);

console.log("---------------------------");
