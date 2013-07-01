#include <Dhcp.h>
#include <Dns.h>
#include <Ethernet.h>
#include <EthernetClient.h>
#include <EthernetServer.h>
#include <EthernetUdp.h>
#include <util.h>
#include <SPI.h>

unsigned long currentTime;
String url = "https://2bGTAhSCE5SQv5zFtAKgW4zQvYOGwfAuDOnISgPV:javascript-key=SaD6YMlhfP0E0cGEqUMizpZngYwT9u3A3zZh7Ahh@api.parse.com/1/classes/song/aZBIGOMi8M"


void setup(){ 
  Serial.begin(9600);
  currentTime = millis(); 
  //set up clock
  
}

void loop () { 
  if (millis() - currentTime >= 10000) {
    Serial.print("its been ten seconds.");
    currentTime = millis();
  }
  
} 

String getSong() {
  char server[] 

}
