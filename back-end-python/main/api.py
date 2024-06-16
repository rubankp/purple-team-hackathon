from flask import Flask, request, jsonify
import openai
import json , os
import functools
import youtube_transcript 
from flask_cors import CORS
import prompt



app = Flask(__name__)


openai.api_key = "<Open ai API KEY>"


CORS(app)


def get_response_from_openai(prompt , model = "gpt-4-turbo-preview" ,response_format = 'text'):

    response = openai.ChatCompletion.create(
        model=model,  
        messages=[
            {"role": "system", "content": "you are an assistant"},
            {"role": "user", "content": prompt}
        ],
        max_tokens=4096,
        temperature=0.7,
        response_format = {"type" :response_format }
    )
    
    text_data = response.choices[0].message['content'].strip()

    if 'json' in response_format:       
        return json.loads(text_data)
    
    return text_data




@app.route('/test', methods=['GET'])
def test():
    return "it worked!"
    

@app.route('/quiz/<string:video_id>', methods=['GET'])
@functools.cache
def generate_quiz(video_id):

    try:
        transcription = youtube_transcript.get_transcript(video_id , include_timestamp = True)
        _prompt = prompt.prepare_prompt_for_quiz(transcription)
        quiz=get_response_from_openai(_prompt , response_format = 'json_object')
        return {'quiz': quiz}
    
    except Exception as e:
        print(e)
        return {'error': str(e)}, 500
    
@app.route('/summary/<string:video_id>', methods=['GET'])
@functools.cache
def generate_summary(video_id):

    try:
        transcription = youtube_transcript.get_transcript(video_id , include_timestamp = True)
        _prompt = prompt.prepare_prompt_for_summary(transcription)
        summary = get_response_from_openai(_prompt)
        return {'summary': summary}
    
    except Exception as e:
        print(e)
        return {'error': str(e)}, 500


if __name__ == '__main__':
    # ip = "localhost"
    app.run(port=5000)
