import os
import openai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def root(text):
    openai.api_key = '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'
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Translate this paragraph into Traditional Chinese:\n\n" + text + "\n\n1.",
        temperature=0.3,
        max_tokens=1000,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
    print(response)
    return response

# openai.api_key = os.getenv("OPENAI_API_KEY")
