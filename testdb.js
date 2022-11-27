const sqlite = require("sqlite");
// import { open } from 'sqlite'

// this is a top-level await
async function Setup() {
  // open the database
  const db = await sqlite.open({
    filename: "/tmp/database.db",
    driver: sqlite.Database,
  });
  db.migrate({ force: "last" });

  const people = await db.all("SELECT * FROM Person");
  console.log("here is all ", people);
  console.log("done");
}

Setup();
