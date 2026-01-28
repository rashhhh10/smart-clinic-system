# Schema Design

## Database: MySQL

### Tables

#### 1. Tables: `Doctor`
Stores information about doctors.

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| `first_name` | VARCHAR(50) | NOT NULL | Doctor's first name |
| `last_name` | VARCHAR(50) | NOT NULL | Doctor's last name |
| `specialty` | VARCHAR(100)| NOT NULL | Medical specialty |
| `email` | VARCHAR(100)| UNIQUE, NOT NULL | Contact email |
| `phone` | VARCHAR(20) | | Contact phone |

#### 2. Table: `Patient`
Stores information about patients.

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| `first_name` | VARCHAR(50) | NOT NULL | Patient's first name |
| `last_name` | VARCHAR(50) | NOT NULL | Patient's last name |
| `email` | VARCHAR(100)| UNIQUE, NOT NULL | Contact email |
| `phone` | VARCHAR(20) | | Phone number |
| `dob` | DATE | NOT NULL | Date of Birth |

#### 3. Table: `Appointment`
Links patients to doctors for specific times.

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| `doctor_id` | BIGINT | FOREIGN KEY (Refs Doctor.id) | The doctor |
| `patient_id` | BIGINT | FOREIGN KEY (Refs Patient.id) | The patient |
| `appointment_time`| DATETIME | NOT NULL | Scheduled time |
| `status` | VARCHAR(20) | DEFAULT 'BOOKED' | Status (BOOKED, CANCELLED, COMPLETED) |

#### 4. Table: `Prescription`
Records medications prescribed during an appointment.

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| `appointment_id`| BIGINT | FOREIGN KEY (Refs Appointment.id)| The related appointment |
| `medication` | VARCHAR(255)| NOT NULL | Name of medication |
| `dosage` | VARCHAR(100)| NOT NULL | Dosage instructions |
| `notes` | TEXT | | Additional notes |

### Relationships
- **Doctor** (1) ---- (N) **Appointment**
- **Patient** (1) ---- (N) **Appointment**
- **Appointment** (1) ---- (1) **Prescription**
