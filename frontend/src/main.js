// Sample Data (representing what would come from the backend)
const sampleStudents = [
    { id: 'CS001', name: 'John Doe', gpa: 2.33, risk: 'High' },
    { id: 'CS002', name: 'Jane Smith', gpa: 5.00, risk: 'Low' },
    { id: 'CS003', name: 'Bob Wilson', gpa: 0.67, risk: 'High' },
    { id: 'CS004', name: 'Alice Brown', gpa: 3.50, risk: 'Low' },
    { id: 'CS005', name: 'Charlie Davis', gpa: 2.10, risk: 'Medium' }
];

function renderDashboard(students) {
    const tableBody = document.getElementById('student-table-body');
    const totalEl = document.getElementById('total-students');
    const highEl = document.getElementById('high-risk-count');
    const mediumEl = document.getElementById('medium-risk-count');
    const lowEl = document.getElementById('low-risk-count');

    tableBody.innerHTML = '';
    
    let high = 0, medium = 0, low = 0;

    students.forEach(s => {
        if (s.risk === 'High') high++;
        else if (s.risk === 'Medium') medium++;
        else low++;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${s.name}</td>
            <td>${s.id}</td>
            <td>${s.gpa.toFixed(2)}</td>
            <td><span class="badge badge-${s.risk.toLowerCase()}">${s.risk}</span></td>
            <td><button class="btn" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; background: rgba(99, 102, 241, 0.2); color: var(--primary)">View Bio</button></td>
        `;
        tableBody.appendChild(row);
    });

    totalEl.textContent = students.length;
    highEl.textContent = high;
    mediumEl.textContent = medium;
    lowEl.textContent = low;
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard(sampleStudents);
});

// Simulate File Upload
document.getElementById('file-upload').addEventListener('change', (e) => {
    alert('File uploaded successfully! Processing risk analysis...');
    // Real implementation would send to backend here
});
