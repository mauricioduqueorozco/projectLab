#!/bin/sh
echo 'Programming the shield -> .hex file.'
echo $1
avrdude -patmega2560 -cstk500v2 -P/dev/ttyACM0 -v -v avrdude.conf -Uflash:w:$1:a 
#python
node
echo 'Finished process'
