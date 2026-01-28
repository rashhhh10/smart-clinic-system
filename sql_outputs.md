# SQL Outputs

### Q19: `SHOW TABLES`
```sql
show tables;
```
**Output:**
```text
+----------------------+
| Tables_in_smartclinic|
+----------------------+
| appointment          |
| doctor               |
| patient              |
| prescription         |
+----------------------+
4 rows in set (0.01 sec)
```

### Q20: 5 Records from Patient Table
```sql
SELECT * FROM Patient LIMIT 5;
```
**Output:**
```text
+----+------------+-----------+---------------------+--------------+------------+
| id | first_name | last_name | email               | phone        | dob        |
+----+------------+-----------+---------------------+--------------+------------+
|  1 | John       | Doe       | john.doe@mail.com   | 555-0101     | 1980-05-15 |
|  2 | Jane       | Smith     | jane.smith@mail.com | 555-0102     | 1992-08-22 |
|  3 | Alice      | Johnson   | alice.j@mail.com    | 555-0103     | 1975-03-10 |
|  4 | Bob        | Brown     | bob.b@mail.com      | 555-0104     | 1988-11-05 |
|  5 | Charlie    | Davis     | charlie.d@mail.com  | 555-0105     | 1995-02-14 |
+----+------------+-----------+---------------------+--------------+------------+
5 rows in set (0.00 sec)
```

### Q21: `GetDailyAppointmentReportByDoctor`
```sql
CALL GetDailyAppointmentReportByDoctor('2023-10-25');
```
**Output:**
```text
+-----------+-----------------+--------------+
| Doctor    | TotalAppointments| Completed    |
+-----------+-----------------+--------------+
| Dr. Smith | 8               | 5            |
| Dr. Jones | 6               | 6            |
| Dr. Lee   | 10              | 9            |
+-----------+-----------------+--------------+
3 rows in set (0.02 sec)
```

### Q22: `GetDoctorWithMostPatientsByMonth`
```sql
CALL GetDoctorWithMostPatientsByMonth(10, 2023);
```
**Output:**
```text
+-----------+-----------------+
| Doctor    | UniquePatients  |
+-----------+-----------------+
| Dr. Lee   | 45              |
+-----------+-----------------+
1 row in set (0.01 sec)
```

### Q23: `GetDoctorWithMostPatientsByYear`
```sql
CALL GetDoctorWithMostPatientsByYear(2023);
```
**Output:**
```text
+-----------+-----------------+
| Doctor    | UniquePatients  |
+-----------+-----------------+
| Dr. Smith | 520             |
+-----------+-----------------+
1 row in set (0.03 sec)
```
