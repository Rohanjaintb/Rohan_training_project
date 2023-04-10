//{First question}
// import React from "react";
// import "./styles.css";

// function TributePage() {
//   return (
//     <div className="container">
//       <header>
//         <h1>Ravindra Jadeja</h1>
//         <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-88278,resizemode-1,msid-90020119/news/sports/rockstar-ravindra-jadeja-on-day-2-slams-175-to-put-india-in-command-in-first-test-against-sri-lanka.jpg" alt="img" />
//       </header>
//       <section>
//         <h2>About Jedeja</h2>
//         <p>
//           Ravindrasinh Anirudhsinh Jadeja, commonly known as Ravindra Jadeja or
//           Jaddu, is an Indian international cricketer. He is an all-rounder, who
//           plays as a left-handed middle-order batsman and slow left-arm
//           orthodox bowler.
//         </p>
//         <p>
//           Jadeja made his debut for the Indian cricket team in 2009 and has since
//           become one of the most valuable players for the team. He is known for
//           his brilliant fielding skills, accurate bowling, and aggressive
//           batting style.
//         </p>
//       </section>
//       <section>
//         <h2>Accomplishments</h2>
//         <ul>
//           <li>Named ICC World Test XI: 2016, 2017, 2018</li>
//           <li>Won the Man of the Match award in the 2019 Cricket World Cup semi-final against New Zealand</li>
//           <li>Received the Arjuna Award in 2019 for his contribution to Indian cricket</li>
//         </ul>
//       </section>
//       <section>
//         <h2>Records</h2>
//         <ul>
//           <li>Fastest Indian left-arm spinner to reach 100 ODI wickets</li>
//           <li>First Indian left-arm spinner to take 150 wickets in Tests</li>
//           <li>First Indian cricketer to hit three triple centuries in First-class cricket</li>
//         </ul>
//       </section>
//       <section>
//         <h2>Legacy</h2>
//         <p>
//           Cricketer Jedeja's legacy will live on through his numerous
//           accomplishments and contributions to the Indian cricket team. He is
//           widely regarded as one of the best all-rounders in the world and has
//           inspired a new generation of cricketers to follow in his footsteps.
//         </p>
//       </section>
      
//     </div>
//   );
// }
// export default TributePage;


//{second question}

// import React from 'react';
// import Student from './component/File2';
// import './component/student.css'
// function Students(){
//   return(
//     <>
//     <div>
//       <h1>
//         Student Form</h1>
//         <Student/>
//         </div></>
//   )
// }
// export default Students;


//{Fourth question}

// import React, { useEffect, useState } from 'react';
// import Recipe from './component/recipe';



// const App = () => {

//     const APP_ID = 'bbcea63e';
//     const APP_KEY = '1d256635309f1d6a4fad4bb72e657247';

//     const [recipes, setRecipes] = useState([]);
//     const [search, setSearch] = useState("");
//     const [query, setQuery] = useState('chicken')

//     useEffect(() => {
//         getRecipes();
//     }, [query]);

//     const getRecipes = async() => {
//         const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
//             const data = await response.json();
//             setRecipes(data.hits);
//             console.log(data.hits);
//     };

//     const updateSearch = e => {
//         setSearch(e.target.value);
//      }

//     const getSearch = e =>{
//         e.preventDefault();
//         setQuery(search);
//         setSearch('');
//     }
//     return ( 
//         <div className = "App" >
//         <form onSubmit={getSearch} className = "search-form">
//         <input className = "search-bar" type = "text" value={search} onChange={updateSearch}/>
//         <button className = "search-button" type = "submit">Search</button>  
//         </form> 
//         <div className="recipes">
//         {recipes.map(recipe =>(
//             <Recipe 
//             title={recipe.recipe.label} 
//             calories={recipe.recipe.calories} 
//             image={recipe.recipe.image} 
//             ingredients={recipe.recipe.ingredients}/>
//         ))};
//         </div>
        
//         </div>
//     );
// };
// export default App;

//{seventh question}

// import React, {Component} from "react";
// import Buttons from './component/Button';
// import Result from './component/Result';
// import "./component/color.css";
// /**this is the main class */
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       result: "0",
//     }
//     this.handleclicks = this.handleclicks.bind(this);
//   }

//   handleclicks = (value) => {
//     switch (value) {
//       case '0':
//       case '1':
//       case '2':
//       case '3':
//       case '4':
//       case '5':
//       case '6':
//       case '7':
//       case '8':
//       case '9':
//       case '.':
//       case '+':
//       case '-':
//       case '/':
//       case '*':
//         if (this.state.result === "0") {
//           this.setState({
//             result: value
//           });

