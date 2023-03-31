# def palindrome_list(strings):
#     palindromes = []
#     for string in strings:
#         if string == string[::-1]:
#             palindromes.append(string)
#     return palindromes

# # Example usage
# my_list = ["racecar", "level", "python", "madam"]
# palindrome_strings = palindrome_list(my_list)
# print(palindrome_strings)

string=str(input("Enter the String:"))#user input
string=string.split()#user created a list

r=[]#empty list
for i in string:
    j=i[::-1]#reversing of the string
    if j==i:#checking for palindrome
        r.append(j)
print(r)
