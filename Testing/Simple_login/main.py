from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)
app.debug = True

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Tecnotree@tt'
app.config['MYSQL_DB'] = 'rohan'

@app.route('/')
@app.route('/new/', methods=['GET', 'POST'])
def index():
    db = mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    mycursor = db.cursor()
    mycursor.execute('SELECT * FROM customers')
    results = mycursor.fetchall()
    db.close()


    
    return render_template('index.html', results=results)


if __name__ == '__main__':
    app.run()
