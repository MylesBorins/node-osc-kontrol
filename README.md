node-osc-kontrol
================

Node, Sockets, OSC, Kontrol.  Cool!

This is a quick and dirty example of using Node.js to create a browser based OSC-controller

Node.js is used as as server, specifically relying on the express library to simplify routing.  
Node-osc is used to create an Open Sound Control client to send messages on a local network.
Socket.IO is used to create a web socket and send messages between the client and server.

On the front end is twitter bootstrp used for a simple grid based responsive design...
there are a number of other framework I am interestd in exploring for this purpose, 
bourbon neat seems like it could be fun. http://thoughtbot.com/neat/

This of course is also relying on jquery and jquery mobile.

Then I am also using a jquery extension called Kontrol https://github.com/aterrien/jQuery-Kontrol
This is to create all the UI elements...

Included in here you will also find a pd patch.  This is preconfigured to listen to the osc messages
being sent by node.js.  This is done using a simple API... this could be an interesting idea to expand upon.

To get starting you need to obviously have node.js and npm installed
http://nodejs.org/download/

To get this running on the beagle I needed to install install libavahi-compat-libdnssd-dev to get mdns working