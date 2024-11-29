# SpringBootWebSockets
This project demonstrates the implementation of WebSockets in a Spring Boot application, enabling real-time message exchange between users in the same chat room. STOMP over WebSocket is used for message handling.

# Table of Contents

1. [SpringBootWebSockets](#springbootwebsockets)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
   - [Clone the repository](#clone-the-repository)
   - [Build the SpringBoot application](#build-the-springboot-application)
   - [Run the application](#run-the-application)
4. [Testing the Application](#testing-the-application)
5. [Dependencies](#dependencies)


## Prerequisites
1. Java (8 or later)
2. Spring Boot (WebSocket module)
3. Maven (for dependency management)

## Setup

1. **Clone the repository**:

```bash
git clone git@github.com:aditya-8-88/SpringBootWebSockets.git
cd SpringBootWebSockets
```

2. **Build the SpringBoot application**

3. **Run the application**: Start the Spring Boot server.

## Screenshots
![Screenshot from 2024-11-29 22-50-47](https://github.com/user-attachments/assets/4d047aac-377e-4630-9752-746f9748b107)


## Testing the Application
1. Open two tabs in your browser.
2. Navigate to the chat interface (e.g., http://localhost:9000).
3. Enter the same room name in both tabs.
4. Send a message from one tab, and observe it appearing in real time on the other tab.

## Dependencies
The project uses the following key dependencies:

1. **Spring Boot Starter WebSocket**: For WebSocket support.
2. **SockJS and STOMP**: For fallback support and message communication.
3. **Bootstrap and jQuery**: For a responsive frontend. You can modify the dependencies in pom.xml as needed to add or upgrade libraries.
