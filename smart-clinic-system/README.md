# Smart Clinic Management System

A comprehensive E-Commerce style Healthcare Platform built with Spring Boot (Backend) and React (Frontend).

## 🚀 Features
- **User Roles**: Patient, Doctor, Admin.
- **Authentication**: Secure JWT-based Login & Registration.
- **Appointments**: Book digitally with your preferred doctor.
- **Services**: Browse clinic services (Cardiology, Pediatrics, etc.).
- **Dashboard**: Validated access for Patients and Doctors.
- **Deployment**:
  - Frontend: Vercel
  - Backend: Docker / Render

## 🛠 Tech Stack
- **Backend**: Java 17, Spring Boot 3, Spring Security, Spring Data JPA, MySQL.
- **Frontend**: React.js (Vite), Tailwind CSS, Axios.
- **DevOps**: Docker, Vercel CLI.

## 📦 How to Push to GitHub
Since this project was initialized locally, you need to push it to a new GitHub repository manually.

1.  **Create Repository**: Go to [GitHub.com/new](https://github.com/new) and create a repository named `smart-clinic-system`.
2.  **Push Code**:
    ```bash
    cd smart-clinic-system
    git remote add origin https://github.com/YOUR_USERNAME/smart-clinic-system.git
    git branch -M main
    git push -u origin main
    ```

## 🌐 Deployment Instructions

### Frontend (Vercel)
The frontend is pre-configured for Vercel.
1.  Push code to GitHub.
2.  Import the repository in Vercel.
3.  Add Environment Variable: `VITE_API_URL` pointing to your deployed backend.

### Backend (Render)
1.  Push code to GitHub.
2.  Create a **New Blueprint** in Render.
3.  Connect your repository.
4.  Render will use the `render.yaml` file to set up the Service and Database.

## 🏃‍♂️ Run Locally
**Backend**:
```bash
cd backend
mvn spring-boot:run
```

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```