//         } else {
//           this.setState({
//             result: this.state.result + value
//           });
//         }
//         break;
//       case '=':
//         //todo add a regex test to see if the statment is correct before passing it to eval
//         //todo limit the result  to 14
//         console.log(this.state.result);
//         this.setState({
//           result: eval(this.state.result)
//         })
//         break;
//       case 'c':
//         this.setState({
//           result: ''
//         })
//         break;
//       case '+/-':
//         this.setState({
//           result: parseInt(this.state.result, 10) * -1
//         });
//         break;
//       case '%':
//         this.setState({
//           result: parseFloat(this.state.result, 10) / 100
//         });
//         break;
//       default:
//         break;
//     }

//   }

//   render() {
//     return ( 
//       <div className = "myCalculator" >
//       <
//       Result result = {
//         this.state.result
//       }
//       /> <
//       Buttons Buttonclicked = {
//         this.handleclicks
//       }
//       /> </div>
//     );
//   }
// }
// export default App;


//{Eleventh question} 

// import React from "react";
// import "./component/main.css";

// import Navbar from "./component/navbar";
// import Main from "./component/Doc";

//  function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Main />
//     </div>
//   );
// }
// export default App;


//{sixith question}

// import React from 'react';
// import './App.css';
// import { ToDoList } from './component/ToDoList';

// function App() {
//   return (
//     <div className="container-md d-flex flex-column justify-content-start align-items-center">
//       <h1>things <span>to do</span></h1>
//       <ToDoList />
//     </div>
//   );
// }
// export default App;

//{fifth question}

// import React from "react";
// import axios from "axios";
// import "./component/weathers.css";
// import"./component/weathersapp.css";

