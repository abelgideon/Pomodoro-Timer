# Pomodoro Timer

The Pomodoro Timer helps users manage their work and break intervals by following the Pomodoro technique. It provides a simple interface to set work session and break durations, start or pause the timer, and reset it.

## Features

- **Session and Break Timer**: Allows you to set custom durations for work and break sessions.
- **Start/Pause Timer**: Toggle the timer to start or pause the countdown.
- **Reset Functionality**: Reset both the timer and the session/break lengths to default values.
- **Audio Alert**: A beep sound plays when the session or break ends, indicating it's time to switch.
- **Responsive Design**: The app is mobile-friendly and adapts to different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For layout and styling.
- **JavaScript**: For implementing the logic of the timer and user interactions.

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js](https://nodejs.org/).
- **npm or yarn**: Comes with Node.js or can be installed separately.

### Installation

1. Clone the repository:  
   `git clone https://github.com/abelgideon/Pomodoro-Timer.git`

2. Navigate to the project directory:  
   `cd pomodoro-timer`

3. Install dependencies:  
   `npm install`

4. Start the development server:  
   `npm start`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Local Usage**:
    - Adjust the session and break durations using the `+` and `-` buttons.
    - Click the **Play** button to start the timer.
    - Click **Pause** to stop the timer.
    - Click the **Reset** button to reset both the session and break timers to their default values (25 minutes for session, 5 minutes for break).
    - The timer will automatically switch between session and break, with an alert sound playing when the time is up.

2. **GitHub Pages Deployment**: 
    
    Alternatively, you can access the live site [here](https://abelgideon.github.io/Pomodoro-Timer/).

## File Structure

- `App.js`: The main React component that handles timer logic and user interactions.
- `index.js`: Entry point for rendering the React app.
- `styles.css`: Styling for the application.

## Project Highlights

### Time Management

- Customizable session and break lengths for better work and relaxation intervals.
- Real-time countdown displayed with minutes and seconds, formatted with leading zeros.

### Interactive UI

- Buttons for starting, pausing, and resetting the timer.
- Clear visual updates for session and break status.

### Audio Feedback

- A beep sound notifies the user when the session or break ends, ensuring they are alerted when to switch.

### Mobile-Friendly Design

- Designed with responsiveness in mind for a smooth experience on both mobile and desktop devices.

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.
