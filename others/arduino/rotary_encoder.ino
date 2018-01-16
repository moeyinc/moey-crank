/*****************************************************************************/
// eSyringe sketch
// © 2015 Glen Duncan playaspec@gmail.com
// For Moey Inc.
//
// Based on:
// Encoder Library Example
// http://www.pjrc.com/teensy/td_libs_Encoder.html
//
// and Teensy USB joystick example
// You must select Joystick from the "Tools > USB Type" menu


#include <Encoder.h>

// Change these pin numbers to the pins connected to your encoder.
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder plunger(2,3);


void setup() {
  Serial.begin(115200);
//  Serial.println("Quadrature DE-coder Test:");
  pinMode(13,OUTPUT);
}

long plungerPosition  = 999;

void loop() {
  long NewPlungerPosition;
  NewPlungerPosition = plunger.read();
  if (NewPlungerPosition <= 0) {plunger.write(0);}
  if (NewPlungerPosition != plungerPosition ) {
    Joystick.X(NewPlungerPosition);
    Serial.print("Plunger = ");
    Serial.print(NewPlungerPosition);
    Serial.println();
    plungerPosition = NewPlungerPosition;
    if (digitalRead(2) && digitalRead(3)) {
      digitalWrite(13,HIGH);
    } else {
      digitalWrite(13,LOW);
    }
  }
  // if a character is sent from the serial monitor,
  // reset back to zero.
  if (Serial.available()) {
    Serial.read();
    Serial.println("Reset knob to zero");
    plunger.write(0);
  }
}
