from youtube_transcript_api import YouTubeTranscriptApi


def get_transcript(video_id , include_timestamp = False):

    transcripts = YouTubeTranscriptApi.get_transcript(video_id)

    output = ""

    for ts in transcripts:
        if include_timestamp:
            output += f"{ts['start']}s  {ts['text']}\n"

        else:
            output += f"{ts['text']}\n"

    with open('tran.txt' , 'w') as file:
        file.write(output)

    return output



def get_transcript_for_summary(video_id):

    transcripts = YouTubeTranscriptApi.get_transcript(video_id)


    output = ""
    for ts in transcripts:
        output += f"{ts['text']}\n"

    return output


video_id = 'pTFZFxd4hOl'
# transcripts = YouTubeTranscriptApi.get_transcript(video_id)

# print(get_transcript(video_id))

# print(transcripts)

