document.addEventListener('DOMContentLoaded', function() {
    // Example data for patients, staff, and appointments
    const patients = [
        { id: 1, name: 'John Doe', age: 45, status: 'Recovered' },
        { id: 2, name: 'Jane Smith', age: 34, status: 'Under Treatment' }
    ];

    const staff = [
        { id: 1, name: 'Dr. Emily White', role: 'Doctor', onDuty: true },
        { id: 2, name: 'Nurse John Brown', role: 'Nurse', onDuty: false }
    ];

    const appointments = [
        { id: 1, patientName: 'John Doe', doctorName: 'Dr. Emily White', date: '2024-06-27', status: 'Completed' },
        { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Emily White', date: '2024-06-28', status: 'Scheduled' }
    ];

    // Populate dashboard cards
    document.getElementById('total-patients').textContent = patients.length;
    document.getElementById('available-beds').textContent = 50 - patients.length; // Example logic
    document.getElementById('staff-on-duty').textContent = staff.filter(member => member.onDuty).length;
    document.getElementById('appointments-today').textContent = appointments.filter(appointment => appointment.date === '2024-06-27').length;

    // Populate patients table
    const patientList = document.getElementById('patient-list');
    patients.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.status}</td>
            <td><button>Edit</button> <button>Delete</button></td>
        `;
        patientList.appendChild(row);
    });

    // Populate staff table
    const staffList = document.getElementById('staff-list');
    staff.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.role}</td>
            <td>${member.onDuty ? 'Yes' : 'No'}</td>
            <td><button>Edit</button> <button>Delete</button></td>
        `;
        staffList.appendChild(row);
    });

    // Populate appointments table
    const appointmentList = document.getElementById('appointment-list');
    appointments.forEach(appointment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.id}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.doctorName}</td>
            <td>${appointment.date}</td>
            <td>${appointment.status}</td>
            <td><button>Edit</button> <button>Delete</button></td>
