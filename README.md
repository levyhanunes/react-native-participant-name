## Description

This project is a mobile application developed in React Native with Expo, allowing you to create an event attendance list. With this application, you can add participants, remove them, and view the updated list in real-time.

**Preview:**

[![Preview](https://github.com/levyhanunes/react-native-participant-name/blob/main/assets/56304278/d20bbf0a-cdca-4e59-ae8d-5c5a985c69a9.gif)](https://github.com/levyhanunes/react-native-participant-name/blob/main/assets/56304278/d20bbf0a-cdca-4e59-ae8d-5c5a985c69a9.gif)

## Features and Functionality

- **Add Participants**: Enter a participant's name in a text field and add them to the attendance list.
- **Duplicate Checking**: Before adding a participant, the application checks if there is already someone in the list with the same name and displays a warning if a duplicate is found.
- **Remove Participants**: Each participant in the list has a removal button, enabling you to delete them from the attendance list.
- **Display Attendance List**: The list of participants is displayed in real-time using the FlatList component from React Native.
- **Feedback Messages**: The application provides alert messages to inform the user about actions performed, such as adding a duplicate participant or confirming the removal of a participant.

This application serves as a simple example and can be used as a starting point for developing more advanced features, such as database integration or user authentication.

## Technologies Used

- React Native: JavaScript framework for cross-platform mobile application development.
- Expo: Platform for developing React Native mobile applications, simplifying the setup and publishing process.
- TypeScript: Programming language that adds static typing to JavaScript, providing increased security and productivity during development.
- React Hooks: Use of useState for managing component state and useEffect for handling side effects.
- React Native Components: Utilization of components such as Text, TextInput, TouchableOpacity, and FlatList to build the application interface.
- Alert: Native React Native component for displaying alerts and messages to the user.

## Installation Instructions

1. Clone this repository to your local machine.
2. Make sure you have the React Native development environment with Expo properly configured.
3. Navigate to the project's root folder and run the `npm install` command to install dependencies.
4. Run the `expo start` command to start the Expo development server.
5. Use the Expo app on your mobile device to scan the QR code displayed in the terminal or access the app directly on the emulator.

**Note**: This project is a didactic example and may have limitations in terms of functionality and security. Feel free to use, modify, and adapt it to your needs.
