# 🧪 CampusTrade - Complete Testing Guide

## Prerequisites

### 1. Install MongoDB Locally
- Download from: https://www.mongodb.com/try/download/community
- Install and ensure MongoDB is running
- Or use MongoDB Atlas cloud version

### 2. Verify Node.js
```bash
node --version  # Should be v16+
npm --version   # Should be v8+
```

### 3. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server && npm install
```

---

## 🚀 Starting the Application

### Terminal 1 - Start MongoDB
```bash
mongod
# Should log: "waiting for connections on port 27017"
```

### Terminal 2 - Start Backend Server
```bash
cd server
npm run dev
# Should log: "CampusTrade Server running on port 5000"
```

### Terminal 3 - Start Frontend
```bash
npm run dev
# Should log: "Local: http://localhost:5173"
```

---

## 📝 Complete Test Scenarios

### Test 1: New User Registration ✅

**Objective**: Verify signup flow creates user and auto-logs in

**Steps**:
1. Navigate to `http://localhost:5173`
2. Click "Sign In" button in navbar
3. Click "Join the community" link
4. Fill signup form:
   - Name: "Vivek Kumar"
   - Email: "vivek@campustrade.edu"
   - Password: "Password123"
   - Confirm: "Password123"
5. Check "I certify..." checkbox
6. Click "Create Account"

**Expected Results**:
- ✅ Form validates (no empty fields)
- ✅ Toast shows "Account created successfully!"
- ✅ Redirected to home page
- ✅ User avatar (V) appears in navbar top right
- ✅ User avatar shows blue background with white "V"
- ✅ Page doesn't reload (smooth navigation)

**Database Check**:
```javascript
// In MongoDB Compass or mongosh:
use campustrade
db.users.findOne({email: "vivek@campustrade.edu"})
// Password should be hashed (bcrypt format: $2a$...)
```

---

### Test 2: User Avatar & Name Display 🎭

**Objective**: Verify user info displays correctly in navbar

**Steps**:
1. After signup (from Test 1), look at navbar
2. Hover over user avatar
3. Click avatar to open dropdown

**Expected Results**:
- ✅ Avatar shows single letter: "V"
- ✅ Avatar color is indigo-600 (blue)
- ✅ On hover, user name "Vivek Kumar" appears
- ✅ Dropdown shows:
  - User avatar (larger)
  - Full name: "Vivek Kumar"
  - Email: "vivek@campustrade.edu"
  - "Sign Out" button with LogOut icon

---

### Test 3: Logout Functionality 🚪

**Objective**: Verify logout clears session

**Steps**:
1. With user logged in (from Test 1 or 2)
2. Click user avatar in navbar
3. Click "Sign Out" button
4. Check navbar

**Expected Results**:
- ✅ User avatar disappears instantly
- ✅ "Sign In" button reappears in navbar
- ✅ No page reload occurs
- ✅ Smooth transition

**Storage Check**:
- Open browser DevTools → Application → Local Storage
- ✅ "token" key should be removed
- ✅ "user" key should be removed

---

### Test 4: Login with Existing User ✅

**Objective**: Verify login with credentials

**Steps**:
1. Click "Sign In" button in navbar (after logout)
2. Fill login form:
   - Email: "vivek@campustrade.edu"
   - Password: "Password123"
3. Click "Enter Marketplace"

**Expected Results**:
- ✅ Spinner shows while loading
- ✅ No 401 error in console
- ✅ Toast shows "Welcome back to CampusTrade!"
- ✅ Redirected to home
- ✅ Navbar shows user avatar "V"
- ✅ User info persists after page refresh

---

### Test 5: Session Persistence 🔄

**Objective**: Verify user stays logged in after refresh

**Steps**:
1. Login (from Test 4)
2. Press F5 to refresh page
3. Wait for page to load

**Expected Results**:
- ✅ Navbar shows user avatar immediately (no delay)
- ✅ User dropdown still works
- ✅ localStorage still has token & user
- ✅ No login page appears

---

### Test 6: Wrong Password Handling ❌

**Objective**: Verify error handling for incorrect credentials

**Steps**:
1. Click "Sign In"
2. Enter valid email: "vivek@campustrade.edu"
3. Enter wrong password: "WrongPassword"
4. Click "Enter Marketplace"

