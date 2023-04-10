my_string = str(input("enter the String:"))#user input

counts = {} 
for letter in my_string:
    if letter.isalpha():
        if letter.lower() in counts:#search for alphabet
            counts[letter.lower()] += 1
        else:
            counts[letter.lower()] = 1
   

# Example usage

for letter,count in counts.items():
    print(letter,count)
print(counts)
