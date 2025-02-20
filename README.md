# Cypress ToDoList Tests

This repository contains end-to-end tests for a ToDoList application using [Cypress](https://www.cypress.io/). These tests ensure that the application's core functionalities—such as adding, completing, and deleting tasks—operate as expected.

## Project Overview

The project demonstrates the use of Cypress for testing a ToDoList application. It includes:

- **Test Files**: Located in the `cypress/e2e` directory, covering various user interactions.
- **Configuration**: Cypress configuration settings.
- **Supporting Files**: Additional files required for test execution.

## Technologies Used

- **[Cypress](https://www.cypress.io/)** - End-to-end testing framework.
- **JavaScript** - Programming language for writing tests.

## Getting Started

To set up and run the tests locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Sandra-Ston/Cypress-ToDoList-testai.git
```

### 2. Navigate to the Project Directory

```bash
cd Cypress-ToDoList-testai
```

### 3. Install Dependencies

Ensure you have `Node.js` and `npm` or `Yarn` installed. Then, install the project dependencies:

```bash
npm install
```

or
```bash
yarn install
```

### 4. Install Cypress

If Cypress isn't already installed as a development dependency, add it:

```bash
npm install cypress --save-dev
```

or
```bash
yarn add cypress --dev
```

## Running the Tests

You can execute the tests in either interactive or headless mode:

### Interactive Mode

```bash
npx cypress open
```

or

```bash
yarn cypress open
```

This command opens the Cypress Test Runner. From there, select the desired test spec (e.g., `todolist.cy.js`) to run the tests in a browser.

### Headless Mode
For running tests without the GUI, useful for continuous integration:

```bash
npx cypress run
```

or

```bash
yarn cypress run
```

## Test Cases

The test suite includes the following scenarios:

- **Adding a New Task** - Verifies that a user can add a new task to the ToDoList.
- **Completing a Task** - Ensures that a user can mark a task as complete.
- **Deleting a Task** - Confirms that a user can remove a task from the ToDoList.
