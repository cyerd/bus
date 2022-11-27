import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "nextjs",
    password: "",
    user: "root",
    // port: 3306,
  });

  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      message: "Only Post is allowed",
    });
    return;
  }
  const { message } = req.body;

  const newMessage = {
    ...message,
  };
  // await redis.hset("messages", message.id, JSON.stringify(newMessage));
  // res.status(200).json({ message: newMessage });



  const query = "SELECT * FROM phones";
  const insertData = `INSERT INTO bookings (ID,PLACE,DESTINATION,PICKUP,FULLNAME,MOBILE,AGE,NATIONALITY,LUGGAGE,TRAVELDATE,GENDER,TRIP,SEAT,TOTALAMOUNT,DISCOUNT,PAIDAMOUNT,PAYMENTMETHOD) VALUES (4544, 'SAMSUNGY', 'PLU', 'textbook', 'hudheya', '1888', '45', 'keny','1', '28-12-2022', 'male', 'A','B4','2000','300','1700','mpesa' )`;
  const values = [];

  const [data] = await dbconnection.execute(insertData, values);
  dbconnection.end();
  res.status(200).json({
    Products: data,
  });
}
