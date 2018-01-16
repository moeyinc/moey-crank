# moey-crank


## 4 steps to start
1) set up hardware components
- Teensy3.2 (https://www.pjrc.com/teensy/teensy31.html)
- Incremental Rotary Encoder
- micro USB cables, connecting Teensy with computer
- computer with node.js installed

2) wiring and upload firmware
- upload rotary_encoder.ino firmware to Teensy. *This file probably needs to be updated.
- wires into Gorund, 4 and 6 pins

3) configurate server
- open serialport-config.js and edit the port numbers
- you can add another setting block if you use different computer

4) run the server
- run node script to start server
- access localhost:3000
- if you need a handy shortcut, double click MoeyViewer.bat
