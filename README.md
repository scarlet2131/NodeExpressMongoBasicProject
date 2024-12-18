# NodeExpressMongoBasicProject

Below is the content for your `README.md` file, including project description, setup instructions, and usage steps:

---

# **Student and Course Management System**

This project is a web-based application for managing students and courses, built using **Node.js**, **Express**, **MongoDB**, and a simple **frontend** with HTML, CSS, and JavaScript.

## **Features**

1. **Students:**
   - Add a new student.
   - Edit existing student details (e.g., name, semester).
   - Remove a student.
   - List all students, along with their courses.

2. **Courses:**
   - Add a new course.
   - Edit existing course details (e.g., course name, course code).
   - Remove a course.
   - List all courses.

3. **Dynamic Navigation:**
   - Navigate between "Students" and "Courses" via the navigation bar.

---

## **Project Setup**

Follow the steps below to set up and run this project:

### **1. Prerequisites**
Make sure you have the following installed on your system:
- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **MongoDB** (Running locally or on a cloud service like MongoDB Atlas) - [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)

---

### **2. Clone the Repository**
Clone this project to your local machine:
```bash
git clone git@github.com:scarlet2131/NodeExpressMongoBasicProject.git
cd server
```

---

### **3. Install Backend Dependencies**
Navigate to the `server` folder and install the necessary dependencies:
```bash
cd server
npm install
```

---

### **4. Run MongoDB**
Start the MongoDB service. If you are running MongoDB locally, use:
```bash
mongod
```

For MongoDB Atlas, configure your connection string in `config/db.js`:
```javascript
await mongoose.connect('<your-mongodb-atlas-connection-string>');
```

---

### **5. Start the Backend Server**
Start the backend server using the following command:
```bash
node app.js
```
The server will start on `http://localhost:5000`.

---

### **6. Serve the Frontend**

Open the `client` folder and serve the frontend by simply opening the `index.html` file in your browser:

1. Navigate to the `client` folder in your project.
2. Open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox).

Alternatively, you can use a live server or static file server like **Live Server** in VS Code or **http-server**:

- **Using VS Code Live Server**:
  - Install the Live Server extension in VS Code.
  - Right-click on the `index.html` file and choose **Open with Live Server**.

- **Using `http-server`**:
  - Install `http-server` globally:
    ```bash
    npm install -g http-server
    ```
  - Navigate to the `client` folder and start the server:
    ```bash
    http-server .
    ```
  - Open the URL provided in your terminal (e.g., `http://127.0.0.1:8080`).

---

## **How to Use**

### **1. Students Management**
- **View Students**: Click on the "Students" tab in the navigation bar to view the list of all students.
- **Add Student**:
  - Click on the "Add New Student" button.
  - Fill in the required details and click "Submit."
- **Edit Student**:
  - Click the "Edit" button next to a student.
  - Update the details in the form and click "Submit."
- **Remove Student**:
  - Click the "Remove" button next to a student.
  - Confirm the deletion.

### **2. Courses Management**
- **View Courses**: Click on the "Courses" tab in the navigation bar to view the list of all courses.
- **Add Course**:
  - Click on the "Add New Course" button.
  - Fill in the course name and code and click "Submit."
- **Edit Course**:
  - Click the "Edit" button next to a course.
  - Update the details in the form and click "Submit."
- **Remove Course**:
  - Click the "Remove" button next to a course.
  - Confirm the deletion.

---

## **Project Structure**

```
project/
├── client/
│   ├── index.html        # Main frontend HTML file
│   ├── script.js         # Frontend JavaScript logic
│   ├── style.css         # Frontend styles
├── server/
│   ├── app.js            # Main server file
│   ├── config/
│   │   └── db.js         # MongoDB connection configuration
│   ├── models/
│   │   ├── student.js    # Student schema
│   │   └── course.js     # Course schema
│   ├── routes/
│   │   ├── studentRoutes.js  # Student API routes
│   │   └── courseRoutes.js   # Course API routes
├── package.json          # Backend dependencies
└── README.md             # Project documentation
```

---

## **API Endpoints**

### **Student API**
1. **Add Student**:
   - **Method**: POST
   - **URL**: `/students/add`
   - **Body**: `{ "firstName": "John", "lastName": "Doe", "studentId": "123", "semester": "Fall 2024" }`

2. **Edit Student**:
   - **Method**: PUT
   - **URL**: `/students/update/:id`
   - **Body**: `{ "firstName": "Jane", "lastName": "Doe", "semester": "Spring 2024" }`

3. **Delete Student**:
   - **Method**: DELETE
   - **URL**: `/students/remove/:id`

4. **Get All Students**:
   - **Method**: GET
   - **URL**: `/students`

---

### **Course API**
1. **Add or Update Course**:
   - **Method**: POST
   - **URL**: `/courses/add`
   - **Body**: `{ "name": "Math 101", "code": "MATH101" }`

2. **Delete Course**:
   - **Method**: DELETE
   - **URL**: `/courses/remove/:id`

3. **Get All Courses**:
   - **Method**: GET
   - **URL**: `/courses`

---

## **Troubleshooting**

1. **MongoDB Connection Issues**:
   - Ensure MongoDB is running locally or update the connection string in `config/db.js` if using MongoDB Atlas.

2. **Port Already in Use**:
   - If `PORT 5000` is in use, change the port in `app.js`:
     ```javascript
     const PORT = 3000;
     ```

3. **CORS Errors**:
   - Ensure the frontend is served from the same origin as the backend, or use a CORS extension in your browser for testing.

---

## **Future Improvements**
- Add user authentication for secure access to student and course data.
- Add pagination for large datasets of students or courses.
- Improve UI/UX with modern frameworks like React or Vue.js.

---
