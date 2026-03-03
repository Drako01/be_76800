import mongoose from "mongoose";
import dns from "node:dns";

export const connectMongoDB = async (mode) => {
    try {
        // Evita fallos SRV en algunos DNS de ISP al usar mongodb+srv.
        dns.setServers(['8.8.8.8', '1.1.1.1']);

        const URL_LOCAL = 'mongodb://127.0.0.1:27017/backend_76800';
        const URL_ATLAS = 'mongodb+srv://aleddistefano:ijxTubKYdFbRrutb@codehouse.cfacxsr.mongodb.net/';

        const URL = mode === 'local' ? URL_LOCAL : URL_ATLAS;

        await mongoose.connect(URL);
        console.log(`✅ MongoDB conectada correctamente a ${mode === 'local' ? 'Local' : 'Atlas'}`);
    } catch (err) {
        console.error("❌ Error al conectar a MongoDB", err);
        process.exit(1);
    }
}
