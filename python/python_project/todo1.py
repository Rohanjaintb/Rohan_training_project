#todo list
file = []

while True:
    print("1. Add task")
    print("2. View file")
    print("3. delete task")
    print("4. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        task = input("Enter task: ")
        file.append(task)
        print("Task added successfully!")

    elif choice == "2":
        if len(file) == 0:
            print("No file found!")
        else:
            print("file:")
            for task in file:
                print(task)

    elif choice == "3":
        if len(file) == 0:
            print("No file found!")
        else:
            task_index = int(input("Enter task index: "))
            if task_index < 0 or task_index >= len(file):
                print("Invalid task index!")
            else:
                file.pop(task_index)
                print("Task completed successfully!")

    elif choice == "4":
        print("Exiting program...")
        break

    else:
        print("Invalid choice! Please try again.")
