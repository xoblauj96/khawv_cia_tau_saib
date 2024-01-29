from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route('/')
def Home():
    data = {"name":"sorlor","age":30}
    print(jsonify(data))
    return 'Hmmmmmm....home'+str(jsonify(data))

@app.route("/get_user/<user_id>")
def get_user(user_id):
    user_data ={
        "user_id": user_id,
        "name":"sorlor",
        "email":"sorlor@gmail.com"
    }
    extra = request.args.get('extra')
    if extra:
        user_data['extra'] = extra
    return user_data


@app.route("/create-user",methods=["POST"])
def create_user():
    data = request.get_json()
    return jsonify(data), 201
print(__name__)
if __name__ == '__main__':
    app.run(debug=True)