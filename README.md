# Weather App

A simple weather information application built with Node.js, Express, and EJS. This app fetches weather data from the OpenWeatherMap API and displays it to the user.

## Features

- Fetch current weather information for any city.
- Display weather details including temperature, weather description, and more.
- User-friendly interface with EJS templating.
- Error handling for incorrect city names or API issues.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Axios (for making API requests)
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```sh
    API_KEY=YOUR_API_KEY_HERE
    ```

4. (Optional) Refer to `.env_sample` for the structure:
    ```plaintext
    API_KEY=YOUR_API_KEY_HERE
    ```

### Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to:
    ```plaintext
    http://localhost:3000
    ```

### Usage

1. Enter the name of the city you want to get the weather information for.
2. Click the "Search" button to fetch and display the weather details.

## Contributing

Feel free to fork this repository and submit pull requests. Any improvements or bug fixes are welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api) for providing the weather data.
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Axios](https://axios-http.com/)

