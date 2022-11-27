import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "libsystem",
    password: "",
    user: "root",
    // port: 3306,
  });

  try {
    const query = "SELECT * FROM phones";
    const insertData = "INSERT INTO phones (IMEI, BRAND,MODEL,PRICE,RAM,ROM,COLOUR,SKU) VALUES ('288354466778844666', 'SAMSUNGY', 'S9 PLU', '9900', '65GB', '129 GB', 'redy', 'hhfgg778' )"
        const values = [];

    const [data] = await dbconnection.execute(insertData, values);
    dbconnection.end();
    res.status(200).json({
      success: true,
      Products: data,
    });
  } catch (err) {
    console.log("error Occured");
  }
}
