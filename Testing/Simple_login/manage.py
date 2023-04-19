from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Tecnotree@tt'
app.config['MYSQL_DB'] = 'rohan'

mysql = MySQL(app)

@app.route('/add', methods=['POST'])
def add():
    name = request.form['name']
    email = request.form['email']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO customer (name, email) VALUES (%s, %s)", (name, email))
    mysql.connection.commit()
    cur.close()
    return 'Row added to database'
