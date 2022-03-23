import json
from firebase import firebase
from flask import Flask, jsonify
from flask_cors import CORS
import requests


app = Flask("__name__")
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins":
        "*"
    }
})


@app.route('/urls/<url>', methods=['GET'])
def get_url_data(url):
    my_headers = {
        'Authorization': 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49'}
    response = requests.get(
        'https://company.clearbit.com/v2/companies/find?domain={}'.format(url), headers=my_headers)
    print()
    data = response.json()
    return data
