const net = require("net");
const {IP, PORT } = require('./constants')

//funtion that allows file to connect to server

const connect = function () {
  const conn = net.createConnection({
    host : IP,
    port : PORT
  });
  conn.on('connect', () => {
   console.log('Success connecting');
   conn.write('Name: RO');
  })
conn.on('data', (data) => {
  console.log('data:', data);
})
conn.on('timeout', () => {
  console.log('you ded cuz you idled');
})
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
}
