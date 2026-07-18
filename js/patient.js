function showUpcoming() {

    document.getElementById("upcomingBtn").classList.add("active");
    document.getElementById("pastBtn").classList.remove("active");

    // Load Upcoming appointments here

}

function showPast() {

    document.getElementById("pastBtn").classList.add("active");
    document.getElementById("upcomingBtn").classList.remove("active");

    // Load Past appointments here

}

const upcomingAppointments = [
    {
        id: "A001",
        doctor: "Dr. John Smith",
        date: "2026-08-02",
        time: "09:30 AM",
        status: "Upcoming"
    },
    {
        id: "A002",
        doctor: "Dr. Emily Brown",
        date: "2026-08-05",
        time: "11:00 AM",
        status: "Upcoming"
    },
    {
        id: "A003",
        doctor: "Dr. Michael Lee",
        date: "2026-08-10",
        time: "02:00 PM",
        status: "Upcoming"
    }
];

const pastAppointments = [
    {
        id: "A004",
        doctor: "Dr. David Silva",
        date: "2026-07-18",
        time: "10:00 AM",
        status: "Completed"
    },
    {
        id: "A005",
        doctor: "Dr. Sarah Wilson",
        date: "2026-07-10",
        time: "03:30 PM",
        status: "Completed"
    },
    {
        id: "A006",
        doctor: "Dr. Robert Green",
        date: "2026-07-02",
        time: "08:45 AM",
        status: "Completed"
    }
];

function loadAppointments(data) {

    const table = document.getElementById("appointmentTable");

    table.innerHTML = "";

    data.forEach((appointment) => {

        table.innerHTML += `
            <tr>

                <td>${appointment.id}</td>

                <td>${appointment.doctor}</td>

                <td>${appointment.date}</td>

                <td>${appointment.time}</td>

                <td>
                    <span class="badge ${
                        appointment.status === "Upcoming"
                            ? "bg-warning text-dark"
                            : "bg-success"
                    }">
                        ${appointment.status}
                    </span>
                </td>

                <td>
                    <button class="btn btn-sm btn-outline-primary">
                        View
                    </button>
                </td>

            </tr>
        `;

    });

}

function showUpcoming() {

    document.getElementById("upcomingBtn").classList.add("active");
    document.getElementById("pastBtn").classList.remove("active");

    loadAppointments(upcomingAppointments);

}

function showPast() {

    document.getElementById("pastBtn").classList.add("active");
    document.getElementById("upcomingBtn").classList.remove("active");

    loadAppointments(pastAppointments);

}

window.onload = function () {

    showUpcoming();

};