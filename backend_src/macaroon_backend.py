from flask import Flask, jsonify
from crossdomain import crossdomain
app = Flask(__name__)

@app.route("/questions", methods=['GET', 'OPTIONS'])
@crossdomain(origin='http://localhost:8080')
def question_list():
    list = [
        {'invisible': True, 'val': 2},
        {'invisible': False, 'val': 10},
        {'invisible': False, 'val': 54},
        {'invisible': False, 'val': 1},
        {'invisible': False, 'val': 3},
        {'invisible': False, 'val': 12}
        ]
    # jsonify will do for us all the work, returning the
    # previous data structure in JSON
    return jsonify(results=list)


@app.route("/question/<qid>", methods=['GET', 'OPTIONS'])
@crossdomain(origin='http://localhost:8080')
def question(qid):
    #TODO: return single question spec here

    question = {}
    spec = [
        {'invisible': True, 'val': 2},
        {'invisible': False, 'val': 10},
        {'invisible': False, 'val': 54},
        {'invisible': False, 'val': 1},
        {'invisible': False, 'val': 3},
        {'invisible': False, 'val': 12}
        ]
    question['spec'] = spec
    # jsonify will do for us all the work, returning the
    # previous data structure in JSON
    return jsonify(results=question)

if __name__ == "__main__":
    app.run()