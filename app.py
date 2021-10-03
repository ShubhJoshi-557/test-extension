from logging import debug
from flask import Flask, render_template, request
from skimage import io
import cv2 as cv 
import base64

app = Flask(__name__)

@app.route("/")
def home():
    dirty_url = request.args.get("img_url")
    clean_url = dirty_url.replace("__monkey__","&")
    image = io.imread(clean_url)
    gray_img = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    gray_img = cv.resize(gray_img,(300,300))
    m,n = gray_img.shape
    im2 = 255 - gray_img
    cv.imwrite(r'static\socialmedia_img.png',im2)
    print(dirty_url)
    return render_template("test_extension_popup.html")

@app.route("/fullpage-ss/")
def screenshot_fullpage():
    ss_url = request.args.get("img_url")
    print(ss_url)
    return render_template("show_fullpage_ss.html")

if __name__ == "__main__":
    app.run(debug=True)