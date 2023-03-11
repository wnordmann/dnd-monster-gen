import openai

# TODO: Move out into .env file
openai.api_key = "xxx"
monster = "Laser T-Rex"
response = openai.Completion.create(
  model="text-curie-001",
  prompt="Write a description for a the dnd monster \"" + monster + "\"",
  temperature=0.7,
  max_tokens=1631,
  top_p=1
)
print(response)