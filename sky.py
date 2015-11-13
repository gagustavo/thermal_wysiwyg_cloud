from Adafruit_Thermal import *
from PIL import Image

printer = Adafruit_Thermal("/dev/ttyAMA0", 19200, timeout=5)
img = Image.open('capture.png')

printer.printImage(img, True)
printer.feed(4)

# It's that simple!
