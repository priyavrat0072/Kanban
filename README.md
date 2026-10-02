# Kanban Board

A simple and responsive Kanban Board application built with React and Tailwind CSS.
It allows users to create, manage, edit, delete, and move tasks between different stages.

## Features

* Create new tasks
* Add task title, description, and priority
* Edit tasks
* Delete tasks
* View task details
* Drag and drop tasks between columns
* Three task stages:

  * To Do
  * In Progress
  * Done
* Tasks are saved in `localStorage`
* Responsive design for different screen sizes

## Tech Stack

* React
* Tailwind CSS
* JavaScript
* Context API
* dnd-kit
* localStorage

## Project Structure

```text
src/
├── components/
│   ├── Board.jsx
│   ├── Column.jsx
│   ├── Task.jsx
│   ├── Taskform.jsx
│   ├── TaskModal.jsx
│   ├── TaskDetailModel.jsx
│   ├── Header.jsx
│   └── context/
│       └── TaskContext.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Build for Production

```bash
npm run build
```

## How It Works

Tasks are managed using React Context API.
The task data is stored in `localStorage`, so tasks remain available after refreshing the page.

Drag and drop is implemented using `dnd-kit`, allowing tasks to be moved between the three Kanban columns.

## Author

Priyavrat Singh Chouhan
