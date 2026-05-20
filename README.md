# Week 7 Assignments

## Project Overview

This project contains multiple React.js mini applications developed using **Vite**. The project demonstrates component-based architecture, props, state management, list rendering, filtering, and reusable UI components.

The project includes:

* Task Manager Application
* Products Page
* Country Explorer Page

---

# Technologies Used

* React.js
* Vite
* JavaScript (ES6)
* CSS
* JSX

---

# Project Structure

```bash
week-7-assignments-main/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │
│   │   ├── Country-Explorer-Page/
│   │   │   ├── CountryCard.jsx
│   │   │   ├── CountryExplorer.jsx
│   │   │   ├── CountryList.jsx
│   │   │   └── SearchBar.jsx
│   │   │
│   │   ├── Products-Page/
│   │   │   ├── Product.jsx
│   │   │   └── Products.jsx
│   │   │
│   │   └── TaskManager-App/
│   │       ├── AddTaskForm.jsx
│   │       ├── TaskCount.jsx
│   │       ├── TaskList.jsx
│   │       └── TaskManager.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Features

## 1. Task Manager Application

### Features

* Add new tasks
* Display task list
* Count total tasks
* Reusable components
* State management using `useState`

### Components Used

* `TaskManager.jsx`
* `AddTaskForm.jsx`
* `TaskList.jsx`
* `TaskCount.jsx`

---

## 2. Products Page

### Features

* Display product information
* Reusable product cards
* Dynamic rendering using props

### Components Used

* `Products.jsx`
* `Product.jsx`

---

## 3. Country Explorer Page

### Features

* Search countries
* Display country cards
* Filter countries dynamically
* Reusable search bar component

### Components Used

* `CountryExplorer.jsx`
* `CountryList.jsx`
* `CountryCard.jsx`
* `SearchBar.jsx`

---

# React Concepts Used

* Functional Components
* Props
* State Management (`useState`)
* Event Handling
* Conditional Rendering
* List Rendering using `map()`
* Component Reusability
* Controlled Components

---

# Installation and Setup

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Navigate to Project Folder

```bash
cd week-7-assignments-main
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:5173
```

---

# Available Scripts

## Start Development Server

```bash
npm run dev
```

---

## Create Production Build

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

# Learning Outcomes

This project helps in understanding:

* React component structure
* State management basics
* Passing props between components
* Building reusable UI components
* Handling user input
* Dynamic rendering in React
* Organizing React projects

---

# Future Improvements

* Add API integration
* Add routing using React Router
* Improve UI responsiveness
* Add local storage support
* Add delete and edit task functionality
* Add pagination and advanced filters

---

# Author

Developed as part of Week 7 React Assignments.
