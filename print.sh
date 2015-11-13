#!/bin/sh
# generate the capture on backend
wget -O /dev/null http://localhost:9911/cap # this URL should be kept secret

# delete cache
rm -f capture.png

# get the new capture
wget http://localhost:9911/capture.png

# sky.py wils use this and print
#python sky.py
