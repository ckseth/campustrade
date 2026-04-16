import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const clearUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB...');
        
        const result = await mongoose.connection.db.collection('users').deleteMany({});
        console.log(`✅ Cleared ${result.deletedCount} corrupted user(s) from database.`);
        console.log('You can now register a fresh account and login will work correctly.');
        
        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

clearUsers();
