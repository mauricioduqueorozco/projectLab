#!/bin/bash
# declare STRING variable
STRING="Starting compiling"
#print variable on a screen
echo $STRING

avr-gcc -Wall -Os -DF_CPU=16000000 -mmcu=atmega2560 -c main.c -o main.o
avr-gcc -Wall -Os -DF_CPU=16000000 -mmcu=atmega2560 -o main.elf main.o
rm -f main.hex
avr-objcopy -j .text -j .data -O ihex main.elf main.hex

