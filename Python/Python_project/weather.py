#weather

import requests
import json

# API endpoint and key
url = "http://api.openweathermap.org/data/2.5/weather"
api_key = "8edcee44b76399f9b6152294c0a5826b"

# Take user input for the city name
city_name = input("Enter a city name: ")

# Build the request URL with the city name and API key
params = {"q": city_name, "appid": api_key}

# Make an HTTP request to the API
response = requests.get(url, params=params)

# Parse the JSON response data
data = json.loads(response.text)

# Check if the API request was successful
if data["cod"] != "404":
    # Extract the weather information from the response data
    weather = data["weather"][0]["description"]
    temperature = data["main"]["temp"] - 273.15  # Convert from Kelvin to Celsius

    # Display the weather information to the user
    print("Weather in " + city_name + ": " + weather)
    print("Temperature: " + str(round(temperature, 2)) + " °C")
else:
    # Display an error message if the API request failed
    print("City not found.")
