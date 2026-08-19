# Task App

A modern task management web application built with React and Tailwind CSS. The application provides a simple and responsive interface for creating, organizing, and managing tasks with a focus on usability and clean UI design.

## Live Demo

[View the live website](render-deployment-url)

## Features

* Create tasks
* Set task priorities
* Persist task data using browser local storage
* Responsive user interface
* Clean and modern UI
* Component-based React architecture

## Tech Stack

* React.js
* Tailwind CSS
* Vite
* JavaScript
* Browser Local Storage

## Getting Started

### Prerequisites

For local development, make sure you have the following installed:

* Node.js
* npm

Node.js and npm are used for installing dependencies, running the development server, and creating production builds. They are not required by users to access the deployed website.

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-directory>
```

Install the dependencies:

```bash
npm install
```

### Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
├── pages/
├── App.jsx
├── main.jsx
└── ...
```

The project follows a component-based React architecture, with reusable UI components separated from page-level components.

## Data Persistence

Task data is stored in the browser using `localStorage`. This allows tasks to remain available after refreshing the page or reopening the website in the same browser.

Because the application currently uses client-side storage, task data is specific to the browser and device where it was created.

## Design

The application focuses on a clean and minimal interface with an emphasis on:

* Clear visual hierarchy
* Simple task creation and management
* Responsive layouts
* Consistent spacing and typography
* Intuitive interactions

## License

This project is open source in initial development.

All rights are reserved by the author unless otherwise stated. You may view the source code for reference, but permission is not granted to copy, modify, distribute, or use the code commercially without explicit permission from the author.

## More

Built with React and Tailwind CSS as a frontend web development project, with a focus on component architecture, state management, responsive UI design, and client-side data persistence.
