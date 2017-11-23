var osc = require('osc')
// Create an osc.js UDP Port listening on port 57121.
var udpPort = new osc.UDPPort({
    localAddress: "127.0.0.1",
    localPort: 7250,
    metadata: true
});

// Listen for incoming OSC bundles.
udpPort.on("message", function (oscBundle, info) {
    console.log(" MESSAGE : ", oscBundle);
	console.log(oscBundle.address);
    console.log(oscBundle.args[0].type);
	console.log(oscBundle.args[0].value);
	console.log('===========================');
    //console.log("Remote info is: ", info);
});

// Open the socket.
udpPort.open();