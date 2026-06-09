# VICA

**Vincent's Coding Academy**

VICA is a modern Learning Management System (LMS) designed for developers, coding bootcamps, mentors, and self-paced learners. The platform focuses on delivering structured learning materials through Programs, Modules, Lessons, Assignments, and Resources with a clean, developer-friendly interface.

## Live Demo

https://vica-navy.vercel.app/

---

## Vision

Build a modern and scalable learning platform where educational content can be managed directly from GitHub repositories while providing a premium learning experience similar to Linear, Raycast, GitBook, and modern developer documentation platforms.

---

## Core Features

### Programs

Learning paths that organize educational content into structured curriculums.

Examples:

* Full Stack JavaScript
* Front End Development
* Back End Development

---

### Modules

Each Program contains multiple Modules that group related learning materials.

Examples:

* JavaScript Fundamentals
* React Fundamentals
* Express.js
* Database Design

---

### Lessons

Lessons are markdown-based learning materials.

Features:

* Grid View
* Table View
* Search
* Markdown Rendering
* GitHub Content Integration (planned)

---

### Assignments

Coding challenges and practical exercises for students.

Features:

* Grid View
* Table View
* Markdown-Based Assignments
* GitHub Content Integration (planned)

---

### Resources

Downloadable learning assets.

Supported Resource Types:

* PDF
* PPT / PPTX
* DOCX
* XLSX
* ZIP
* PNG
* JPG
* Figma Files
* Starter Projects

Features:

* Asset Library Interface
* Resource Icons by File Type
* Download Support
* Resource Details Dialog (planned)

---

## Content Structure

VICA is designed around a hierarchical learning model.

```txt
Program
 └── Module
      ├── Lessons
      ├── Assignments
      └── Resources
```

Example:

```txt
Front End
│
├── React Fundamentals
│   ├── Lessons
│   ├── Assignments
│   └── Resources
│
├── State Management
│   ├── Lessons
│   ├── Assignments
│   └── Resources
│
└── Next.js
    ├── Lessons
    ├── Assignments
    └── Resources
```

---

## GitHub-Driven Architecture

VICA is designed to consume educational content directly from GitHub repositories.

Example repository structure:

```txt
Front End
│
├── 1 - React Fundamentals
│   ├── lessons
│   │   ├── Variables
│   │   │   └── README.md
│   │   └── Components
│   │       └── README.md
│   │
│   ├── assignments
│   │   └── Build Todo App
│   │       └── README.md
│   │
│   └── resources
│       └── Starter Project
│
└── 2 - State Management
```

This architecture allows educators to manage learning materials directly from GitHub while VICA automatically displays them through a user-friendly interface.

---

## Tech Stack

### Frontend

* Next.js 16
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Framer Motion
* Lucide React
* React Icons

### State Management

* Zustand

### Data Fetching

* TanStack Query
* Axios

### Forms

* React Hook Form
* Zod

### Future Integrations

* GitHub API
* Markdown Rendering
* Authentication & Authorization
* Progress Tracking
* Certificates
* AI Learning Assistant

---

## Design Principles

VICA follows several core design principles:

* Developer First
* Modern UI
* High Readability
* Minimal Visual Noise
* Dark Mode Friendly
* Responsive Design
* Windows Explorer Inspired Navigation
* GitBook Inspired Learning Experience

---

## Current Development Status

### Completed

* Layout System
* Navigation
* Programs
* Modules
* Lessons
* Assignments
* Resources
* Grid View
* Table View
* Search
* Design System

### In Progress

* Markdown Viewer
* Lesson Detail Pages
* Assignment Detail Pages

### Planned

* GitHub Integration
* Resource Download System
* Authentication
* Learning Progress Tracking
* Certificates
* AI Features

---

## Author

Vincent Guizot

Built with ❤️ for developers and lifelong learners.
