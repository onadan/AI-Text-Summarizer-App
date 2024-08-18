# AI-Text-Summarizer-App

🚀 Check out the project I built with Postman Student Programs! I made a full-stack AI text summarizer app using Replit, Node.js, Express, and the Hugging Face API. You can too: https://bit.ly/pbl-aits

This is a simple AI Text Summarizer application built with Node.js and Express. The application allows users to input text and receive a summarized version of the text using an AI model.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/onadan/ai-text-summarizer-app.git
   cd ai-text-summarizer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Paste the text you want to summarize into the textarea provided.
3. Click the "Summarize" button.
4. The summarized text will appear in the output textarea.

## Project Structure

- `index.js`: The main server file that sets up the Express server and handles the endpoint.
- `public/`: Contains the static files for the frontend, including HTML, CSS, and JavaScript.
- `summarize.js`: Contains the logic for summarizing the text.
- `package.json`: Contains the project metadata and dependencies.
