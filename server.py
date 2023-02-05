from flask import Flask, jsonify, request, render_template, url_for, redirect

app = Flask(__name__)

@app.route("/", methods=['POST'])
def parseSearch():
    data = request.get_json()
    print(data)
    return jsonify({"lat": 30, "lng": 27})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port="3000")