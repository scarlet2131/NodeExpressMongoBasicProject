const API_BASE = "http://localhost:5000";

// Load all students
async function loadStudents() {
    const res = await fetch(`${API_BASE}/students`);
    const students = await res.json();

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Student List</h2>
        ${students.map(student => `
            <div class="student">
                <h3>${student.firstName} ${student.lastName}</h3>
                <p><strong>ID:</strong> ${student.studentId}</p>
                <p><strong>Semester:</strong> ${student.semester}</p>
                <p><strong>Courses:</strong> ${student.courses.map(course => course.name).join(', ') || 'None'}</p>
                <button onclick="showEditStudentForm('${student._id}')">Edit</button>
                <button onclick="removeStudent('${student._id}')">Remove</button>
            </div>
        `).join('')}
        <button onclick="showAddStudentForm()">Add New Student</button>
    `;
}


// Show the form to add a new student
async function showAddStudentForm() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Add Student</h2>
        <form id="addStudentForm">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
            <input type="text" name="studentId" placeholder="Student ID" required />
            <input type="text" name="semester" placeholder="Semester" required />
            <button type="submit">Add Student</button>
        </form>
    `;
    document.getElementById('addStudentForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        await fetch(`${API_BASE}/students/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        loadStudents();
    });
}

// Show the form to edit a student
async function showEditStudentForm(id) {
    const res = await fetch(`${API_BASE}/students`);
    const students = await res.json();
    const student = students.find(stu => stu._id === id);

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Edit Student</h2>
        <form id="editStudentForm">
            <input type="text" name="firstName" value="${student.firstName}" required />
            <input type="text" name="lastName" value="${student.lastName}" required />
            <input type="text" name="semester" value="${student.semester}" required />
            <button type="submit">Update Student</button>
        </form>
    `;
    document.getElementById('editStudentForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedStudent = Object.fromEntries(formData);
        await fetch(`${API_BASE}/students/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedStudent),
        });
        loadStudents();
    });
}


async function removeStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        await fetch(`${API_BASE}/students/remove/${id}`, {
            method: 'DELETE',
        });
        loadStudents();
    }
}


// Load all courses
async function loadCourses() {
    const res = await fetch(`${API_BASE}/courses`);
    const courses = await res.json();

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Course List</h2>
        ${courses.map(course => `
            <div class="course">
                <h3>${course.name}</h3>
                <p><strong>Code:</strong> ${course.code}</p>
                <button onclick="showEditCourseForm('${course._id}')">Edit</button>
                <button onclick="removeCourse('${course._id}')">Remove</button>
            </div>
        `).join('')}
        <button onclick="showAddCourseForm()">Add New Course</button>
    `;
}

// Show the form to add a new course
async function showAddCourseForm() {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Add Course</h2>
        <form id="addCourseForm">
            <input type="text" name="name" placeholder="Course Name" required />
            <input type="text" name="code" placeholder="Course Code" required />
            <button type="submit">Add Course</button>
        </form>
    `;
    document.getElementById('addCourseForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        await fetch(`${API_BASE}/courses/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        loadCourses();
    });
}

// Show the form to edit a course
async function showEditCourseForm(id) {
    const res = await fetch(`${API_BASE}/courses`);
    const courses = await res.json();
    const course = courses.find(c => c._id === id);

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Edit Course</h2>
        <form id="editCourseForm">
            <input type="text" name="name" value="${course.name}" required />
            <input type="text" name="code" value="${course.code}" required />
            <button type="submit">Update Course</button>
        </form>
    `;
    document.getElementById('editCourseForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedCourse = Object.fromEntries(formData);
        await fetch(`${API_BASE}/courses/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCourse),
        });
        loadCourses();
    });

}


async function removeCourse(id) {
    if (confirm('Are you sure you want to delete this course?')) {
        await fetch(`${API_BASE}/courses/remove/${id}`, {
            method: 'DELETE',
        });
        loadCourses();
    }
}


// Load students by default when the page loads
window.onload = loadStudents;
