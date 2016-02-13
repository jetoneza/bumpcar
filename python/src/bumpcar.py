# Description: This is the main BumpCar script
# 
# Author: jet.oneza <jet.oneza@gmail.com>

from SimpleCV import *
from OpenCV import *

FILES_DIR = '../files/'

video = VirtualCamera(FILES_DIR + 'video_1.mp4', 'video')

disp = Display()

while disp.isNotDone():
    # show output of sobel operator
    img = video.getImage().sobel().binarize(15).invert()
    img.save(disp)

    if disp.lastLeftButton:
        break
