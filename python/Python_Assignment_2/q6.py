# def longest_word(words):
#     longest = ""
#     for word in words:
#         if len(word) > len(longest):
#             longest = word
#     return longest

# # Example usage
# word_list = ["apple", "banana", "pear", "orange"]
# longest = longest_word(word_list)
# print(longest)


string=str(input("Enter the String:"))#user input
string=string.split()
j="" #empty string
for i in string:
    
    if len(i)>len(j): #check longest string using length function
        j=i
print(j)