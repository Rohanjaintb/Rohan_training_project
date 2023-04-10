# Define a function to print the game board
def print_board(board):
    print("   |   |   ")
    print(" " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " ")
    print("___|___|___")
    print("   |   |   ")
    print(" " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " ")
    print("___|___|___")
    print("   |   |   ")
    print(" " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " ")
    print("   |   |   ")

# Define a function to check if a player has won
def check_win(board, player):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] == player:
            return True
        if board[0][i] == board[1][i] == board[2][i] == player:
            return True
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player:
        return True
    return False

# Define the game board as a 2D list of empty cells
board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
]

# Define the players and their symbols
players = ["X", "O"]
current_player = 0

# Play the game until someone wins or the board is full
while True:
    # Print the game board and ask the current player to make a move
    print_board(board)
    print("Player " + players[current_player] + "'s turn.")
    row = int(input("Enter row number (1-3): ")) - 1
    col = int(input("Enter column number (1-3): ")) - 1
    
    # Check if the chosen cell is empty
    if board[row][col] == " ":
        # Place the current player's symbol on the board
        board[row][col] = players[current_player]
        
        # Check if the current player has won
        if check_win(board, players[current_player]):
            print_board(board)
            print("Congratulations! Player " + players[current_player] + " wins!")
            break
        
        # Switch to the other player
        current_player = (current_player + 1) % 2
        
        # Check if the board is full
        if all(" " not in row for row in board):
            print_board(board)
            print("Game over! It's a tie.")
            break
    else:
        print("That cell is already occupied. Please choose another one.")
