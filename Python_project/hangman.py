import random#library which help choose random element in the list

# Define a list of words to choose from
word_list = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "peach", "quince", "raspberry", "strawberry", "tangerine", "watermelon"]

# Select a random word from the list
word = random.choice(word_list)

# Initialize the secret word as a string of underscores
secret_word = "_" * len(word)

# Initialize the number of guesses
guesses = 0
max_guesses = 6

# Loop until the player wins or loses
while "_" in secret_word and guesses < max_guesses:
    # Display the current state of the secret word
    print("Secret word: " + secret_word)
    
    # Take user input for the next guess
    guess = input("Guess a letter: ")
    
    # Check if the guess is in the secret word
    if guess in word:
        # Update the secret word with the correct guess
        for i in range(len(word)):
            if word[i] == guess:
                secret_word = secret_word[:i] + guess + secret_word[i+1:]
        print("Correct!")
    else:
        # Increment the number of guesses
        guesses += 1
        print("Incorrect. You have " + str(max_guesses-guesses) + " guesses left.")
    
# Check if the player won or lost
if "_" not in secret_word:
    print("Congratulations! You guessed the secret word: " + word)
else:
    print("Sorry, you ran out of guesses. The secret word was: " + word)
