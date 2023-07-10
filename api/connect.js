import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"SX14shaggy@",
  database:"social"
})