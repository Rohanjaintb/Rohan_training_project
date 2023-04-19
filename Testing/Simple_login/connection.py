#!/usr/bin/env python
import mysql.connector
import cgi

# Connect to the database
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Tecnotree@tt",
  database="rohan"
)

# Create a cursor object to execute SQL queries
mycursor = mydb.cursor()

# Get the form data
form = cgi.FieldStorage()
customerId = form.getvalue("customerId")
name = form.getvalue("name")

# Update the table
sql = "UPDATE customer SET name = %s WHERE customerId = %s"
val = (name, customerId)
mycursor.execute(sql, val)

# Commit the changes to the database
mydb.commit()

# Print the number of rows affected
print("Content-type:text/html\r\n\r\n")
print("<html>")
print("<body>")
print("<h1>Update successful.</h1>")
print("<p>Number of rows affected: %d</p>" % mycursor.rowcount)
print("</body>")
print("</html>")
