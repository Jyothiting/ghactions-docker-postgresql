from fastapi import FastAPI
import psycopg2

app = FastAPI()

conn = psycopg2.connect(
    database="myappdb",
    user="myuser",
    password="mypassword",
    host="13.126.22.248",
    port="5432"
)

@app.get("/")
def read_root():
    return {"message": "Backend running"}
