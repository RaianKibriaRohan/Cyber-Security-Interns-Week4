# Week 4: Advanced Threat Detection & Web Security Enhancements

## Overview
The objective of this week was to implement advanced security mechanisms to protect a web application from common threats, detect suspicious activities in real-time, and secure API endpoints using industry best practices.

---

## 1. Intrusion Detection & Monitoring

To detect and prevent unauthorized access attempts, an intrusion detection system was implemented using Fail2Ban on an Ubuntu Virtual Machine.

### A. SSH Brute-Force Protection
- **Action:** Configured Fail2Ban to monitor SSH login attempts. Applied a custom configuration where an IP address is automatically banned after three failed login attempts within a defined time window. 
- **Result:** After simulating multiple failed login attempts using incorrect credentials, Fail2Ban successfully detected the suspicious behavior and banned the attacking IP address.
- **Note:** Addressed a specific Ubuntu 24 logging issue by overriding the `journalmatch` rule to target `_SYSTEMD_UNIT=ssh.service` instead of the default `sshd.service`.

## 2. API Security Hardening

The backend API was secured using multiple layers of protection to prevent unauthorized access and abuse.

### A. Rate Limiting
- **Action:** Implemented rate limiting to restrict the number of requests a client can send within a specific time frame.
- **Result:** Successfully prevented excessive API requests. When the request limit is exceeded, the server responds with a `429 Too Many Requests` error.

### B. API Key Authentication
- **Action:** Implemented an API key-based authentication system to ensure that only authorized users can access the API.
- **Result:** Requests without a valid API key are successfully rejected with a `403 Forbidden` response.

### C. CORS Configuration
- **Action:** Configured Cross-Origin Resource Sharing (CORS) to allow requests only from trusted origins (e.g., `http://localhost:3000`).
- **Result:** Successfully blocked untrusted domains from accessing the backend API.

## 3. Security Headers & Content Security Policy (CSP)

To further enhance web security, HTTP security headers were implemented using middleware.

### A. Implementing Security Policies
- **Action:** Applied a strict Content Security Policy (CSP) to control loaded resources, enabled HTTP Strict Transport Security (HSTS), and implemented additional headers to prevent clickjacking, disable MIME sniffing, and hide server details.
- **Result:** Significantly improved overall browser-level protection, helped prevent Cross-Site Scripting (XSS) attacks, and enforced secure HTTPS communication.

## Summary
In Week 4 (**[Week 4 Report](Week4_Internship.pdf)**), the application’s security was significantly enhanced by implementing both system-level and application-level defenses. Fail2Ban successfully demonstrated real-time intrusion detection by blocking malicious login attempts. Additionally, API security mechanisms such as rate limiting, authentication, and CORS ensured controlled and secure access to backend services. Finally, security headers and CSP policies strengthened the application against common web-based attacks, resulting in a more robust and secure system overall.
