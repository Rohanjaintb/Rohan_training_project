n=int(input("Enter the length of the list :"))
r=[]
for i in range(n):
    e=int(input("Enter the Number :"))
    r.append(e)
print(r)#user input list created
m=[]
for j in r:
    if j%2==0: #check the even values in list r
        m.append(j)
print("Sum of Even Number in list is :",sum(m))#give sum of the even number in the list