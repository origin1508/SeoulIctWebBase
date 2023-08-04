from flask import Flask, render_template
import pymysql

app = Flask(__name__)


@app.route("/")
def index():
    db_conn = pymysql.connect(
        host="localhost",
        user="root",
        password="1234",
        database="컴퓨터나라",
        autocommit=True,
        cursorclass=pymysql.cursors.DictCursor,
    )
    with db_conn:
        db_cursor = db_conn.cursor()
        db_cursor.execute("SELECT * FROM category")
        category = db_cursor.fetchall()

    return render_template("index.html", category=category)


if __name__ == "__main__":
    app.run(debug=True)
