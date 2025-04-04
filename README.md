# Project Title

Whimsy Reads

## Overview

What is your app? Give a brief description in a couple of sentences.

Whimsy Reads is a fun and whimsical book club app that allows clubs to create profiles to bring readers together through shared monthly reads, engaging book discussions, and announcing book club meetings. Users can create personalized profiles, join or start book clubs, and stay connected with their book-loving communities in a cozy, creative space.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

Many book lovers struggle to stay connected with their reading communities, especially in a digital age where traditional book clubs can be difficult to organize and maintain. Existing platforms are often geared toward individual readers or focus on book reviews and sales, rather than providing a space for book clubs to foster connection. Whimsy Reads fills this gap by offering a cozy, user-friendly platform designed specifically for book clubs to thrive by making it easy to manage club activities, share monthly picks, and engage in meaningful conversations. Whimsy Reads helps book clubs stay organized and communicate more efficiently with their members.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

Whimsy Reads is designed for book lovers of all kinds, whether they’re long-time club members, casual readers looking to join a group, or organizers managing a book club. Organizers will use the app to create and manage club profiles, announce meetings and events, share monthly reads, create polls to vote on upcoming books, and facilitate discussions. Members will use the app to stay updated on events, join conversations, vote for the next reads, upload photos from gatherings, write reviews, explore book picks, and connect with fellow readers.

Special considerations include keeping the user interface intuitive and accessible for a wide range of users—from tech-savvy readers to those less familiar with digital platforms. The app will support core features such as creating and managing book clubs and chapters, scheduling meetings and events, assigning members to chapters, selecting a book of the month, and creating chapter-level voting polls. A whimsical and welcoming design is essential to fostering a warm, creative, and community-driven experience.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

MUST HAVES: Book Club Organizers/Admins User Story
Can create and manage a book club profile, including name, description, visibility (public/private), and meeting format (in-person or virtual).
Can share and update the monthly book pick.
Can schedule and announce meetings/events, including date, time, location, and format.
Can create polls for members to vote on the next book selection.
Can facilitate discussions by starting and moderating conversation threads.
Can post updates or announcements for the club.
Can upload photos from events or manage shared media.

Minimum Viable Product (MVP):
Homepage with sign up/login
Admin Dashboard / Edit Profile View
Book selection
Display event date/location
Poll creation

## Implementation

Key Components of Implementation:

1. Frontend Development (React + JavaScript + CSS/Sass)
   Structure the user interface using modular React components
   Manage state and user interactions using React hooks and context where needed
   Style the application with custom CSS and Sass to create a unique, whimsical look and ensure responsive design
   Build user-facing pages and components for book club profiles, announcements, meeting details, etc.
   Handle API calls and display dynamic content from the backend

2. Backend Development (Node.js + Express)
   Build a RESTful API to manage users, book clubs, books, reviews, and meetings
   Implement secure authentication using JWT or session-based login
   Organize backend logic into routes, controllers, and services for maintainability

3. Database (SQL)
   Design a relational schema with normalized tables for users, clubs, books, reviews, and meetings
   Implement foreign key relationships and indexes for efficient querying

4. Core Feature Implementation
   User authentication (signup, login, logout)
   Profile creation and editing
   Book club creation and joining
   Display and update the “Book of the Month” for each club
   Add and display book reviews and star ratings
   Meeting info input and display (date, time, location or virtual link)

5. Testing & Deployment
   Conduct manual testing across features and devices
   Debug and refine UI/UX for consistency and performance
   Deploy the backend and frontend using services like Render, Netlify, or Vercel
   Write setup instructions and documentation for running the app locally and in production

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Front-End:
React
CSS/Sass
React Router
Axios API

Back-End:
Node.js + Express.js
SQL database to store users, clubs, chapters, events, and book info.

Libraries & Tools:
JWT (JSON Web Tokens) – For user authentication and role-based access (organizer vs. member (if implemented)).
Cloudinary or Firebase Storage – For photo uploads (if implemented).

Development Tools
Postman – For testing API endpoints.
Git + GitHub

Potential Limitations
Image Uploads (Cloudinary/Firebase) require user authentication and handling file size limits. Its also new to me so would require time to learn how to use it.
Role-Based Access Control (RBAC) can add complexity—especially with multiple roles like organizer, member, and admin.

### APIs

List any external sources of data that will be used in your app.

Google Books API – This API will be used to fetch information about the book of the month selected by the club. The app will use it to display key details such as:
Book title and author
Cover image
Average rating
Brief description/summary

Back-up APIs:
Open Library API
Goodreads API (specifically Goodreads-API-Node)

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Home / Landing Page
Intro to Whimsy Reads with options to log in or sign up.

Login Page / Authentication for Club Organizers

Sign-Up Page / Account creation for Club Organizer.

Admin Settings Page
Assign admin roles, edit club details, and manage chapter and member assignments.

Book Club Profile Page
Displays overall club details, list of chapters, member overview, announcements, and access to chapter-filtered events and polls.

Book of the Month Page
Each chapter can feature its own monthly pick, using data from the Google Books API.

Polls Page
Create and manage polls for chapter members to vote on upcoming reads.

Events Page
Create and manage events at both the club and chapter levels.

