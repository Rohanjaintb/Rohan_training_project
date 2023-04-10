#calculator

# addition
def add(a, b):
    return a + b

#  subtraction
def subtract(a, b):
    return a - b

# multiplication
def multiply(a, b):
    return a * b

# division
def divide(a, b):
    return a / b

# Display a menu of available operations
print("Select operation:")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

# Take user input for the selected choice
choice = input("Enter choice (1/2/3/4): ")

# Take user input for the operands
n1 = float(input("Enter first number: "))
n2 = float(input("Enter second number: "))

# Perform the selected operation and display the result
if choice == '1':
    print(n1, "+", n2, "=", add(n1, n2))
elif choice == '2':
    print(n1, "-", n2, "=", subtract(n1, n2))
elif choice == '3':
    print(n1, "*", n2, "=", multiply(n1, n2))
elif choice == '4':
    print(n1, "/", n2, "=", divide(n1, n2))
else:
    print("Invalid input")
