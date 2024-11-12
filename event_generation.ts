const { google } = require("googleapis");
const calendar = google.calendar("v3");

const createEvent = async (eventDetails) => {
    const auth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
    auth.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    
    const event = {
        summary: eventDetails.summary,
        description: eventDetails.description,
        start: { dateTime: eventDetails.startTime, timeZone: "UTC" },
        end: { dateTime: eventDetails.endTime, timeZone: "UTC" },
        attendees: eventDetails.attendees.map(email => ({ email })),
    };

    await calendar.events.insert({
        auth,
        calendarId: "primary",
        resource: event,
    });
};

const eventDetails = {
    summary: "Interview with Candidate",
    description: "Technical interview for software engineer position.",
    startTime: "2024-11-14T09:00:00Z",
    endTime: "2024-11-14T10:00:00Z",
    attendees: ["interviewer@example.com", "candidate@example.com"]
};

createEvent(eventDetails);
