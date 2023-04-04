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

buffer=['']*12

def are_all_elements_equal(my_list):
    for i in range(len(my_list)-1):
        if my_list[i]!=my_list[i+1]:
            return False
    return True

# Read joystick input
while True:
    x_value = GPIO.input(joystick_x_pin)
    y_value = GPIO.input(joystick_y_pin)
    button_value = GPIO.input(joystick_button_pin)
    
    state=""
    
    if not button_value:
        state="pressed"
    elif not x_value and not y_value:
        state="back and down"
    elif not x_value:
        state="back"
    elif not y_value:
        state="down"
        
    buffer.append(state)
    oldest_state = buffer[0]
    del buffer[0]
    print(buffer)
    if are_all_elements_equal(buffer[-3:-1]) and buffer[-1] != buffer[-2] and buffer[-2] and not are_all_elements_equal(buffer[:-1]):
        print()
        print("short click detected:",buffer[-2])
        print()

    if are_all_elements_equal(buffer) and state and oldest_state != state:
        print()
        print("long click detected:",state)
        print()
        #buffer=['']*12

    
    
    #print("Joystick X Value: ", x_value)
    #print("Joystick Y Value: ", y_value)
    #print("Joystick Button Value: ", button_value)
    
    time.sleep(0.1)
