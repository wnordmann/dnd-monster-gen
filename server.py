import openai
from dotenv import load_dotenv
import os
from flask import Flask, jsonify, render_template
app = Flask(__name__)
load_dotenv()


@app.route('/')
def index():
    return render_template('index.html')


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