// function App() {
//   const [data, setData] = React.useState([]);
//   const [location, setLocation] = React.useState("");
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=450a9d622a56bff861d328ffbea10a4b`;

//   const searchLocation = (e) => {
//     if (e.key === "Enter") {
//       axios.get(url).then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//       setLocation("");
//     }
//   };
//   return (
//     <div className="App">
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Enter location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           onKeyPress={searchLocation}
//         />
//       </div>
//       <div className="wrapper">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//           </div>
//           <div className="temp">
//             {data.main ? <h1 id="cel">{(data.main.temp - 273.15).toFixed()}°C</h1> : ""}
//           </div>
//           <div className="description">
//             {data.weather ? <p>{data.weather[0].main}</p> : ""}
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="feels">
//             {data.main ? <p className="bold">{((data.main.temp - 273.15).toFixed())} °C</p> : ""}
//             <p>Feels Like</p>
//           </div>
//           <div className="humidity">
//             {data.main ? <p className="bold">{data.main.humidity} %</p> : ""}
//             <p>Humidity</p>
//           </div>
//           <div className="wind">
//             {data.wind ? <p className="bold">{data.wind.speed} MPN</p> : ""}
//             <p>Wind Speed</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

// {Fifteenth Question}
// import React,{useState} from 'react';
// import './component/travel.css';

// function App() {
//   const [showInfo, setShowInfo] = useState("");
//   const [showInfo1, setShowInfo1] = useState("");
//   const [showInfo2, setShowInfo2] = useState("");
//   const [showInfo3, setShowInfo3] = useState("");
//   const handelBook=()=>{
//     setShowInfo(!showInfo);
//   }
//   const handelBooks=()=>{
//     setShowInfo1(!showInfo1);
//   }
//   const handelBooks1=()=>{
//     setShowInfo2(!showInfo2);
//   }
//   const handelBooks2=()=>{
//     setShowInfo3(!showInfo3);
//   }
//   return (
//     <div className="App">
//       <header>
//      <h1>Travell Web</h1>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#destinations">Destinations</a></li>
//             <li><a  href="#about">About Us</a></li>
//             <li><a href="#contact">Contact Us</a></li>
//           </ul>
       
//       </header>
//       <main>
//         <section id="home" className="section">
//           <h1 id="welcome">Welcome to Travelly</h1>
//           <div class="image-container">
//   <img src="https://img.izismile.com/img/img4/20110408/1000/friday_gif_collection_31.gif" alt="Your image" id="image1"/>
//   <div class="text-container">
//     <p>Discover your dream destinations with us!</p>
//   </div>
// </div>

//           <button className="btn">View Destinations</button>
//         </section>
//         <section id="destinations" className="section">
//           <h2 id="dest">Destinations</h2>
//           <div className="destination-container">
//             <div className="destination">
//               <img src="https://picsum.photos/id/1011/400/300" alt="Destination" id="img1"/>
//               <h3>New York</h3>
//               <p>Explore the Big Apple!</p>
//               <button className="btn" onClick={handelBooks2}>{showInfo3 ? 'Back' : 'Book Now'}</button>
//       {showInfo3 && <li><a href="https://www.tripadvisor.in/Attractions-g60763-Activities-New_York_City_New_York.html">You Want to Visit</a></li>}
//             </div> <br />
//             <div className="destination">
//               <img src="https://picsum.photos/id/1015/400/300" alt="Destination" id="img1"/>
//               <h3>Paris</h3>
//               <p>Experience the City of Love!</p>
//               <button className="btn" onClick={handelBooks1}>{showInfo2 ? 'Back' : 'Book Now'}</button>
//       {showInfo2 && <li><a href="https://preparetravelplans.com/things-to-do-in-tokyo/">You Want to Visit</a></li>}
//             </div> <br />
//             <div className="destination">
//               <img src="https://picsum.photos/id/1025/400/300" alt="Destination" id="img1" />
//               <h3>Tokyo</h3>
//               <p>Discover the Land of the Rising Sun!</p>
//               <button className="btn" onClick={handelBooks}>{showInfo1 ? 'Back' : 'Book Now'}</button>
//       {showInfo1 && <li><a href="https://preparetravelplans.com/things-to-do-in-tokyo/">You Want to Visit</a></li>}
//             </div> <br />
//             <div className="destination">
//               <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Gateway-of-India-1.jpg" alt="Destination"  id="img1"className="mumbai"/>
//               <h3>India(Mumbai)</h3>
              
//               <p>Experience the City of Dreams!</p>
//               <button className="btn" onClick={handelBook}>{showInfo ? 'Back' : 'Book Now'}</button>
//       {showInfo && <li><a href="https://www.fabhotels.com/blog/places-to-visit-in-mumbai/">You Want to Visit</a></li>}
//             </div>
//           </div>
//         </section>
//         <section id="about" className="section">
//           <h2>About Us</h2>
//           <p>We are a team of passionate travelers who want to help you explore the world.</p>
//         </section>
//         <section id="contact" className="section">
//           <h2>Contact Us</h2>
//           <form>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" />
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" />
//             <label htmlFor="message">Message:</label>
//             <textarea id="message" name="message"></textarea>
//             <button className="btn">Send</button>
//           </form>
//         </section>
//       </main>
//       <footer>
//         <p>© 2023 Travelly. All rights reserved.</p>
//       </footer>
//     </div>
    
//   );
// }
// export default App;


//{ninth question}

// import React, { useState, useRef } from "react";
// import "./component/styles.css"

// export default function CountdownTimer() {
//   const [countdownDate, setCountdownDate] = useState("");
//   const [countdownTime, setCountdownTime] = useState("");
//   const [countdownSeconds, setCountdownSeconds] = useState(0);
//   const [timerActive, setTimerActive] = useState(false);
//   const intervalRef = useRef();

//   const handleDateChange = (e) => {
//     setCountdownDate(e.target.value);
//   };

//   const handleTimeChange = (e) => {
//     setCountdownTime(e.target.value);
//   };

//   const handleSetClick = () => {
//     const countdownDateTime = new Date(`${countdownDate}T${countdownTime}`).getTime();
//     const now = new Date().getTime();
//     setCountdownSeconds(Math.max(0, Math.floor((countdownDateTime - now) / 1000)));
//     setTimerActive(true);
//     intervalRef.current = setInterval(() => {
//       setCountdownSeconds((prevCountdownSeconds) => {
//         if (prevCountdownSeconds > 0) {
//           return prevCountdownSeconds - 1;
//         } else {
//           clearInterval(intervalRef.current);
//           setTimerActive(false);
//           window.alert("Time's up!");
//           return 0;
//         }
//       });
//     }, 1000);
//   };
  

//   const handleResetClick = () => {
//     clearInterval(intervalRef.current);
//     setCountdownDate("");
//     setCountdownTime("");
//     setCountdownSeconds(0);
//     setTimerActive(false);
//   };

//   const formatTime = (time) => {
//     return time.toString().padStart(2, "0");
//   };

//   const formatCountdown = () => {
//     const hours = Math.floor(countdownSeconds / 3600);
//     const minutes = Math.floor((countdownSeconds % 3600) / 60);
//     const seconds = countdownSeconds % 60;
//     return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
//   };

//   return (
//     <div className="countdown-timer">
//       <h1>Timer</h1>

//       <div class="boder-box">

//         <div class="date-time">
//           <label>Date </label>
//           <input type="date" value={countdownDate} onChange={handleDateChange} /><br></br>
//           <br></br><label>Time </label>
//           <input type="time" value={countdownTime} onChange={handleTimeChange} /><br></br>
//         </div>

//         <div class="count">
//           <p>{formatCountdown()}</p>
//         </div>
//         <div class="btn-set-reset"><br></br>
//           <button onClick={handleSetClick} disabled={timerActive}>Set</button>
//           <br></br><button onClick={handleResetClick}>Reset</button>
//         </div>

        

//       </div>
//     </div>
//   );
// }

//{tenth question}

// import React from 'react';
// import './component/photo.css';
// import myImage from './component/rj-logo.png';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={myImage} alt="image" id="logo"/>
//         <h1>Photography Site</h1>
//       </header>
//       <h4>Smile Please!!!</h4>
//       <img src="https://images.squarespace-cdn.com/content/v1/597b8476bf629a536f85ae1a/1571170667751-BRFU75VBKJQW9S3EZH26/camera-flash.gif" id="Gif"/>
//       <main>
//         <div className="hero">
//           <h2>Capture Life's Moments</h2>
//           <button>View Gallery</button>
//         </div>
//         <div className="gallery">
//           <img src="https://www.format.com/wp-content/uploads/best_landscape_photography_apps.jpg" alt="Gallery Image 1" id="image1" />
          

//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9qwy5_SzDDg7hDQlsIFCS42NBfMdSf42ag&usqp=CAU" alt="Gallery Image 2" id="image1"/>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5B9bLi1NJIMf7WYlbWunn6O0buV6tZs8UQ&usqp=CAU" alt="Gallery Image 3" id="image1"/>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrj481JnDvNJSaikLifXqBiKgAgen0gZQ5mQ&usqp=CAU" alt="Gallery Image 4" id="image1"/>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAgDhhDCURAf7kyN_vtEVvaaW-YVMXFeYIg&usqp=CAU" alt="Gallery Image 5" id="image1"/>
//           <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg" alt="Gallery Image 6" id="image1"/>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneAMTjwr9Ry1K_T-uuHusNT3q03jsjPAjYQ&usqp=CAU" alt="Gallery Image 6" id="image1" />
//           <img src="https://cdn.windowsreport.com/wp-content/uploads/2022/03/Wallpapers.jpg" alt="Gallery Image 6" id="image1"/>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZLt7K_z3CCc1pq-QdkzxgFlILteQ9vgXTA&usqp=CAU" alt="Gallery Image 6" id="image1"/>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cTnjtTJZkfMDHcXO8np9AmOXBO3K6vaCsg&usqp=CAU" alt="Gallery Image 6" id="image1"/>
//           //https://i.pinimg.com/originals/5d/e7/6b/5de76bb80cdac9ed4fdb5fee73b5480e.gif
        
//         </div>
//       </main>
//       <footer>
//         <p>&copy; Photography Site 2023</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Homepage from "./component/Homepage";

// function App() {
//   return (
//     <>
//     <div>
//       <h1>Hi</h1>
//     </div>
//     <Router>
      
//         <Route exact path="/" component={Homepage} />
      
//     </Router>
//     </>
//   );
// }

// export default App;

//{Eleventh question}
// import React from "react";
// import  "./component/document.css";

// function Documents(){
//   return(
//    <>
//     <div class="main-body">
// 		<nav id="navbar">
// 			<header>Documentation Menu</header>
// 			<a href="#Intro" class="nav-link">
// 				What is Java</a>
// 			<a href="#Object" class="nav-link">
// 				Objects and Classes</a>
// 			<a href="#Inheritance" class="nav-link">
// 				Inheritance</a>
// 			<a href="#Polymorphism" class="nav-link">
// 				Polymorphism</a>
// 			<a href="#Abstraction" class="nav-link">
// 				Abstraction</a>
// 			<a href="#Encapsulation" class="nav-link">
// 				Encapsulation</a>
// 		</nav>
//     </div>
//     <main id="main-doc">
//     <section class="main-section" id="Intro">
//     <header>
//       What is java?
//     </header>
//     <p>
//       Java is a popular general-purpose programming language that is used for developing various types of applications, including web, desktop, mobile, and enterprise software.
//       and powerful language and finds wide use
//       in various GUI platforms, 3D graphics and
//       real-time simulations. One of the key features of Java is its platform independence, which means that Java programs can run on any device or operating system that has a Java Virtual Machine (JVM) installed. This makes Java a popular choice for building applications that need to run on multiple platforms.
                
//             </p>
    
//     <br></br>
//     <p>java is an Object Oriented Programming Language.
//      <br></br> The main pillars of Object Oriented
//       Programming are :
//     </p>
//     <ul>
//       <li>Objects and Classes</li>
//       <li>Inheritance</li>
//       <li>Polymorphism</li>
//       <li>Abstraction</li>
//       <li>Encapsulation</li>
//     </ul>
//   </section>
//   <section class="main-section" id="Inheritance">
// 				<header>
// 					Inheritance
// 				</header>
// 				<p>
// 					The capability of a class to derive
// 					properties and characteristics from
// 					another class is called Inheritance.
// 					Inheritance is one of the most important
// 					feature of Object Oriented Programming.
// 					Sub Class: The class that inherits
// 					properties from another class
// 					is called Sub class or Derived Class.
// 					Super Class: The class whose properties
// 					are inherited by sub class is called Base
// 					Class or Super class. Using inheritance, we
// 					have to write the functions only one time
// 					instead of three times as we
// 					have inherited rest of the three classes
// 					from base class(Vehicle).
// 				</p>
				
// 			</section>
//       <section class="main-section" id="Polymorphism">
// 				<header>
// 					Polymorphism
// 				</header>
// 				<p>
// 					The word polymorphism means having many
// 					forms. In simple words, we can define
// 					polymorphism as the ability of a message
// 					to be displayed in more than one form.
// 					A real-life example of polymorphism, a
// 					person at the same time can have
// 					different characteristics.
// 					Like a man at the same time is a father,
// 					a husband, an employee. So the same
// 					person posses different behavior in
// 					different situations. This is called
// 					polymorphism. Polymorphism is considered
// 					as one of the important features of Object
// 					Oriented Programming.
				
// 					<b>In java polymorphism is mainly
// 						divided into two types:</b>
// 					 1. Compile time Polymorphism
// 					2. Runtime Polymorphism
// 				</p>

// 				<p>Compile time polymorphism: This type of
// 					polymorphism is achieved by function
// 					overloading or operator overloading.
// 					<br></br> Runtime polymorphism: This type
// 					of polymorphism is achieved by
// 					Function Overriding.
// 				</p>
// 			</section>
//       <section class="main-section" id="Abstraction">
// 				<header>
// 					Abstraction
// 				</header>

// 				<p>
// 					Data abstraction is one of the most
// 					essential and important feature of object
// 					oriented programming in C++. Abstraction
// 					means displaying only essential information
// 					and hiding the details. Data abstraction
// 					refers to providing only essential information
// 					about the data to the outside world,
// 					hiding the background details or implementation.
// 					 Consider a real life example of a man driving
// 					a car. The man only knows that pressing the
// 					accelerators will increase the speed of car
// 					or applying brakes will stop the car but he
// 					does not know about how on pressing accelerator
// 					the speed is actually increasing, he does
// 					not know about the inner mechanism of the car
// 					or the implementation of accelerator, brakes
// 					etc in the car. This is what abstraction is.
// 				</p>

// 				<p>
// 					<b>Abstraction using Classes:</b> We can
// 					implement Abstraction in C++ using classes.
// 					Class helps us to group data members and member
// 					functions using available access specifiers. A
// 					Class can decide which data member will be
// 					visible to outside
// 					world and which is not.
					
// 					<b>Abstraction in Header files:</b> One
// 					more type of abstraction in C++ can be
// 					header files. For example, consider the
// 					pow() method present in math.h header file.
// 					Whenever we need to calculate power of a
// 					number, we simply call the
// 					function pow() present in the math.h header
// 					file and pass the numbers as arguments
// 					without knowing the underlying algorithm
// 					according to which the function is actually
// 					calculating power of numbers.
// 					<b>Advantages of Data Abstraction:

// 					</b> 1. Helps the user to avoid writing
// 					the low level code. 2. Avoids code
// 					duplication and increases reusability.
// 					3. Can change internal implementation of
// 					class independently without
// 					affecting the user. 4. Helps to
// 					increase security of an application or program
// 					as only important details are
// 					provided to the user.
// 				</p>
// 			</section>
//       <section class="main-section" id="Encapsulation">
// 				<header>
// 					Encapsulation
// 				</header>
// 				<p>
// 					In normal terms Encapsulation is defined
// 					as wrapping up of data and information
// 					under a single unit. In Object Oriented
// 					Programming, Encapsulation is defined as
// 					binding together the data and the functions
// 					that manipulates them. Consider
// 					a real life example
// 					of encapsulation, in a company there are
// 					different sections like the accounts section,
// 					finance section, sales section etc. The finance
// 					section handles all the financial transactions
// 					and keep records of all the data related to
// 					finance.
// 					Similarly the sales section handles all the
// 					sales related activities and keep records of
// 					all the sales. Now there may arise a situation
// 					when for some reason an official from finance
// 					section needs all the data about sales in a
// 					particular
// 					month. In this case, he is not allowed to
// 					directly access the data of sales section.
// 					He will first have to contact some other
// 					officer in the sales section and then
// 					request him to
// 					give the particular data. This is what
// 					encapsulation is. Here the data of
// 					sales section and the
// 					employees that can manipulate them are
// 					wrapped under a single name “sales section”.
// 				</p>

// 				<p>
// 					Encapsulation also lead to data abstraction
// 					or hiding. As using encapsulation also hides
// 					the data. In the above example the data of
// 					any of the section like sales, finance or
// 					accounts is hidden from any other section.
// 					In java encapsulation
// 					can be implemented using Class
// 					and access modifiers.
// 				</p>
// 			</section>
//       <footer>
//          <p>&copy; Documentation Site 2023</p>
//       </footer>

			
//   </main>
//   </>
//   )
// }

// export default  Documents;


//{12th question }


// import React,{useState} from 'react';
// import "./component/charity.css"
// function App() {
//   const[above,setabove]=useState("");
//   const handelabout=()=>{
//     setabove(!above);
//   }
//   const[above1,setabove1]=useState("");
//   const handelabout1=()=>{
//     setabove1(!above1);
//   }
//   const[above2,setabove2]=useState("");
//   const handelabout2=()=>{
//     setabove2(!above2);
//   }

//   return (
//     <div>
//       <header>
//       <h1>Charity to save  Animals</h1>
// 		    <nav>
// 			    <ul>
// 				    <li><a href="#home">Home</a></li>
// 				    <li><a href="#donate">Donate</a></li>
// 				    <li><a href="#contact">Contact</a></li>
// 			    </ul>
// 		    </nav>
//       </header>

//     <div class="img">
//       <img src="https://admin.itsnicethat.com/images/ph2-mzymNE_iVtocc3LSHccourI=/192297/format-webp%7Cwidth-1440/weiden-and-kennedy-the-national-trust-everyone-needs-nature-advertising-_dXMOE4B.jpg" alt="" width="800" height="400" id="logo" />
//     </div>

//     <div class="list">
//       <h1>Give Love for Saving
// World Animals</h1>
//       <p>Here at our organization, we strive to make a difference in the lives of those in need. Our mission is to raise awareness and funds for various charitable causes, including:</p>
//       <ul>
//         <li>Helping the homeless</li>
//         <li>Supporting families in need</li>
//         <li>Providing education opportunities for underprivileged children</li>
//         <li>And more...</li>
//       </ul>

//       <section class="slide-charity">
//       <div class="slider">
//       <span id="slide-1"></span>
//       <span id="slide-2"></span>
//       <span id="slide-3"></span>
//       <div class="image-container">
//         <img src="https://optimise2.assets-servd.host/maniacal-finch/production/animals/amur-tiger-01-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1658935145&s=1b96c26544a1ee414f976c17b18f2811" class="slide" width="600" height="400" />
//         <button id="above1" onClick={handelabout}>{above?"back":"About"}</button>
//         {above &&<p id="above">The endangered status of tigers in the wild due to habitat loss, poaching, and other factors. According to the World Wildlife Fund (WWF), there are only about 3,900 wild tigers left in the world, with the majority of them living in India. Several subspecies of tigers are critically endangered, including the Sumatran tiger, the Malayan tiger, and the South China tiger, with fewer than 400 individuals left in the wild for each of these subspecies.</p>}
//         <img src="https://cdn.britannica.com/72/272-050-E1965E27/African-elephant-Kenya.jpg" class="slide" width="600" height="400" id="elephant"/>
//         <button id="above1" onClick={handelabout1}>{above1?"back":"About"}</button>
//        {above1 && <p id="above6">the endangered status of elephants in the wild due to habitat loss, poaching, and other factors. According to the International Union for Conservation of Nature (IUCN), African elephants are classified as vulnerable, while Asian elephants are classified as endangered. The populations of both species have declined significantly over the past few decades.</p>}
//         <img src="https://wallpaperaccess.com/full/1151831.jpg" class="slide" width="600" height="400" id="deer" />
//         <button id="above1" onClick={handelabout2}>{above2?"back":"About"}</button>
//         { above2 &&<p id="abov">Deer scarcity refers to the declining populations of deer species in the wild due to habitat loss, hunting, and other factors. There are many species of deer, but some of the most threatened include the Eld's deer, the Philippine deer, and the Kashmir stag.

// Habitat loss is one of the biggest threats to deer populations, as forests and grasslands are cleared for human development or agriculture. Hunting and poaching are also major threats, particularly in areas where deer are hunted for meat, trophies, or traditional medicine.</p>}
//       </div>
//       <div class="buttons">
//         <a href="#slide-1"></a>
//         <a href="#slide-2"></a>
//         <a href="#slide-3"></a>
//       </div>
//     </div>
//     </section>


//       <div class="footer">
//       <h2>Make a Donation</h2>
//       <p id="colo">If you would like to make a donation to support our cause, please fill out the form below:</p>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label> <br /> <br />
//         <label>
//           Email:
//           <input type="email" name="email" />
//         </label> <br /> <br />
//         <label>
//           Amount:
//           <input type="number" name="amount" />
//         </label>
//         <br></br>
//         <button type="submit" class="btn">Donate Now </button>
//       </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import './component/ecommerce.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome To Ware App</h1>
        
//         <nav>
//         <ul>
//           <li><a href="#page">Home</a></li>
//           <li><a href="#shop">Shop</a></li>
//           <li><a href="#about">About Us</a></li>
//           <li><a href="#contact">Contact Us</a></li>
//         </ul>
//       </nav>
//       </header>
//       <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f0ac4e460731db8aea3_6002086f72b727301501e594_wareapp-gif.gif" alt="" id="page"/>
//       <main>
        
//       <h2 id="shop">Featured Products</h2>
//         <section className="products">
           
           
//           <div className="product1">
//             <img src="https://fossil.scene7.com/is/image/FossilPartners/JR1401_main?$sfcc_fos_large$" alt="Product" id="img1" />
//             <h3> Fossil watch</h3>
//             <p id="cost1">₹15000</p>
//             <button id="add1">Add to Cart</button>
//           </div> <br /> <br />
//           <div className="product2">
//             <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKtuJlSM5WKKBgVf6ZdFtWN2cps6pjwcACKuFEh-4VubELq6csIJsTY_MZPTlqNM8GL5JgLfxW1aDAkZsUds3VgDmPKLO2CSXwMPm5L7NeB7ujWMVbuFM5&usqp=CAE" alt="Product" id="img2" />
//             <h3>Nike Sneakers</h3>
//             <p id="cost2">₹12000</p>
//             <button id="add2">Add to Cart</button>
//           </div> <br /> <br />
//           <div className="product3">
//             <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSom00Jixea5x9wi_AXvDqNoVcfNweWI34C3nZKR-GjcIWLkfCGLfeTFd7PyRj_0ordP0R5kp35jzpRYiCpDoWM1d6QS-6I1tFqxKGWOH3miCvr92rXOyKiwg&usqp=CAE" alt="Product" id="img3"/>
//             <h3>Puma Flipflop</h3>
//             <p id="cost3">₹1500</p>
//             <button id="add3">Add to Cart</button>
//           </div> <br /> 
          
//           <div className="product4">
//             <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSloAroIjI7Oolms_FEfID5Jj_13peWnhzHjb9HKd_QFya3HJL97j9lEyfod65Fa9tllvwF-jmgEGb-LWfkq8G1-8Wj252MUWzLwG34PcQ&usqp=CAE" alt="Product" id="img3"/>
//             <h3> U.S POLO Assn Joggers</h3>
//             <p id="cost4">₹1500</p>
//             <button id="add4">Add to Cart</button>
//           </div>

          
//         </section> <br />  <br />
//         <section className='products1'>
//         <div className="product5">
//             <img src="https://cdn.shopify.com/s/files/1/0623/8850/2700/products/PKWM0028_750x1000.png?v=1654782427" alt="Product" id="img5"/>
//             <h3>King Lion Shirt</h3>
//             <p id="cost5">₹1300</p>
//             <button id="add5">Add to Cart</button>
//           </div>

//           <div className="product6">
//             <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTR65gttWMDZBIxgRljEwaesug-bTo_o1HjcZiP3Lbi4Hm1xtYFw9oALbo7_KurhWWSofhGsiSJCnz3DYcrhf3W5L7UOq6uuNuqQZExmYUrczWM1WDOKBGU&usqp=CAE" alt="Product" id="img6"/>
//             <h3>Printed T-shirt</h3>
//             <p id="cost6">₹500</p>
//             <button id="add6">Add to Cart</button>
//           </div>
//           <div className="product7">
//             <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFCP-VPGl3XGNRDrrlWvdyFKKRs3bVJXHytn8icXS-hfD16BqQm9T8OFqkoBEwmHsJfV77jMYaM0QJTo3QD1-eA6Oe2Ve2wgO12ppNtDObap3oIuAyuPamMA&usqp=CAE" alt="Product" id="img7"/>
//             <h3>Samsung Smart Watch</h3>
//             <p id="cost7">₹35000</p>
//             <button id="add7">Add to Cart</button>
//           </div>
//           <div className="product8">
//             <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6NMW9R_0tGFeYmcDX8nl6HMJbN8L9ANXQmqBLeIxils0SlONFIkKq1gajIt2Rk4K_5JjYR5H9nw4w5i1Vgq-aTjgH4ptDnCNKV3w_uDF--fK7aZYxuI1L&usqp=CAE" alt="Product" id="img8"/>
//             <h3>Laptop Bag</h3>
//             <p id="cost8">₹3500</p>
//             <button id="add8">Add to Cart</button>
//           </div>
          
//         </section>
        
//         <section className="featured-category">
//           <h2 id="about">Featured Category</h2>
//           <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png" alt="Featured Category" />
//          <p id="pp">At Ware App Online, we're passionate about making your online shopping experience as easy and enjoyable as possible. We offer a wide selection of high-quality products at competitive prices, with fast and reliable shipping to anywhere in the world.</p>
//         </section>
//       </main>
//       <div class="footer">
//       <h2 id="contact">Contact Us</h2>
//          <form>
//         <label>
//            Name:
//            <input type="text" name="name" />
//          </label> <br /> <br />
//          <label>
//            Email:
//            <input type="email" name="email" />
//          </label> <br /> <br />
//          <label>
//           Phone :
//            <input type="phone" name="amount" />
//          </label> <br />
//          <br></br>
//          <button type="submit" class="btn">Submit </button>
//        </form>
//        </div>
//       <footer>
//         <p>&copy; 2023 E-Commerce Site</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

//{fourteenth question}

// import React  from "react";
// import './component/education.css';
// import  Logo from './component/logo-no-background.png';

// function Education(){
//   return(
   
//      <div className="App">
//       <header className="App-header">
//         <img src={Logo} alt="no image" id="logo" />
        
//         <nav>
//         <ul>
//           <li><a href="#logo">Home</a></li> <br />
//          <li><a href="#popular">Courses</a></li> <br />
//            <li><a href="#picks">Features</a></li> <br />
//          <li><a href="#join1">Add course</a></li> <br />
//        </ul>
//        </nav>
//        </header>
//     <img src="https://cdn.dribbble.com/users/4514805/screenshots/9734137/media/b677d682df1a535c210fabb225bab25f.gif" alt="no image" id="landing" />
//     <button id="join">Join For Free</button>
//     <h1 id="popular">Popular Courses</h1>
    
//       <section id="learning">
//       <div className="course1">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo92xt5iPf0aLqrTqVoM_tjjMoShasM4lalmjD3nGXzVqEbcdBPBfZ-WBwq7SEdtTV2HE&usqp=CAU" alt="Product" id="img1" />
//             <h3> Java Script</h3>
//             <p id="cost1">Free</p>
//             <button id="add1">PreView This Course</button>
//            </div> <br /> <br />
//            <div className="course2">
//             <img src="https://wallpapercave.com/wp/wp8816346.jpg" alt="Product" id="img2" />
//             <h3> Python</h3>
//             <p id="cost2">Free</p>
//             <button id="add2">PreView This Course</button>
//            </div> <br /> <br />
//            <div className="course3">
//             <img src="https://miro.medium.com/v2/resize:fit:1200/1*mX74akDYcfh-cnyRDcCsIg.png" alt="Product" id="img3" />
//             <h3> React Js</h3>
//             <p id="cost3">Free</p>
//             <button id="add3">PreView This Course</button>
//            </div> <br /> <br />
        
//        </section> <br /> <br /> <br /> <br />
//        <section id="pick">
//         <img src="https://thumbs.dreamstime.com/b/happy-young-man-woman-working-laptop-men-women-desk-60564501.jpg" alt="" id="picks" />
    
// </section>
// <h1 id="life">Pick a Course That
// Makes Your Life</h1>
// <p id="lines">Looking for your next favorite course? <br />
// Find our freshest content here. <br /> Discover new horizons. <br /> Gain knowledge that makes a mind-blowing change in your life. <br /> Ready? Let’s get started!</p>
// <button id="join1">Join course </button>
// <section id="say">
//   <h1 id="what">What Student Say's  </h1>
//   <p id="on">"I'm focusing on learning Java because I've heard it's one of the most in-demand programming languages for enterprise software development. I've been applying for internships and job openings, and many of them require Java skills. I'm confident that having Java on my resume will make me stand out to potential employers."</p>

// </section>

// <footer>
//        <p>&copy; 2023 Online Education Site</p>
//        </footer>
//     </div>
    
//   )
// }
//  export default Education;