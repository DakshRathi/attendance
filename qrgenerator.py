import pyqrcode

qr = pyqrcode.QRCode(
    version=1,
    error_correction=pyqrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data('attendance-url')
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("attendance-qr.png")
