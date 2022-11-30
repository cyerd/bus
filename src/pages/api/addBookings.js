import redis from "../../../redis";

import mysql from "mysql2/promise";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "nextjs",
    password: "",
    user: "root",
    port: 3306,
  });

  if (req.method !== "POST") {
    res.status(405).json({
      body: "Method Not Allowed",
    });
    return;
  }
  const { booking } = req.body;

  const newBooking = {
    ...booking,
  };

  // let data = JSON.stringify(newMessage)

  // await redis.hset("messages", message.id, JSON.stringify(newMessage));
  // res.status(200).json({ message: newMessage });

  await prisma.Bookings.create({

    data: newBooking
  });

  const seatsBooked = newBooking.seatNo;
  const startDate = newBooking.startDate;
  const id = newBooking.id;
  console.log(seatsBooked, startDate, id);

  await prisma.BookedSeats.create({
   
    data: { id: id, seats: seatsBooked, date: startDate },
  });
  res.status(200).json({ booking: newBooking });

  // try {
  //   console.log(JSON.stringify(newMessage));
  //   const query = "SELECT * FROM phones";
  //   const insertData = `INSERT INTO bookings (ID,PLACE,DESTINATION,PICKUP,FULLNAME,MOBILE,AGE,NATIONALITY,LUGGAGE,TRAVELDATE,GENDER,TRIP,SEAT,TOTALAMOUNT,DISCOUNT,PAIDAMOUNT,PAYMENTMETHOD)
  //    VALUES ('${newMessage.id}', '${newMessage.from}', '${newMessage.destination}', '${newMessage.pickup}', '${newMessage.fullName}', '${newMessage.mobile}', '${newMessage.age}', '${newMessage.nationality}','${newMessage.luggage}', '${newMessage.startDate}', '${newMessage.gender}', '${newMessage.trip}','${newMessage.seatNo}','${newMessage.totalAmount}','${newMessage.discount}','${newMessage.totalPaid}','${newMessage.paymentMethod}' )`;
  //   const values = [];

  //   const [data] = await dbconnection.execute(insertData, values);
  //   dbconnection.end();
  //   res.status(200).json({
  //     success: true,
  //     Products: data,
  //   });
  // } catch (err) {
  //   console.log("error Occured");
  // }
}
