# Polling System API

This is a simple polling system API built with Node.js and [Database of Your Choice]. The API allows users to create, manage, and vote on polls.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating a Question](#creating-a-question)
  - [Adding Options to a Question](#adding-options-to-a-question)
  - [Adding a Vote to an Option](#adding-a-vote-to-an-option)
  - [Deleting a Question](#deleting-a-question)
  - [Deleting an Option](#deleting-an-option)
  - [Viewing a Question](#viewing-a-question)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Database of Your Choice] set up and configured

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/polling-system-api.git

2. Navigate to the project directory:
   
   ```bash
   Navigate to the project directory:

3. Configure your environment variables (if needed).

4. Install dependencies:

    ```bash
    npm install

  5. Run the server:

    ```bash
    npm start



  # Usage

  1. Creating a Question
      ```bash
      POST /api/v1/questions/create
    
  2. Request Body:
     ```bash
     {
     "title": "Who is your favorite from the Ninjas Mentors"
     }


  3. Adding Options to a Question
      ```bash
      POST /api/v1/questions/create

  4. Creating a Question
      ```bash
      POST /api/v1/questions/:id/options/create

  5. Request Body:
      ```bash
       {
       "text": "Aakash Tyagi"
       }

  6. Adding a Vote to an Option
      ```bash
      POST /api/v1/options/:id/add_vote

  7. Deleting a Question
      ```bash
     DELETE /api/v1/questions/:id

8. Deleting an Option

    ```bash
     DELETE /api/v1/options/:id/delete

9. Viewing a Question

    ```bash
     GET /api/v1/questions/:id

# Folder Structure

- src/
  - controllers/
    - question.controller.js
    - option.controller.js
  - models/
    - questions.model.js
    - options.model.js
  - routes/
    - question.routes.js
    - option.routes.js
  - utils/
    - asyncHandler.js
    - ApiResponse.js
    - ApiError.js
- vercel.json
- app.js
- .env.sample
- package.json
- README.md


# API Endpoints


- `/api/v1/questions/create` (POST)
- `/api/v1/questions/:id/options/create` (POST)
- `/api/v1/options/:id/add_vote` (POST)
- `/api/v1/questions/:id` (GET)
- `/api/v1/questions/:id` (DELETE)
- `/api/v1/options/:id/delete` (DELETE)


# Deployment
This project can be easily deployed to Vercel using the provided vercel.json configuration.

# Contributing
Contributions are welcome! Feel free to open issues and pull requests.

# License
This project is licensed under the [Ramavtar Nagar] License - see the LICENSE file for details.

# Response Example:

  ```bash
  {
    "id": 1,
    "title": "Who is your favorite from the Ninjas Mentors",
    "options": [
      {
        "id": 1,
        "text": "Aakash Tyagi",
        "votes": 100,
        "link_to_vote": "http://localhost:8000/options/1/add_vote"
      },
      // ... other options
    ]
  }