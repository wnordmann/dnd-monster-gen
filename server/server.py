import json
import openai
import os
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
load_dotenv()
CORS(app)


def lowercase_keys(obj):
    if isinstance(obj, dict):
        return {k.lower().replace('_', '').replace(' ', ''): lowercase_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [lowercase_keys(item) for item in obj]
    return obj


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

    prompt = (
        "Write a dnd 5e stat block for a monster of type " + monster + " "
        "include the name, size, type, alignment, ac, aromor type, hp, hp calculation, speed, str, dex, con, int, "
        "wis, cha, saving throws, skills, damage immunities, damage resistances, property, property description,  "
        "damage vulnerabilities, condition immunities, senses, languages, challenge rating, "
        "and actions as a JSON formatted data structure no array types."
    )
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=3315,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(response.choices[0].text)
    data = json.loads(response.choices[0].text)
    return jsonify(lowercase_keys(data))


openai.api_key = os.getenv("OPENAI_API_KEY")
