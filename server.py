from flask import Flask, request, render_template, url_for, redirect

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="3000")