import RPi.GPIO as GPIO
import time

# Set up GPIO pins
joystick_x_pin = 38
joystick_y_pin = 36
joystick_button_pin = 37

GPIO.setmode(GPIO.BOARD)
GPIO.setup(joystick_x_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(joystick_y_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(joystick_button_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)


# Read joystick input
while True:
    x_value = GPIO.input(joystick_x_pin)
    y_value = GPIO.input(joystick_y_pin)
    button_value = GPIO.input(joystick_button_pin)
    
    if not button_value:
        if not x_value and not y_value:
            print("Button was pressed and back and down!")
        elif not x_value:
            print("Button was pressed and back!")
        elif not y_value:
            print("Button was pressed and down!")
        else:
            print("Button was pressed!")
    elif not x_value and not y_value:
        print("Button was back and down!")
    elif not x_value:
        print("Button was back!")
    
    elif not y_value:
        print("Button was down!")
    
    
    #print("Joystick X Value: ", x_value)
    #print("Joystick Y Value: ", y_value)
    #print("Joystick Button Value: ", button_value)
    
    time.sleep(0.2)