const pg = require("pg");

const conString =
  "postgres://qjodsnxt:x_9_p2BujkCZ2E95Hv498JE625wGgyFM@otto.db.elephantsql.com:5432/qjodsnxt"; //Can be found in the Details page

const client = new pg.Client(conString);

// client.connect(function (err) {
//   if (err) {
//     return console.error("could not connect to postgres", err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].theTime);
//     client.end();
//   });
// });

client.connect().catch((e) => {
  console.log("Error conncecting to Elephant sql with error: " + e);
});

module.exports = client;
