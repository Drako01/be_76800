import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    age: {
        type: Number,
        required: true
    }
});


userSchema.pre('save', function(){
    console.log(`👤 Guardado como usuario: ${this.name}`);    
})

userSchema.post('find', function(result) {
    console.log(`🔎 Se consultaron por ${result.length} usuarios.!!`);
});


export const User = mongoose.model('User', userSchema);