import pymysql

host = "db-regis-act.cpocyg06y8xh.us-east-1.rds.amazonaws.com"
user = "admin"
passw = "Cjriano123*"
db_name = "db_RegistrosAct"

def conection_SQL():
    try:
        connection= pymysql.connect(
            host=host,
            user=user,
            password=passw,
            database=db_name
        )   
        print ("Succesfull connection to database")
        return connection
    except Exception  as err:
         print (Error, err)
         return None

def insert(id,nombre,apellido,documento,area,fecha,horai,horaf,descripcion):
    try:
        instruction =  "insert into Actividades values ("+id+",'"+nombre+"','"+apellido+"','"+documento+"','"+area+"','"+fecha+"','"+horai+"','"+horaf+"','"+descripcion+"')";
        connection = conection_SQL()
        cursor = connection.cursor()
        cursor.execute(instruction)
        connection.commit()
        print("user added")
    except Exception as err:
        print ("Error", err)
        return None