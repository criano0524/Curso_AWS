from flask import Flask, render_template, request, redirect
import pymysql

app = Flask(__name__)

# Conexión a la base de datos MySQL
connection = pymysql.connect(
    host='db-regis-act.cpocyg06y8xh.us-east-1.rds.amazonaws.com',
    user='admin',
    password='Cjriano123*',
    database='db_RegistrosAct'
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    nombre = request.form['nombre']
    apellido = request.form['apellido']
    actividad = request.form['actividad']
    fecha = request.form['fecha']

    with connection.cursor() as cursor:
        sql = "INSERT INTO Actividades (nombre, apellido, actividad, fecha) VALUES (%s, %s, %s)"
        cursor.execute(sql, (nombre, descripcion, fecha))
        connection.commit()

    return redirect('/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
