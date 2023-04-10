n=int(input("Enter the length of the list :"))
r=[]
for i in range(n):
    e=int(input("Enter the Number :"))
    r.append(e)
print(r)
m=[]
for j in r:
    if j%2==0:
        m.append(j)
print("Sum of Even Number in list is :",sum(m))