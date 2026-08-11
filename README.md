BulkMail

BulkMail is a web application designed to make sending bulk emails simple, organized, and user-friendly. It provides a clean interface for entering email details, validating recipient information, sending emails, and maintaining a history of previously sent campaigns.

✨ Features

🎨 Neumorphism UI Design

Modern Neumorphism-inspired user interface.

Soft shadows, rounded components, and subtle depth effects.

Clean and responsive layout for a better user experience.

📧 Bulk Email Sending

Send emails to multiple recipients from a single interface.

Supports email subject, message/content, and recipient details.

Designed to simplify repetitive email-sending tasks.

🔍 Email Validation

Validates email addresses before processing.

Uses Regular Expressions (Regex) to identify properly formatted email addresses.

Helps prevent invalid email addresses from being processed.

✅ Field Validation

Validates required form fields before submission.

Prevents empty or incomplete inputs.

Provides appropriate validation feedback to users.

🗃️ Email History

Includes a dedicated History Page.

Previously sent email details can be viewed from the history section.

Helps users keep track of their bulk email activity.

💾 Database Integration

Email history is stored in a database.

Provides persistent storage instead of relying only on browser-side data.

Makes previously recorded email activity available even after refreshing or revisiting the application.

🛠️ Technologies Used

Frontend: React.js

Styling: CSS / Neumorphism UI

Backend: Node.js, Express.js

Database: MongoDB

Validation: JavaScript + Regular Expressions (Regex)

API Communication: REST API

Deployment: Vercel

📂 Main Functional Flow

User enters the required email details.

Form fields are validated.

Recipient email addresses are checked using Regex.

Invalid inputs are rejected with validation feedback.

Valid email details are processed for bulk sending.

Email activity is stored in the database.

Users can view previous activity through the History Page.

🔐 Validation

BulkMail performs validation at the form level to improve reliability and prevent incorrect data from being submitted.

Email Regex Validation

A Regular Expression is used to check whether an entered email follows a valid email format before it is processed.

Example:

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

This helps identify common invalid formats such as missing @, missing domain names, or incorrectly structured email addresses.

🗄️ Database

MongoDB is used to store email history and related information.

The database integration allows the application to:

Store sent email records.

Retrieve previous email activity.

Display records dynamically on the History Page.

Maintain data persistence across sessions.

📱 Responsive Design

The interface is designed to work across different screen sizes, providing a consistent experience on desktop, tablet, and mobile devices.

🚀 Getting Started

1. Clone the Repository

git clone <your-repository-url>
cd BulkMail

2. Install Dependencies

npm install

If the project contains separate frontend and backend folders, install dependencies inside each folder as required.

3. Configure Environment Variables

Create a .env file and add the required configuration values, such as:

MONGODB_URI=your_mongodb_connection_string

Add any email-service credentials or other backend environment variables required by the project.

4. Start the Application

npm start

For development environments, use the project's configured development command if applicable.

📌 Key Highlights

Neumorphism-based modern UI

Bulk email functionality

Regex-based email validation

Complete form field validation

MongoDB database integration

Email history tracking

Responsive design

REST API-based backend architecture

🎯 Project Objective

The main objective of BulkMail is to provide a simple and efficient platform for sending bulk emails while maintaining proper input validation, persistent email history, and an intuitive user interface.

👨‍💻 Author

Developed as a full-stack web development project using the MERN stack.
