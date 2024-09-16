import pymysql

host = "db-regis-act.cpocyg06y8xh.us-east-1.rds.amazonaws.com"
user = "admin"
passw = "Cjriano123*"

pymysql.connect (
    host,
    user,
    passw
)

print("Conexion Satisfactoria")