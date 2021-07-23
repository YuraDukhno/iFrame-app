import { useState, useEffect } from 'react';
import './App.css';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Mock  from './Mock/mock.json'
import axios from 'axios';
import scrapData from "./ScrapTheData.js"



function App() {

  const request = require("request");
  // const cheerio = require("cheerio");

  useEffect(() => {
    

    fetch("https://www.ikea.co.il/catalogue/Workspaces", {
      method: "GET", // The method
      mode: "no-cors", // It can be no-cors, cors, same-origin
    })
      .then(returnedData => {
       console.log(returnedData);
      })
      .catch(err => {
        // In case it errors.
      });
  })

  return (
    <div fluid="md" className="App">
      <Header />
      <Main arr={Mock} />
    </div>
  );
}

export default App;