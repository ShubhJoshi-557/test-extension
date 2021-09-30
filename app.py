from logging import debug
from flask import Flask, render_template, request
from skimage import io
import cv2 as cv 

app = Flask(__name__)

@app.route("/")
def home():
    dirty_url = request.args.get("img_url")
    clean_url = dirty_url.replace("__monkey__","&")
    image = io.imread(clean_url)
    print(image)
    gray_img = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    gray_img = cv.resize(gray_img,(300,300))
    m,n = gray_img.shape
    im2 = 255 - gray_img
    cv.imwrite(r"C:\Users\shubh\OneDrive\Desktop\test-ext\static\new_img.png", im2)
    print(clean_url)
    return render_template("test_extension_popup.html")

if __name__ == "__main__":
    app.run(debug=True)