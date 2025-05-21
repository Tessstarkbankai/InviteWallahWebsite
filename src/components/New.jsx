import React from "react";
import Cards from "./Cards.jsx";
import "./style.css";
function App() {
  return (
    <div className="whole">
      <div className="header">
        <div className="line"></div>
        <p className="text text-center">Dividerdiy Printable wedding stationery</p>
        <div className="line"></div>
      </div>
      <div className="cards flex justify-center gap-10">
        <Cards 
        name="LUGGAGE TAGS"
        image="https://poshinvites.in/wp-content/uploads/2024/06/LUGGAGE-TAGS.jpg"
         />
        <Cards name="KEY CARD ITINERARY" image="https://poshinvites.in/wp-content/uploads/2024/06/KEYCARD-ITINERARY.jpg"/>
        <Cards name="TENT CARD ITINERARY" image="https://poshinvites.in/wp-content/uploads/2024/06/ITINERARY.jpg"/>
        <Cards name="HAMPER TAGS" image="https://poshinvites.in/wp-content/uploads/2024/06/HAMPER-TAGS.jpg"/>
        <Cards name="THANK YOU NOTES" image="https://poshinvites.in/wp-content/uploads/2024/06/THANKYOU-WELCOME-NOTES.jpg"/>
        <Cards name="PLACARDS" image="https://poshinvites.in/wp-content/uploads/2024/06/PLACARDS.jpg"/>
      </div>
    </div>
  );
}
export default App;
