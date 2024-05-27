Project Description:

For this course project, I have developed a web application that addresses the OWASP top ten list of security flaws. The application is built using Node.js with Express.js for the backend and plain HTML, CSS, and JavaScript for the frontend. I have chosen to follow the 2021 OWASP list to ensure the project aligns with the latest security standards.

Installation Instructions:
To run the application, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Install dependencies by running npm install.
Set up environment variables as required (e.g., PORT, JWT_SECRET).
Start the server by running npm start.
Access the application in your browser at http://localhost:3000.
Flaws and Fixes:

FLAW 1: Injection
Exact Source Link: https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/controllers/taskController.js
Description: Lack of input validation in task creation allows for potential SQL injection attacks.
Fix: Implemented parameterized queries to prevent SQL injection. Added input validation to sanitize user input before processing.

FLAW 2: Broken Authentication
Exact Source Link: https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/controllers/authController.js
Description: Weak password hashing and lack of brute-force protection make user accounts vulnerable to unauthorized access.
Fix: Implemented bcrypt for secure password hashing. Enforced strong password policies and implemented account lockout mechanism after a certain number of failed login attempts.

FLAW 3: Sensitive Data Exposure
Exact Source Link: https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/routes/taskRoutes.js
Description: Task details are transmitted over the network without encryption, exposing sensitive information to eavesdropping.
Fix: Implemented HTTPS to encrypt communication between client and server. Ensured sensitive data is encrypted at rest and in transit.

FLAW 4: XML External Entities (XXE)
Exact Source Link: https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/routes/taskRoutes.js
Description: The application processes XML input from users without disabling external entity references, leading to XXE attacks.
Fix: Disabled external entity references in XML parsers used by the application. Used a whitelist approach to allow only trusted XML structures.

FLAW 5: Cross-Site Scripting (XSS)
Exact Source Link:https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/frontend/script.js
Description: Lack of input sanitization in task descriptions allows for XSS attacks.
Fix: Implemented input validation and output encoding to sanitize user-generated content before displaying it in the browser. Used frameworks or libraries for automatic XSS prevention.

Overall, the project addresses the specified flaws from the OWASP top ten list by implementing appropriate fixes in the codebase. The application provides a solid foundation for understanding and mitigating common security vulnerabilities in web applications.