Site Map:
[Home Page]
|
v
[Login / Sign-Up]
|
v
[Organizer Dashboard]
|
├──> [Book Club Profile Page]
| | ├──> [Book of the Month]
| | ├──> [Polls]
| | └──> [Events]
|
└──> [Admin Settings Page]

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

You can view the mockups in this [PDF file](assets/mockups/Mockups Whimsy Reads.pdf)

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

Data Model

User:
Users can be club organizers or members.
Organizers may have elevated permissions via is_admin.

Book Club:
A top-level container created by an organizer
Will display:
Announcements
A Book of the Month
Its own Polls
Events specific to that group
A list of members via memberships

Book:
Selected by the book club as its current read.
Includes title, author, and genre.
Pulled from an external source (like Google Books API).

Poll:
Created to vote on the next book.
Contains multiple book options.

Meeting Events:
Monthly meetups, discussions, etc.
Includes title, date, and location (in-person or virtual).

Announcements:
Created at the BookClub level to share updates with all members.

IF POSSIBLE- For Membership:
Connects users to chapters.
Tracks user role (e.g., is_admin), and helps manage chapter assignments.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

📚 Book Clubs

POST /api/clubs
Create a new book club
Body: { name, description, visibility }
Example Response:
{ "id": "1", "name": "Whimsical Readers", "visibility": "private" }

GET /api/clubs/:id
Get a single book club and its chapters
Example Response:
{
"id": "1",
"name": "Whimsical Readers",
"chapters": [{ "id": "ch1", "name": "Chapter 1" }]
}

📖 Book of the Month

PUT /api/chapters/:id/book
Set or update the chapter's Book of the Month by searching for a title using the Google Books API.
Body: { "search": "The Night Circus" }
Example Response:
{
"message": "Book of the Month updated!",
"book": {
"title": "The Night Circus",
"author": "Erin Morgenstern",
"description": "A phantasmagorical novel of magic, love, and rivalry...",
"rating": 4.2,
"thumbnail": "https://books.google.com/some-thumbnail.jpg"
}
}

📊 Polls

POST /api/polls
Create a poll in a chapter
Body: { chapterId, question, options }
Example Response:
{ "id": "poll1", "question": "Vote for next book", "options": ["Book A", "Book B", "Book C"] }

POST /api/polls/:id/vote
Submit a vote for a poll option
Body: { userId, optionId }
Example Response:
{ "message": "Vote submitted" }

📅 Events

POST /api/events
Create an event for a chapter or club
Body: { title, date, location, chapterId (optional), clubId }
Example Response:
{
"id": "evt1",
"title": "April Book Chat",
"date": "2025-04-15T19:00:00Z",
"location": "Zoom",
"chapterId": "ch1",
"createdAt": "2025-03-24T17:00:00Z"
}

GET /api/events/:id
Get event details
Example Response:
{ "id": "evt1", "title": "March Meetup", "rsvpCount": 12 }

👥 Users & Memberships

POST /api/users/signup
Create a new user
Body: { name, email, password, role }
Example Response:
{ "id": "u123", "name": "Taylor", "role": "organizer" }

📢 Announcements

POST /api/announcements
Post a club-level announcement
Body: { clubId, message }
Example Response:
{ "id": "ann1", "message": "Next meeting is March 30!" }

GET /api/clubs/:id/announcements
Get announcements for a club
Example Response:
[
{ "id": "ann1", "message": "Next meeting is March 30!" },
{ "id": "ann2", "message": "Poll closes soon!" }
]

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

🚀 Sprint 1: Planning & Core Setup (March 24 – March 28)
Finalize feature list and define MVP
Design wireframes and data models
Set up GitHub repo
Initialize frontend and backend environments
Build core backend models: users, clubs, books, reviews
Set up routing and layout structure on the frontend
Begin applying base styles using CSS/Sass

🔧 Sprint 2: Feature Development (March 29 – April 2)
Implement user authentication (signup/login)
Build profile creation and editing
Add functionality to create/join book clubs
Implement “Book of the Month” and meeting info features
Enable book reviews and ratings
Connect frontend to backend APIs
Continue styling UI with custom CSS/Sass
Ensure responsive design

✅ Sprint 3: Testing, Polish & Presentation (April 3 – April 6)
Conduct testing (manual and/or user testing)
Debug and refine key features
Polish frontend styles and improve UX
Deploy the app

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

LIKE-TO-HAVES:
Admin Additional Features
Can create chapters within their book club to divide members into smaller groups for more focused discussions or local meetups.
Can approve or deny membership requests for private clubs.
Can assign new members to a chapter automatically or manually upon approval.

Club Members User Story
Can create a personalized user profile with favorite genres, a bio, and displays the book clubs they have joined.
Can browse and request to join public or private book clubs.
Are automatically assigned to a chapter upon joining a book club (with possible updates by organizers).
Can view current and past book picks for their club(s).
Can RSVP to meetings and events at the club or chapter level and receive reminders.
Can vote in polls for upcoming book selections.
Can participate in discussions both at the club-wide level and within their chapter.
Can submit book reviews and rate books the club has read.
Can upload photos from events and view shared media from others.
Can receive notifications for club or chapter activities, replies, and announcements.

Future Additions:
Chapters & separation of BOTM and meetings per Chapters (or subgroups)
Member accounts & login
Voting
Discussions
Photo uploads
Notifications
Personalized member profiles
