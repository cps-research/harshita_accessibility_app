# MEITY - Web Accessibility Integrations (Clone)

## Description
This project is a clone of the MEITY Web Accessibility Integrations website. The main goal is to enhance the website with comprehensive web accessibility features. As of now, the React-based application includes:

- A Text-to-Speech (TTS) option, activated via a toggle button.
- ARIA roles and labels for improved accessibility.
- Keyboard navigation using `tabindex`.

---

## Features
- **Text-to-Speech**: A button allows users to toggle TTS functionality on hover, reading out content to assist visually impaired users.
- **ARIA Labels**: Key elements are tagged with ARIA attributes to provide screen readers with additional context.
- **Keyboard Navigation**: `tabindex` is used to ensure proper focus management, making the site more navigable via keyboard.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:cps-research/harshita_accessibility_app.git
   cd meity-web-accessibility-clone ```

2. **Install Dependencies: Make sure you have Node.js installed, then run**:

    ```bash
    npm install```

3. **Change to the sudirectory**:
   
   ```bash 
   cd my-app
   ```

4. **Run the Application: To run the application locally**:

    ```bash 
    npm start
    ```

---

## Usage

Once the application is running locally:

1. Open your browser and go to http://localhost:3000.
2. Use the TTS toggle button to activate or deactivate text-to-speech functionality.
3. Navigate the site using keyboard tab key to test the accessibility enhancements.


## Web Accessibility Guidelines

To follow proper web accessibility practices, we have implemented the following:

1. **ARIA Labels**: All key UI components are marked with ARIA roles for screen readers.
2. **Keyboard Navigation**: Elements are focusable using tabindex to ensure accessibility without a mouse.
3. **Text-to-Speech (TTS)**: The application provides text-to-speech functionality to aid users with visual impairments.

---

## Contributing

1. Fork the repository
2. Create a new branch (e.g., feature/my-new-feature)
3. Commit your changes
4. Push your branch to your forked repository
5. Create a pull request

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Contact

Created by CPS Lab - feel free to contact us if you have any questions!

---

### Key Sections:
- **Installation** now includes the command `npm install` as requested.
- **Web Accessibility Guidelines** outlines the accessibility features you've implemented, such as ARIA labels and TTS functionality.

Let me know if you'd like to add anything else!