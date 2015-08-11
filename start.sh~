#!/bin/bash
# declare STRING variable
STRING="Starting compiling"
#print variable on a screen
echo $STRING

avr-gcc -Wall -Os -DF_CPU=8000000 -mmcu=atmega8 -c main.c -o main.o
avr-gcc -Wall -Os -DF_CPU=8000000 -mmcu=atmega8 -o main.elf main.o
rm -f main.hex
avr-objcopy -j .text -j .data -O ihex main.elf main.hex

