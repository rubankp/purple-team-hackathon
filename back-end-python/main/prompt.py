def prepare_prompt_for_quiz(transcription):
    prompt = f'''You are the instructor and you have just finished giving a session(the following is the transcript of the session with timestamp for the youtube video )
            {transcription}

            Give me 10 quiz questions along with 4 answer option. and make sure there is only one correct option in the options. The dificulty should be medium to hard and the questions can be scenarios or apllication based instead of being direct.

            Only Ask questions and explanantion from the transcript
            Also give me youtube link with timestamp for the explanation. please note the timestamp is in seconds.
            Reply me with the JSON format . response should not exceed 4000 token.
            the parent json key should be questions and the value should be a list of questions. each question should be a dictionary with the following keys:
            {{
            "question": "What format is commonly used for data returned by FastAPI endpoints?",
            "options": [
            "XML",
            "CSV",
            "JSON",
            "YAML"
            ],
            "answer": "JSON",
            "link": "&t=<timestamp in seconds>"
            }},'''
    
    return prompt

def prepare_prompt_for_summary(transcription):
    prompt = f'''Create a summary from the following transcription:
        Make sure the summary is concise and crisp. Break the summary into sections
        based on the topics that were dicussed and highlight important points.
        i want the output to be in HTML format do not include html head and body tag. 

        {transcription}
        '''

    return prompt
    
