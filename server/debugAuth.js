import axios from 'axios';

const BASE = 'http://localhost:5000/api';
const testEmail = `test_${Date.now()}@campus.edu`;
const testPassword = 'Test@1234';

console.log('--- CampusTrade Auth Debug Test ---\n');

async function run() {
    // Step 1: Register
    console.log(`1. Registering user: ${testEmail}`);
    try {
        const reg = await axios.post(`${BASE}/auth/register`, {
            name: 'Test User',
            email: testEmail,
            password: testPassword
        });
        console.log(`   ✅ Register SUCCESS: status ${reg.status}`);
    } catch (err) {
        console.log(`   ❌ Register FAILED: ${err.response?.status} - ${JSON.stringify(err.response?.data)}`);
        process.exit(1);
    }

    // Step 2: Login immediately
    console.log(`\n2. Logging in with same credentials...`);
    try {
        const login = await axios.post(`${BASE}/auth/login`, {
            email: testEmail,
            password: testPassword
        });
        console.log(`   ✅ Login SUCCESS: status ${login.status}`);
        console.log(`   Token: ${login.data.token?.substring(0, 30)}...`);
        console.log(`   User: ${JSON.stringify(login.data.user)}`);
    } catch (err) {
        console.log(`   ❌ Login FAILED: ${err.response?.status} - ${JSON.stringify(err.response?.data)}`);
        
        // Step 3: Check what's in DB
        console.log('\n3. Diagnosing issue...');
        console.log('   The password check returned false.');
        console.log('   This means the stored hash does NOT match the plain password.');
        console.log('   Most likely cause: password was hashed MORE THAN ONCE during registration.');
    }
}

run();
