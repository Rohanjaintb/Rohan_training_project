n=int(input("Enter the length of the list :"))

r=[]
for i in range(n):
    e=str(input("Enter the Names:")) 
    r.append(e)
print("Non Sorted Output",r)
r.sort()
print("Sorted Output",r)