import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI =
    <string>'mongodb+srv://angel:123@cluster0.rlqxziz.mongodb.net/?retryWrites=true&w=majority';
  await connect(DB_URI);
}

export default dbConnect;
