import cv2
from pyzbar.pyzbar import decode

def read_qr_code():
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        if not ret:
            continue
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        decoded = decode(gray)
        if decoded:
            cap.release()
            return decoded[0].data.decode('utf-8')
        cv2.imshow('frame', gray)
        if cv2.waitKey(1) == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
