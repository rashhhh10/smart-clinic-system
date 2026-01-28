# Curl Outputs

### Q24: GET All Doctors
```bash
curl -X GET http://localhost:8080/api/doctors
```
**Output:**
```json
[
  {
    "id": 1,
    "firstName": "Sarah",
    "lastName": "Smith",
    "specialty": "Cardiology",
    "email": "sarah.smith@clinic.com"
  },
  {
    "id": 2,
    "firstName": "Michael",
    "lastName": "Jones",
    "specialty": "Pediatrics",
    "email": "michael.jones@clinic.com"
  }
]
```

### Q25: GET Patient Appointments (With Auth)
```bash
curl -X GET http://localhost:8080/api/appointments/me \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9..."
```
**Output:**
```json
[
  {
    "id": 101,
    "doctorName": "Dr. Sarah Smith",
    "appointmentTime": "2023-10-30T10:00:00",
    "status": "CONFIRMED"
  },
  {
    "id": 105,
    "doctorName": "Dr. Michael Jones",
    "appointmentTime": "2023-11-15T14:30:00",
    "status": "BOOKED"
  }
]
```

### Q26: GET Doctor Details by Specialty and Time
```bash
curl -X GET "http://localhost:8080/api/doctors/search?specialty=Cardiology&time=2023-10-30T10:00:00"
```
**Output:**
```json
[
  {
    "id": 1,
    "firstName": "Sarah",
    "lastName": "Smith",
    "specialty": "Cardiology",
    "availability": "AVAILABLE"
  }
]
```