**Expected Results**:
- ✅ Toast error: "Invalid email or password"
- ✅ No 401 error and full stacktrace in console
- ✅ User stays on login page
- ✅ Form remains filled (except password)
- ✅ No redirect to home

---

### Test 7: Email Validation ✔️

**Objective**: Verify email validation

**Steps**:
1. Click "Sign In" → "Join the community"
2. Try to submit with invalid email formats:
   - "test@" (missing domain)
   - "test.com" (missing @)
   - "test @company.com" (space in email)

**Expected Results**:
- ✅ Browser validation prevents submission
- ✅ Red input border & validation message
- ✅ Submit button doesn't trigger

---

### Test 8: Password Mismatch Handling 🔐

**Objective**: Verify signup password validation

**Steps**:
1. Go to signup
2. Fill all fields but make passwords different:
   - Password: "Password123"
   - Confirm: "Password456"
3. Try to submit

**Expected Results**:
- ✅ Toast error: "Passwords do not match"
- ✅ Form doesn't submit
- ✅ User stays on signup page

---

### Test 9: Mobile Responsiveness 📱

**Objective**: Verify mobile navbar functionality

**Steps**:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12" or similar
4. Test navbar on mobile

**Mobile Navbar Tests**:
- ✅ Logo visible
- ✅ Hamburger menu appears
- ✅ Click hamburger to open menu
- ✅ Menu shows Marketplace, Start Selling, Cart
- ✅ User avatar visible in menu (when logged in)
- ✅ Logout button visible in menu
- ✅ Search button in menu

---

### Test 10: Protected Route Access 🛡️

**Objective**: Verify Sell page requires authentication

**Steps**:
1. Logout if logged in
2. Click "Start Selling" in navbar
3. Watch what happens

**Expected Results**:
- ✅ Toast error: "Please log in to list items"
- ✅ Redirected to login page
- ✅ Login page loads

**Then**:
1. Login with valid credentials
2. Click "Start Selling" again

**Expected Results**:
- ✅ Sell form page loads successfully
- ✅ Can see "List a New Item" form
- ✅ All form fields visible

---

### Test 11: Multiple Users 👥

**Objective**: Verify multiple users can sign up and manage accounts independently

**Steps**:

**Create User 2**:
1. Logout current user
2. Signup new user:
   - Name: "Priya Singh"
   - Email: "priya@campustrade.edu"
   - Password: "SecurePass123"
3. Verify User 2 displays in navbar

**Switch Back to User 1**:
1. Logout
2. Login as User 1: "vivek@campustrade.edu"
3. Verify User 1 avatar "V" shows instead of "P"

**Expected Results**:
- ✅ Both users can signup separately
- ✅ Both users can login independently
- ✅ Navbar shows correct user when logged in
- ✅ Logout clears the other user's session
- ✅ No data mix-up between users

---

### Test 12: Console Errors 🐛

**Objective**: Verify no console errors occur

**Steps**:
1. Open DevTools Console (F12 → Console tab)
2. Login and perform all actions above
3. Check for errors (red text)

**Expected Results**:
- ✅ No red error messages
- ✅ No 404 errors for resources
- ✅ Warning messages okay (yellow)
- ✅ Network tab shows all requests as 200/201/401 appropriately

---

### Test 13: Network Requests 🌐

**Objective**: Verify correct API calls

**Steps**:
1. Open DevTools Network tab
2. Perform signup

**Expected Results**:
- ✅ POST to `http://localhost:5000/api/auth/register`
- ✅ Status: 201 (Created)
- ✅ Response body has: `token` and `user` object

**Then login**:
1. Clear network tab
2. Perform login

**Expected Results**:
- ✅ POST to `http://localhost:5000/api/auth/login`
- ✅ Status: 200 (OK)
- ✅ Response body has: `token` and `user` object
- ✅ Token included in Bearer header for protected routes

---

### Test 14: localStorage Security 🔒

**Objective**: Verify correct data stored

**Steps**:
1. Login as a user
2. Open DevTools → Application → Local Storage
3. Look for `http://localhost:5173` entry
4. Expand and check keys

