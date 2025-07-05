# String Calculator TDD Kata

Implementation of the String Calculator TDD Kata for Incubyte Software Craftsperson assessment, built with Node.js, Mocha/Chai, and Express.

## Features
- Handles empty strings (`""` → 0).
- Handles single numbers (`"1"` → 1).
- Handles multiple comma-separated numbers (`"1,2,3,4"` → 10).
- Supports new lines as delimiters (`"1\n2,3"` → 6).
- Supports custom delimiters (`"//;\n1;2"` → 3).
- Throws exceptions for negative numbers (`"1,-2,-3"` → "negative numbers not allowed -2,-3").
- Extra: Ignores numbers > 1000 (`"2,1001"` → 2).
- Extra: Supports multiple delimiters (`"//[*][%]\n1*2%3"` → 6).
- RESTful API endpoint (`POST /add`).

## User Stories
- As a user, I want to sum comma-separated numbers so I can calculate totals easily.
- As a user, I want to use new lines or custom delimiters for input flexibility.
- As a user, I want errors for negative numbers to ensure valid inputs.
- As a developer, I want a REST API to integrate the calculator into web applications.

## Setup
npm install
npm test  # Run tests
npm start # Start API server