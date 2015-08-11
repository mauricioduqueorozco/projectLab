
## This shell script does what the Arduino logfile does, and is just a PoC.
## You may need to specify paths for the AVR build commands like avr-gcc etc.
## You probably have them in your Arduino install under /hardware/tools/avr/bin/
##   and the same thing with the core code files directory. 
## This is intended more as a demo than a workable tool.
## The Makefile stands a better chance of working for you.

## Complete clean start: rebuild cpp file from ino

##./cleanup.sh ## May be if you prefer clean

echo Prepare to sketch 
cp ./Sketch/sketch.ino ./

echo Start Process to Compile 
echo "#include \"Arduino.h\"" | cat > sketch.cpp
echo "void setup();" | cat >> sketch.cpp
echo "void loop();" | cat >> sketch.cpp
cat sketch.ino >> sketch.cpp


echo Copy all core code files over:
CORE='./hardware/arduino'
VARIANT='./hardware/mega'
cp ${CORE}/* .
cp ${VARIANT}/pins_arduino.h .

echo Compile core files:
date
for f in *.cpp 
do avr-g++ -c -g -Os -w -fno-exceptions -ffunction-sections -fdata-sections -fno-threadsafe-statics -MMD -mmcu=atmega2560 -DF_CPU=16000000L -DARDUINO=10604 -DARDUINO_AVR_UNO -DARDUINO_ARCH_AVR  -I. $f -o $f.o
done

for f in *.c
do avr-gcc -c -g -Os -w -ffunction-sections -fdata-sections -MMD -mmcu=atmega2560 -DF_CPU=16000000L -DARDUINO=10604 -DARDUINO_AVR_UNO -DARDUINO_ARCH_AVR  -I. $f -o $f.o
done

echo "Add all object files into core.a, creating library"
for f in *.o
	do avr-ar rcs core.a $f
done

echo Compile our code, link it in to the core library
avr-gcc -w -Os -Wl,--gc-sections -mmcu=atmega2560 -o sketch.cpp.elf sketch.cpp.o core.a -L. -lm 

echo "Add in eeprom if needed (not for sketch)"
avr-objcopy -O ihex -j .eeprom --set-section-flags=.eeprom=alloc,load --no-change-warnings --change-section-lma .eeprom=0 sketch.cpp.elf sketch.cpp.eep 

echo Convert elf to hex for avrdude
avr-objcopy -O ihex -R .eeprom sketch.cpp.elf sketch.cpp.hex 

echo Flash it
#avrdude -qq -p atmega2560 -c arduino -P /dev/ttyACM0 -b 115200 -D -U sketch.cpp.hex
avrdude -patmega2560 -cstk500v2 -P/dev/ttyACM0 -v -v avrdude.conf -Uflash:w:sketch.cpp.hex:a 
echo Done


