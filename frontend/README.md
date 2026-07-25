# 🩸 Drop of Blood - Global Blood Donor Alliance

> A full-stack Blood Donor Management System built with the MERN Stack that connects blood donors, recipients, hospitals, and blood banks on a centralized platform.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![Status](https://img.shields.io/badge/Status-Under%20Development-orange)


---

## 📌 Project Overview

**Drop of Blood** is a web-based Blood Donor Management System that helps connect blood donors, recipients, hospitals, and blood banks efficiently.

The system enables users to search for blood donors, create emergency blood requests, manage blood donations, and maintain blood bank inventories through a secure and user-friendly platform.

---

## 🎯 Objectives

- Connect blood donors with recipients.
- Provide emergency blood request management.
- Help hospitals and blood banks manage blood availability.
- Reduce the time required to find compatible blood donors.
- Provide a centralized blood donation platform.

---

# ✨ Features

## 👤 Authentication

- User Registration
- User Login
- Forgot Password (OTP Verification)
- JWT Authentication
- Role-Based Access Control

---

## 🩸 Donor Module

- Register as Donor
- Update Profile
- Manage Availability
- Accept Blood Requests
- Reject Blood Requests
- View Donation History

---

## ❤️ Recipient Module

- Register/Login
- Search Blood Donors
- Search Blood Banks
- Create Blood Requests
- Contact Donors

---

## 🏥 Hospital Module

- Hospital Registration
- Login
- Post Blood Requirements
- View Request Status
- Contact Blood Donors

---

## 🏦 Blood Bank Module

- Register Blood Bank
- Manage Blood Stock
- View Requests
- Update Blood Inventory

---

## 🛠️ Admin Module

- Dashboard
- Manage Users
- Approve Donors
- Verify Hospitals
- Manage Blood Banks
- Manage Blood Requests
- Reports & Analytics

---

# 🩸 Supported Blood Groups

- A+
- A-
- B+
- B-
- AB+
- AB-
- O+
- O-

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- Node.js
- Express.js
- JWT
- bcrypt
- Multer

## Database

- MongoDB

---

# 📂 Project Structure

```text
Drop-of-Blood/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── docs/
│   └── SRS.md
│
├── README.md
└── .gitignore
```

---

# 🔒 Security

- JWT Authentication
- Password Hashing (bcrypt)
- Role-Based Access Control
- HTTPS Support
- Input Validation
- MongoDB Injection Protection
- XSS Protection
- CSRF Protection

---

# 📱 Application Pages

- Home
- Register
- Login
- Forgot Password
- Dashboard
- User Profile
- Search Donor
- Search Blood Bank
- Blood Request
- Notifications
- Donation History
- Hospital Dashboard
- Blood Bank Dashboard
- Admin Dashboard
- Contact Us
- About Us

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/drop-of-blood.git
```

## Install Frontend

```bash
cd client
npm install
npm start
```

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_password
```

---

# 📊 Database Collections

- Users
- Donors
- Recipients
- Hospitals
- Blood Banks
- Blood Requests
- Donations
- Notifications
- Admins

---

# 🚀 Future Enhancements

- GPS-Based Donor Search
- AI-Based Donor Recommendation
- Blood Compatibility Checker
- Appointment Scheduling
- QR Code Donor Identification
- Push Notifications
- Mobile Application (Android/iOS)
- Multi-Language Support
- Advanced Analytics Dashboard

---

# 📄 Documentation

Complete project documentation is available in:

```
docs/SRS.md
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

---

# 👨‍💻 Developer

**Anuj Gupta**

**Project:** Drop of Blood – Global Blood Donor Alliance

---

# 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Show Your Support

If you like this project, please ⭐ **Star** this repository on GitHub.
