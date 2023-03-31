# def square_list(numbers):
#     squares = []
#     for number in numbers:
#         squares.append(number ** 2)
#     return squares

# # Example usage
# my_list = [1, 2, 3, 4, 5]
# squared_list = square_list(my_list)
# print(squared_list)

num=(input("Enter the Number :"))#user input 
num=num.split()
num = [int(i) for i in num]#list of integer is created

r=[]#empty list
for i in num:
    j=i**2
    r.append(j) #append squres of the numbers
print(r)
