"""Server for LLS Man of the Year contest 2021 web app."""

from flask import Flask, render_template, request, redirect
import requests # python library - outgoing requests

app = Flask(__name__)

# team rosemead homepage
@app.route('/'):
def homepage():
    """LLS Man of the Year homepage."""

    return render_template('rosemead_homepage.html')