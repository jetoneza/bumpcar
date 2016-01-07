# Description: This is the main BumpCar script
# 
# Author: jet.oneza <jet.oneza@gmail.com>

from SimpleCV import *

FILES_DIR = '../files/'

video = VirtualCamera(FILES_DIR + 'video_1.mp4', 'video')

display = Display()

while display.isNotDone():
	img = video.getImage()
	img.save(display)
