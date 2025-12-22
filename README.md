

🚀 Task Management System - Technical Test

End of Studies Internship 2026 - Hahn Software Morocco
Developed by Mohamed Azoud | Portfolio: azoud-mohamed.vercel.app

📹 Demo Video

🎥 Watch the Demo Video Here

2-minute walkthrough showing all features: Authentication, Projects, Tasks, Search & Filters

🎯 What I Built

A complete full-stack task management application where users can:

✅ Register and login with JWT authentication

✅ Create and manage projects

✅ Add tasks to projects with due dates

✅ Mark tasks as completed

✅ Track progress with visual indicators

✅ BONUS: Search and filter tasks by keyword, status, and date

🛠️ Technologies Used
Backend

Spring Boot 3.2 - RESTful API

Spring Security + JWT - Secure authentication

MySQL - Database

JUnit 5 - Unit testing (22 tests implemented)

Frontend

React 18 - Modern UI library

Tailwind CSS - Responsive design

Axios - HTTP client

DevOps

Docker + Docker Compose - Complete containerization

Maven - Build automation

🏗️ Architecture
code
Code
download
content_copy
expand_less
project-task-manager/
├── backend/
│   ├── src/main/java/com/taskmanagement/
│   │   ├── config/          # Security & JWT configuration
│   │   ├── controller/      # REST API endpoints
│   │   ├── dto/            # Data transfer objects
│   │   ├── entity/         # JPA entities (User, Project, Task)
│   │   ├── repository/     # Database access
│   │   ├── security/       # JWT utilities
│   │   └── service/        # Business logic
│   ├── src/test/          # Unit tests (22 tests)
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/       # Login page
│   │   │   ├── common/     # Reusable UI components
│   │   │   ├── layout/     # Header, layout
│   │   │   ├── projects/   # Project management
│   │   │   └── tasks/      # Task management
│   │   └── services/       # API integration
│   └── Dockerfile
└── docker-compose.yml      # Full stack orchestration
🚀 Quick Start with Docker (Recommended)
Prerequisites

Docker & Docker Compose installed

Ports 3000, 8080, 3306 available

Run Everything in 2 Commands
code
Bash
download
content_copy
expand_less
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/project-task-manager.git
cd project-task-manager

# 2. Start the application
docker-compose up -d

That's it! 🎉

Frontend: http://localhost:3000

Backend API: http://localhost:8080

MySQL: localhost:3306

Test Credentials
Email	Password	Role
admin@hahn.ma	admin123	Admin
candidate@hahn.ma	test2026	User
💻 Manual Installation (Without Docker)
<details>
<summary>Click to expand manual setup instructions</summary>

Backend Setup
code
Bash
download
content_copy
expand_less
# 1. Create MySQL database
mysql -u root -p
CREATE DATABASE task_manager_db;

# 2. Update application.properties
cd backend/src/main/resources
# Edit application.properties with your MySQL credentials

# 3. Run backend
cd backend
mvn clean install
mvn spring-boot:run

Backend runs on: http://localhost:8080

Frontend Setup
code
Bash
download
content_copy
expand_less
cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:3000

</details>

✅ What I Implemented
Required Features ✓

JWT Authentication (login/register)

Create, Read, Update, Delete Projects

Create, Read, Update, Delete Tasks

Mark tasks as completed

Progress tracking (% completed)

Clean architecture with proper layering

Bonus Features ✓

Docker Compose - One command deployment

Unit Tests - 22 tests covering services and security

Search & Filters - Search tasks, filter by status/date

Modern UI - Tailwind CSS with animations

Error Handling - Proper validation and error messages

🧪 Tests

I implemented 22 unit tests covering critical business logic:

code
Bash
download
content_copy
expand_less
# Run all tests
cd backend
mvn test
Test Coverage

✅ AuthService (3 tests) - Login, Register, JWT

✅ ProjectService (7 tests) - CRUD operations

✅ TaskService (8 tests) - CRUD + Toggle completion

✅ JwtUtil (4 tests) - Token generation/validation

Result: All 22 tests pass ✅

📊 API Endpoints
Authentication
code
Http
download
content_copy
expand_less
POST /api/auth/register  # Register new user
POST /api/auth/login     # Login (returns JWT)
Projects (Protected)
code
Http
download
content_copy
expand_less
GET    /api/projects           # Get all projects
POST   /api/projects           # Create project
GET    /api/projects/{id}      # Get project details
PUT    /api/projects/{id}      # Update project
DELETE /api/projects/{id}      # Delete project
Tasks (Protected)
code
Http
download
content_copy
expand_less
GET    /api/projects/{id}/tasks              # Get project tasks
POST   /api/projects/{id}/tasks              # Create task
PUT    /api/projects/{id}/tasks/{taskId}     # Update task
PATCH  /api/projects/{id}/tasks/{taskId}     # Toggle completion
DELETE /api/projects/{id}/tasks/{taskId}     # Delete task
GET    /api/projects/{id}/tasks/search       # Search & filter
🎨 Screenshots
Login Page

![alt text](./screenshots/login.png)

Modern login interface with Hahn Software branding

Dashboard

![alt text](./screenshots/dashboard.png)

Project list with progress bars

Task Management

![alt text](./screenshots/tasks.png)

Create, complete, and filter tasks

🔐 Security

✅ JWT token-based authentication

✅ Password hashing with BCrypt

✅ Protected API routes

✅ CORS configuration

✅ Input validation

✅ SQL injection protection (JPA)

📈 Project Statistics

Total Lines of Code: ~3,500

Backend Components: 25+ classes

Frontend Components: 15+ components

API Endpoints: 12

Unit Tests: 22 (Services + Security)

Development Time: 3 days

🎯 Technical Decisions
Why Spring Boot?

Professional enterprise framework with excellent security and testing support.

Why React + Tailwind?

Modern stack for rapid UI development with excellent performance.

Why Docker?

Ensures "works on my machine" becomes "works everywhere" - production-ready deployment.

Why Unit Tests?

Tests ensure reliability and make future changes safer. Focused on critical business logic first.

🚧 Future Improvements

After internship submission, I plan to add:

Integration tests (Controllers + Repositories)

Pagination for large datasets

Email notifications for due tasks

Task assignment to team members

Dark mode theme

👨‍💻 About Me

Mohamed Azoud
Full-Stack Developer | Spring Boot & React Enthusiast

🌐 Portfolio: azoud-mohamed.vercel.app

💼 LinkedIn: [Your LinkedIn]

📧 Email: [your.email@example.com]

📱 Phone: [Your Phone]

Why Hahn Software?

I'm passionate about building robust, scalable applications. This project demonstrates my ability to:

Design clean architectures

Write testable code

Deploy containerized applications

Deliver complete solutions under deadline

I'm excited about the opportunity to learn from experienced developers at Hahn Software Morocco and contribute to real-world projects.

📝 Submission Details

Submission Date: December 24, 2025

Repository: [GitHub Link]

Demo Video: [Video Link]

Development Duration: 3 days

Status: ✅ Complete and Tested

🙏 Acknowledgments

Thank you to Hahn Software Morocco for this opportunity to demonstrate my skills. I'm looking forward to discussing this project and the internship in detail.





Developed with ❤️ by Mohamed Azoud

