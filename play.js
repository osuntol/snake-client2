const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
conn.on('data', (data) => {
  console.log('data:', data)
})
conn.on('timeout', () => {
  console.log('you ded cuz you idled');
})
 
  conn.setEncoding("utf8");

  return conn;
};



console.log("Connecting ...");
connect();