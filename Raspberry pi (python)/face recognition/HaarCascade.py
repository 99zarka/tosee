import cv2

face_cls = cv2.CascadeClassifier('C:\\Users\Youssef Elsheheimy\\Desktop\\Face Detection\haarcascade_frontalface_default.xml')
capture = cv2.VideoCapture("5.mp4")
capture.set(cv2.CAP_PROP_FRAME_WIDTH,  720)
capture.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

Counter = 0
while capture.isOpened():
    ret,frame = capture.read()
    if ret == False:
        break
    grayFrame = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    face = face_cls.detectMultiScale(grayFrame,1.3,4)
    for(x,y,w,h) in face:
        ROI = frame[y:y+h,x:x+w]
        ROI = cv2.resize(ROI,dsize=(512,512))
        print(ROI.shape)
        cv2.imwrite(f'C:\\Users\Youssef Elsheheimy\\Desktop\\Face Detection\\FacePhoto\\image{Counter}.jpg',ROI)
        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,0,255),4)
        Counter += 1
    cv2.imshow('Face',frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
capture.release()
cv2.destroyAllWindows()
        