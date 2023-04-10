#quiz

import random

# Define a list of questions and answers


questions = [
    {
        "question": "What is the capital of India?",
        "options": ["Mumbai", "Tamil nadu", "Up", "New Delhi"],
        "answer": "New Delhi",
    },
    {
        "question": "What is the largest planet in the solar system?",
        "options": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "answer": "Jupiter",
    },
    {
        "question": "What is the highest mountain in the world?",
        "options": ["Mount Everest", "K2", "Makalu", "Cho Oyu"],
        "answer": "Mount Everest",
    },
]

# Create an empty dictionary
while True:
    user = {}


# Prompt the user for values and add them to the dictionary
    user["question"] = input("Enter your question: ")
    user["options"] = (input("Enter your options: "))
    user["options"]= user["options"].split()
    user["answer"] = input("Enter your answer: ")
    print("Question is added")
    questions.append(user)
    
    more_questions = input("Do you want to add more questions? (y/n): ")
    if more_questions.lower() != 'y':
        break

# Print the dictionary



# Define a function to ask a question and get the user's answer
def ask_question(question):
    print(question["question"])
    for i, option in enumerate(question["options"]):
        print(str(i + 1) + ". " + option)
    user_answer = input("Enter your answer (1-4): ")
    if user_answer.isdigit() and int(user_answer) in range(1, 5):
        return question["options"][int(user_answer) - 1]
    else:
        return None

# Shuffle the questions and ask them one by one
random.shuffle(questions)
score = 0
for question in questions:
    user_answer = ask_question(question)
    if user_answer == question["answer"]:
        print("Correct!")
        score += 1
    else:
        print("Wrong! The correct answer is " + question["answer"])
    print()
    
# Display the final score to the user
print("Quiz finished! Your score is " + str(score) + " out of " + str(len(questions)) + " questions.")

# #Open the file in append mode to add new questions

# questions=[]
# with open('questions.txt', 'a') as file:
#     # Loop to add multiple questions
#     while True:
#         question = input("Enter a question: ")
#         options=input("Enter the Options for this Questions:")
#         options=options.split()
#         answer = input("Enter the answer: ")
        
        
#         # Create a dictionary to store the question and answer
#         qa_pair = {"question": question,"options":options,"answer": answer}
#         # Write the dictionary to the file as a string
#         file.write(str(qa_pair) + '\n')
#         print("Question added successfully!")
#         # Ask if the user wants to add more questions
#         more_questions = input("Do you want to add more questions? (y/n): ")
#         if more_questions.lower() != 'y':
#             break
# with open("questions.txt","r") as file:
#     file=file.read()
#     print(file)

# questions.append(file)
# print(questions)