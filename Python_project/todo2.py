#to do list
import os
textfile="Rohan.txt"

def choice():
    print("1:for view file")
    print("2: for add item to file")
    print("3:for edit item to file")
    print("4:for delete item from file")
    print("5:Exit task")

def read_file():
    if os.path.isfile(textfile):
        with open(textfile,"r") as f:
            file=f.readlines()
        file=[i.strip()for i in file]
    else:
        file=[]
    return file
def write_file(file):
    with open(textfile,"w") as f:
        file=f.write("/n".join(file))
def view_file(file):
    if len(file)==0:
        print("to-do list is empty")
    else:
        print("todo list is /n")
        for i,item in enumerate(file):
            print(f"{i+1}.{item}")

def add_item(file):
    item= input("enter the item you like to add")
    file.append(item)
    write_file(file)
    print("added item",item)

def del_item(file):
    view_file(file)
    del_item=int(input("enter the number u like to delete"))-1
    item=file.pop(del_item)
    print("deleted item",item)

def edit_item(file):
    view_file(file)
    edit_file=int(input("enter the index you would like to edit"))-1
    new_item=input("enter the new item you would like to add")
    edit=file[edit_file]
    file[edit_file]=new_item
    
    write_file(file)
    print(f"new one become {edit}-->{new_item}")

while True:
    choice()
    num=input("chose the task you like to perform")

    if num == "1":
        file = read_file()
        view_file(file)
    elif num == "2":
        file = read_file()
        add_item(file)
    elif num == "3":
        file = read_file()
        edit_item(file)
    elif num == "4":
        file = read_file()
        del_item(file)
    elif num == "5":
        break
    else:
        print("Invalid input. Please enter a number from 1 to 5.\n")



    
