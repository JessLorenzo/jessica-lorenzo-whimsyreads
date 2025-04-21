# Whimsy Reads

## Overview

Whimsy Reads is a fun and whimsical book club app that allows clubs to create profiles to bring readers together through shared monthly reads, engaging book discussions, and announcing book club meetings. Users can create personalized profiles, join or start book clubs, and stay connected with their book-loving communities in a cozy, creative space.

### Problem Space

Many book lovers struggle to stay connected with their reading communities, especially in a digital age where traditional book clubs can be difficult to organize and maintain. Existing platforms are often geared toward individual readers or focus on book reviews and sales, rather than providing a space for book clubs to foster connection. Whimsy Reads fills this gap by offering a cozy, user-friendly platform designed specifically for book clubs to thrive by making it easy to manage club activities, share monthly picks, and engage in meaningful conversations. Whimsy Reads helps book clubs stay organized and communicate more efficiently with their members.

### User Profile

Whimsy Reads is designed for book lovers of all kinds, whether they’re long-time club members, casual readers looking to join a group, or organizers managing a book club. Organizers will use the app to create and manage club profiles, announce meetings and events, share monthly reads, create polls to vote on upcoming books, and facilitate discussions. Members will use the app to stay updated on events, join conversations, vote for the next reads, upload photos from gatherings, write reviews, explore book picks, and connect with fellow readers.

Special considerations include keeping the user interface intuitive and accessible for a wide range of users—from tech-savvy readers to those less familiar with digital platforms. The app will support core features such as creating and managing book clubs and chapters, scheduling meetings and events, assigning members to chapters, selecting a book of the month, and creating chapter-level voting polls. A whimsical and welcoming design is essential to fostering a warm, creative, and community-driven experience.

### Features

**MUST-HAVES for Organizers/Admins**
Can create and manage a book club profile, including name, description, visibility (public/private), and meeting format (in-person or virtual).
Can share and update the monthly book pick.
Can schedule and announce meetings/events, including date, time, location, and format.
Can create polls for members to vote on the next book selection.
Can facilitate discussions by starting and moderating conversation threads.
Can post updates or announcements for the club.
Can upload photos from events or manage shared media.

**Minimum Viable Product (MVP):**
Homepage with sign up/login
Admin Dashboard / Edit Profile View
Book selection
Display event date/location
Poll creation

## Implementation

### Frontend (React + JavaScript + CSS/Sass)

- Modular React components
- State management with React hooks and context
- Responsive, whimsical design with CSS/Sass
- API integration with Axios

### Backend (Node.js + Express)

- RESTful API to manage users, clubs, books, reviews, and events
- Secure authentication using JWT or sessions
- Route/controller/service architecture

### Database (SQL)

- Normalized schema for users, clubs, chapters, meetings, and reviews
- Foreign keys and indexes for performance

### Core Features

- User authentication
- Profile creation/editing
- Book club creation and joining
- Display/update Book of the Month
- Reviews and star ratings
- Meeting/event input and display

### Deployment & Testing

- Manual testing across features and devices
- Responsive UX polish
- Deployment with Netlify (frontend) and Render (backend)
- Local setup documentation (below)

## Getting Started

### 📦 Frontend (Client) Setup

git clone https://github.com/JessLorenzo/whimsy-reads-client.git
cd whimsy-reads-client
npm install

Create a .env file and add your backend API URL:
VITE_API_URL=http://localhost:8081/api

Then run the development server:
npm run dev

The app should be available at http://localhost:5173/ (or whichever port Vite assigns).

### 🛠️ Backend (Server) Setup

git clone https://github.com/JessLorenzo/whimsy-reads-server.git
cd whimsy-reads-server
npm install

Create a .env file in the root directory with the following:
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_DATABASE=whimsy_reads
PORT=8081
JWT_SECRET=your_secret_key

Then start the backend server:
npm run dev

Use Postman to test API endpoints at http://localhost:8081/api.
Make sure MySQL is running and the database is initialized with your schema and seed data.

### Tech Stack

Frontend: React, CSS/Sass, React Router, Axios
Backend: Node.js, Express.js
Database: MySQL
Libraries/Tools: JWT, Postman, Cloudinary/Firebase (optional)

### APIs

Google Books API – Fetch book title, author, rating, cover image, and summary
Backup: Open Library API, Goodreads API

### Sitemap

- Home / Landing Page
- Login
- Sign Up
- Create Profile Page
- Book Club Profile
- Book of the Month Poll
- Announcements
- Gallery
- Book Reviews
- Events

### Data

Data Model
User – Can be an organizer or member
Book Club – Contains announcements, BOTM, polls, events, announcement, book review form, gallery, member list
Book – Pulled from external API
Poll – Voting for BOTM
Event – Title, date, location
Announcement – Club-wide updates
Membership – Links users to admin/member roles

### Endpoints

📚 Book Clubs
POST /api/clubs
GET /api/clubs/:id

📖 Book of the Month
PUT /api/chapters/:id/book

📊 Polls
POST /api/polls
POST /api/polls/:id/vote

📅 Events
POST /api/events
GET /api/events/:id

👥 Users
POST /api/users/signup

📢 Announcements
POST /api/announcements
GET /api/clubs/:id/announcements

## Future Implementations

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
