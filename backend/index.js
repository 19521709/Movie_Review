import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import MoviesDAO from "./dao/moviesDAO.js"
import ReviewsDAO from "./dao/ReviewsDAO.js";

async function main() {
  dotenv.config();

  const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URL);

  const port = process.env.PORT || 8000;

  try {
    //Connect to the MongoDB cluster
    await client.connect();
    await MoviesDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log("Server is running on port : " + port);
    });
  } catch (e) {
    console.error(e);
    process.exit(l);
  }
}

main().catch(console.error);
