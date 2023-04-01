import openai
import os
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
load_dotenv()
CORS(app)


@app.route('/description/<monster>')
def description(monster):
    apikey = os.getenv('API')
    openai.api_key = apikey
    response = openai.Completion.create(
        model="text-curie-001",
        prompt="Write a description for a the dnd monster \"" + monster + "\"",
        temperature=0.7,
        max_tokens=1631,
        top_p=1
    )
    return jsonify(response.choices[0].text)


@app.route('/stats/<monster>')
def stats(monster):
    apikey = os.getenv('API')
    openai.api_key = apikey
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Write a dnd 5e stat block for a monster called \"" +
        monster + "\", as a JSON format",
        temperature=0.7,
        max_tokens=3315,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return jsonify(response.choices[0].text)


openai.api_key = os.getenv("OPENAI_API_KEY")