**Expected Results**:
- ✅ Key "token" exists with JWT format (3 parts separated by dots)
- ✅ Key "user" exists with user data
- ✅ No password in "user" object
- ✅ User object has: `_id`, `name`, `email`, `initial`
- ✅ Keys cleared after logout

---

### Test 15: Performance - Load Time ⚡

**Objective**: Verify page loads quickly

**Steps**:
1. Open DevTools → Network tab
2. Hard refresh (Ctrl+Shift+Del or Cmd+Shift+Delete)
3. Navigate between pages

**Expected User**:
- ✅ Initial load under 3 seconds
- ✅ Navbar renders immediately after auth check
- ✅ No layout shifts after user data loads
- ✅ Smooth page transitions

---

## 🔧 Debugging Checklist

### If "401 Unauthorized" persists:
- [ ] Is MongoDB running? `mongosh`
- [ ] Is server running? Check `http://localhost:5000`
- [ ] Check server console for error details
- [ ] Clear browser cache and localStorage
- [ ] Signup with new user (different email)
- [ ] Check MongoDB Compass for user document

### If user doesn't show in navbar:
- [ ] Check browser console for errors
- [ ] Check localStorage has keys: `token` and `user`
- [ ] Hard refresh: Ctrl+Shift+R
- [ ] Check AuthContext is wrapping all routes
- [ ] Verify NavBar imports useAuth correctly

### If logout doesn't work:
- [ ] Check console for errors
- [ ] Verify logout button triggers onClick handler
- [ ] Check localStorage is cleared
- [ ] Try hard refresh after logout
- [ ] Check if "Sign In" button appears

### If password hashing fails:
- [ ] Ensure bcryptjs is installed: `npm list bcryptjs`
- [ ] Check server .env has JWT_SECRET
- [ ] Try new user signup
- [ ] Check MongoDB for user password (should be hash)
- [ ] Check server logs for hash errors

---

## ✅ Final Verification Checklist

Before considering the project complete:

```
Authentication Flow:
- [ ] New user signup works
- [ ] User auto-logs in after signup
- [ ] Existing user can login
- [ ] User avatar shows with first letter
- [ ] User can logout
- [ ] User data persists after refresh
- [ ] Session clears after logout
- [ ] Multiple users work independently

UI/UX:
- [ ] Navbar updates instantly after login
- [ ] No page reloads on login/logout
- [ ] User dropdown shows correct info
- [ ] Mobile responsive on small screens
- [ ] All animations smooth
- [ ] Toast notifications work

Security:
- [ ] Password hashed (not plain text)
- [ ] JWT token used for authenticated requests
- [ ] Protected routes redirect to login
- [ ] No sensitive data in localStorage
- [ ] No console errors/warnings (except expected)

Error Handling:
- [ ] Invalid email shows error
- [ ] Wrong password shows error
- [ ] Password mismatch shows error
- [ ] Network errors handled gracefully
- [ ] Loading states show spinners

Database:
- [ ] New users created in MongoDB
- [ ] Passwords are hashed
- [ ] User data retrievable
- [ ] Duplicate emails prevented
```

---

## 📞 Support & Troubleshooting

### Common Issues:

**Q: "Cannot find module 'useAuth'"**
- A: Make sure `src/hooks/useAuth.js` file exists
- A: Check import path is exactly: `import useAuth from '../../hooks/useAuth';`

**Q: "AuthContext throws error"**
- A: Verify AuthContextProvider wraps App in main.jsx
- A: Check context file has `export const AuthContext`

**Q: "Token always expires"**
- A: Check JWT_SECRET in server/.env is set
- A: Verify token expiry is 30d: `{ expiresIn: '30d' }`

**Q: "Navbar shows 'undefined' for name"**
- A: Check user object has `name` property from API
- A: Verify AuthContext's login function receives correct user data

---

## 🎉 Success Criteria

Project is working correctly when:
1. ✅ User can signup and auto-login
2. ✅ User can login with correct credentials
3. ✅ User avatar shows in navbar with first letter
4. ✅ User can logout properly
5. ✅ Session persists on page refresh
6. ✅ Sell page protected and requires login
7. ✅ No console errors
8. ✅ Mobile responsive

---

**Last Updated**: April 12, 2026
**Test Coverage**: 15 comprehensive scenarios
**Estimated Test Time**: 30-45 minutes
