import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/HeaderComponent";
import "./bookClass.css";
import BookingForm from "../components/bookingForm";

const BookingPage = () => {
  let params = useParams();

  const [classList, setClassList] = useState([]);

  useEffect(() => {
    console.log(params);
    fetch("/data/schedule.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        // parsing
        const classData = jsonData;
        const tempListFromAPI = [];

        for (let i = 0; i < classData.length; i++) {
          const currClass = classData[i];
          const Id = currClass["id"];
          const subject = currClass["subject"];
          const language = currClass["language"];
          const isVirtual = currClass["isVirtual"];
          let classDilevery = "";

          if (isVirtual == true) {
            classDilevery = "Online";
          } else {
            classDilevery = "InPerson";
          }

          const classFromAPI = {
            classID: Id,
            classSubject: subject,
            classLanguage: language,
            classMode: classDilevery,
          };

          console.log(classFromAPI.classID);
          if (classFromAPI.classID == params.id) {
            tempListFromAPI.push(classFromAPI);
          }
        }
        console.log(tempListFromAPI);
        setClassList(tempListFromAPI[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <Header />
      <h1>Book a Class</h1>
      <div className="main">
        <div>
          <BookingForm />
        </div>
        <div>
          {
            <div className="summary">
              <h1>Class Summary</h1>
              <div>
                <p className="headTag">CLASS NAME</p>
                <p className="valueTag">{classList.classSubject}</p>
              </div>
              <div>
                <p className="headTag">LANGUAGE</p>
                <p className="valueTag">{classList.classLanguage}</p>
              </div>
              <div>
                <p className="headTag">DELIVERY MODE</p>
                <p className="valueTag">{classList.classMode}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
