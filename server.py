import openai
import os
from dotenv import load_dotenv
from flask import Flask, jsonify
app = Flask(__name__)
load_dotenv()

@app.route('/description/<monster>')
def description(monster):
    # apikey = os.getenv('DATABASE_URL')

    # openai.api_key = apikey
    openai.api_key_path = '.env'
    response = openai.Completion.create(
        model="text-curie-001",
        prompt="Write a description for a the dnd monster \"" + monster + "\"",
        temperature=0.7,
        max_tokens=1631,
        top_p=1
    )
    return jsonify(response.choices[0].text)