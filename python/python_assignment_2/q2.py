n=str(input("Enter the Name:"))#user input
m=n.split(" ")# user list created

for j in m:
    vowels = "aeiouAEIOU"
   
    for vowel in vowels:
        j = j.replace(vowel, "")#replace a vowels by space
    print(j,end=" ")