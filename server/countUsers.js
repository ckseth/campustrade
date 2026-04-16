import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

async function countUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB\n');

    const totalUsers = await User.countDocuments();
    console.log(`📊 Total Signups: ${totalUsers}\n`);

    // List all users with basic info
    const users = await User.find({}, 'name email createdAt').sort({ createdAt: -1 });
    console.log('👤 All Registered Users:');
    console.log('─'.repeat(60));
    users.forEach((user, i) => {
      const date = user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A';
      console.log(`  ${i + 1}. ${user.name} | ${user.email} | Joined: ${date}`);
    });
    console.log('─'.repeat(60));

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

countUsers();
