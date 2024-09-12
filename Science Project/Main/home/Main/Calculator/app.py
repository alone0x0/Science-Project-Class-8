from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        expression = request.json.get('expression')
        result = eval(expression)
        return jsonify({"result": result})
    except:
        return jsonify({"result": "Error"})

if __name__ == '__main__':
    app.run(debug=True)
