from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)
@app.route('/')

def index():
    
    return render_template('homepage.html')


@app.route('/signup/', methods=['GET', 'POST'])
def signup():
    
    return render_template('confirmation.html')


if __name__ == '__main__':
    app.run()
