count=0
import RPi.GPIO as GPIO # Import Raspberry Pi GPIO library
from picamera2 import Picamera2, Preview
import pytesseract
from PIL import Image
from gtts import gTTS  
from gtts import gTTS  
from pydub import AudioSegment
from pydub.playback import play
import time
import os


picam2 = Picamera2()
camera_config = picam2.create_preview_configuration()
picam2.configure(camera_config)
picam2.start_preview(Preview.QTGL)
picam2.start()


def ocr_image(name):
    img =Image.open (name)
    return pytesseract.image_to_string(img, config='')

def button_callback(channel):
    global count
    count+=1
    print("Button was pushed!",count)
    picam2.capture_file("pic3.jpg")
    text_val=ocr_image("pic3.jpg")
    print(text_val)
    
    try:
        language = 'en'
        obj = gTTS(text=text_val, lang=language, slow=False)
        obj.save("test.mp3")  
        mp3File = 'test.mp3'
        music = AudioSegment.from_mp3(mp3File)
        print("Playing mp3 file...")
        play(music)
    except:
        os.system(f'pico2wave -w=test.wav "{text_val}"')
        os.system("aplay test.wav")
    
    time.sleep(2)
    print('done')
    
GPIO.setwarnings(False) # Ignore warning for now
GPIO.setmode(GPIO.BOARD) # Use physical pin numbering
GPIO.setup(36, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) # Set pin 10 to be an input pin and set initial value to be pulled low (off)
GPIO.add_event_detect(36,GPIO.RISING,callback=button_callback) # Setup event on pin 10 rising edge
message = input("Press enter to quit\n\n") # Run until someone presses enter
GPIO.cleanup() # Clean up

