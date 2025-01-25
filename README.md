# Appointment Booking System

This is a **feature-rich Appointment Booking System** built with **Laravel** for the backend, **Vue.js** for the frontend, and **MySQL** as the database. It provides a clean and user-friendly interface for managing appointments and users.

---

## Features

### User Management
- Add, edit, and delete users.
- View user details in a tabular format (e.g., name, email, actions).
- Fully responsive interface.

### Appointment Management
- Book, view, reschedule, or cancel appointments.
- Calendar integration to visually manage schedules.

### Admin Panel
- Centralized control for managing users and appointments.
- Dashboard for monitoring system activity.

### Secure Authentication
- Role-based access control for admins and regular users.
- Fully secure user authentication system.

---

## Tech Stack

### Backend
- **Laravel**: For handling the backend logic and API endpoints.

### Frontend
- **Vue.js**: For a dynamic and responsive user interface.

### Database
- **MySQL**:  
  - Stores user details, appointment data, and activity logs.

### Others
- **AdminLTE 3**: For the admin panel's UI.  
- **Axios**: For smooth API communication.

---

## Installation

### Prerequisites
- **PHP >= 8.1**  
- **Composer**  
- **Node.js >= 16**  
- **MySQL >= 5.7**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/appointment-booking-system.git
   
2. Navigate to the project directory:
   ```bash
    cd appointment-booking-system
   
3. Install backend dependencies:
   ```bash
    composer install
   
4. Install frontend dependencies:
    ```bash
    npm install
5. Configure the .env file with your database and application settings.

6. Generate the application key:
    ```bash
    php artisan key:generate
    
7. Run migrations to create the database tables:
    ```bash
    php artisan migrate
8. Build frontend assets:
    ```bash
    npm run dev
9. Start the development server:
    ```bash
    php artisan serve
10. Access the app at:
    ```bash
     http://localhost:8000

