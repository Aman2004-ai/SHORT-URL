
# SHORT-URL

A clean and efficient URL Shortener built using Node.js, Express, and MongoDB.  
This application converts long URLs into short, shareable links and supports user authentication, click tracking, and secure redirection.

---

## 🚀 Features

- Shorten long URLs into compact links  
- Fast redirection  
- User Authentication (Signup/Login)  
- Click count tracking (analytics-ready structure)  
- Secure password hashing using bcrypt  
- JWT-based session handling  
- Organized MVC-style folder structure  

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime  
- **Express.js** – Server framework  
- **MongoDB + Mongoose** – Database  
- **EJS** – Templating engine for views  
- **bcrypt** – Password hashing  
- **JWT** – Authentication tokens  

---

## 📂 Project Structure

SHORT-URL/ │── controllers/ │── middlewares/ │── models/ │── routes/ │── service/ │── view/ │── connect.js │── index.js │── package.json

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd SHORT-URL

2. Install dependencies

npm install

3. Create a .env file

MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=8000

4. Start the server

npm start


---

▶️ Usage

1. Open the application in your browser


2. Sign up or log in


3. Paste any long URL


4. Generate a short link


5. Access the short link to auto-redirect to the original URL


6. Click tracking available in database




---

🤝 Contributing

Contributions, issues, and feature requests are welcome.
Feel free to fork the repository and submit a pull request.


---

⭐ Support

If you find this project useful, please consider giving it a star ⭐ on GitHub.


---

👨‍💻 Author

Aman Jaiswal
GitHub: https://github.com/Aman2004-ai

---
