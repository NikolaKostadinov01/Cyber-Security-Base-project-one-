# **Cyber Security Base - Course Series**
University of Helsinki, FI

**[Course page](https://cybersecuritybase.mooc.fi/)**

## **Project I**

**Project Description:**

For this course project, I have developed a web application using JavaScript that addresses the OWASP top ten list of security flaws. The application is built using Node.js with Express.js for the backend and plain HTML, CSS, and JavaScript for the frontend. I have chosen to follow the 2021 OWASP list to ensure the project aligns with the latest security standards.

## **Installation Instructions:**

**To run the application, follow these steps:**

* Clone the repository to your local machine.

* Navigate to the project directory in your terminal.

* Install dependencies by running npm install.

* Set up environment variables as required (e.g., PORT, JWT_SECRET).

* Start the server by running npm start.

* Access the application in your browser at http://localhost:3000.

## **FLAW 1: Injection**

**[Exact Source Link](https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/controllers/taskController.js)**

**Description:** The flaw in this code snippet lies in the lack of input validation during task creation, leaving the application vulnerable to SQL injection attacks. Without proper validation, malicious users can inject arbitrary SQL code into the input fields, potentially compromising the integrity of the database.

**How to Fix It:** To address this issue, I have implemented parameterized queries in the code. By separating SQL code from user input, parameterized queries prevent attackers from injecting malicious SQL statements. Additionally, I have added input validation to sanitize user input before processing, ensuring that only expected data types and formats are accepted.

## **FLAW 2: Broken Authentication**

**[Exact Source Link](https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/routes/authRoutes.js)**

**Description:** This code snippet illustrates weak password hashing and a lack of brute-force protection, making user accounts vulnerable to unauthorized access. Without proper security measures, attackers can easily crack weakly hashed passwords or launch brute-force attacks to gain unauthorized access to user accounts.

**How to Fix It:** To address this vulnerability, I have implemented bcrypt for secure password hashing. Bcrypt is a robust cryptographic hashing algorithm that generates strong, salted hashes, making it extremely difficult for attackers to crack passwords. Additionally, I have enforced strong password policies and implemented an account lockout mechanism after a certain number of failed login attempts, further enhancing authentication security.

## **FLAW 3: Sensitive Data Exposure**

**[Exact Source Link](https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/routes/taskRoutes.js)**

**Description:** In this code snippet, task details are transmitted over the network without encryption, exposing sensitive information to potential eavesdropping attacks. Without proper encryption mechanisms in place, attackers can intercept and access sensitive data transmitted between the client and server.

**How to Fix It:** To mitigate this risk, I have implemented HTTPS to encrypt communication between the client and server. HTTPS encrypts data transmitted over the network, preventing eavesdropping and data interception by malicious actors. Additionally, I have ensured that sensitive data is encrypted at rest and in transit, further protecting it from unauthorized access.

## **FLAW 4: XML External Entities (XXE)**

**[Exact Source Link](https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/backend/routes/taskRoutes.js)**

**Description:** The vulnerability in this code snippet arises from the application processing XML input from users without disabling external entity references. This exposes the application to XML External Entities (XXE) attacks, where attackers can exploit vulnerable XML parsers to access sensitive data or execute arbitrary code.

**How to Fix It:** To address this vulnerability, I have disabled external entity references in XML parsers used by the application. By preventing the application from resolving external entities, we mitigate the risk of XXE attacks. Additionally, I have employed a whitelist approach to allow only trusted XML structures, further reducing the attack surface for potential exploitation.

## **FLAW 5: Cross-Site Scripting (XSS)**

**[Exact Source Link](https://github.com/NikolaKostadinov01/Cyber-Security-Base-project-one-/blob/main/frontend/script.js)**

**Description:** The flaw in this code snippet stems from the lack of input sanitization in task descriptions, leaving the application vulnerable to Cross-Site Scripting (XSS) attacks. Without proper input validation and output encoding, attackers can inject malicious scripts into input fields, potentially compromising user data or executing unauthorized actions in the context of other users.

**How to Fix It:** To mitigate the risk of XSS attacks, I have implemented input validation and output encoding to sanitize user-generated content before displaying it in the browser. Input validation ensures that user-generated content meets expected criteria, preventing malicious script injection. Output encoding converts potentially dangerous characters into their HTML entities, rendering them harmless. Additionally, leveraging frameworks or libraries for XSS prevention adds an extra layer of security.

## **References**

**FLAW 1: Injection**
* [1] Anley, Chris, et al. "Advanced SQL injection in SQL server applications." Technical Report. Next Generation Security Software Ltd. (2002). pp. 7-13

**FLAW 2: Broken Authentication**
* [2] Bonneau, Joseph. "The science of guessing: analyzing an anonymized corpus of 70 million passwords." Proceedings of the 2012 IEEE Symposium on Security and Privacy. IEEE Computer Society, (2012). pp. 4-13

**FLAW 3: Sensitive Data Exposure**
* [3] Rescorla, Eric. "HTTP over TLS." RFC 2818 (Best Current Practice). (2000). pp. 6-17

**FLAW 4: XML External Entities (XXE)**
* [4] Sullivan, Bryan. "Security Briefs - XML Denial of Service Attacks and Defenses." (2009), pp. 10-15.
  
**FLAW 5: Cross-Site Scripting (XSS)**
* [5] Shanmugam, Jayamsakthi, and Murugesan Ponnavaikko. "Cross Site Scripting-Latest developments and solutions: A survey." (2008), pp. 5-18.
