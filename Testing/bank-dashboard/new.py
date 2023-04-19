from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Tecnotree@tt'
app.config['MYSQL_DB'] = 'rohan'

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM customers WHERE email=%s AND password=%s", (email, password))
    data = cur.fetchone()
    cur.close()
    if data:
        return render_template('dashboard.html')
    else:
        return render_template('index.html', message='Invalid email or password')

if __name__ == '__main__':
    app.run(debug=True)
