import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const URL = 'mongodb://127.0.0.1:27017'
        await mongoose.connect(`${URL}/backend_76800`);
        console.log(`✅ MongoDB conectada correctamente a ${URL}`);
    } catch (err) {
        console.error("❌ Error al conectar a MongoDB", err);
        process.exit(1);
    }
}