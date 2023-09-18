import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {

    console.log("MongoDB connection URI:", process.env.MONGO_DB_URI);
    mongoose.set("strictQuery", true);

    if(isConnected){
        console.log("DB connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: process.env.MONGO_DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error){
        console.error("MongoDB connection error:", error);
    }

}