import { useEffect, useState } from "react";

import Header from "../components/HeaderComponent";
import "./schedulePage.css";

const SchedulePage = () => {
  const [classList, setClassList] = useState([]);
  useEffect(() => {
    fetch("/data/schedule.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
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
            classDilevery = "In Person";
          }
          const classFromAPI = {
            classID: Id,
            classSubject: subject,
            classLanguage: language,
            classMode: classDilevery,
          };

          console.log(classFromAPI);
          tempListFromAPI.push(classFromAPI);
        }

        setClassList(tempListFromAPI);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="scheduleContent">
      <Header />
      <div className="headingSchedule">
        <h1>Book a Class</h1>
        <p>Take a class that meets your schedule and lifestyle</p>
      </div>
      <div>
        {classList.map((currClass, index) => {
          return (
            <div className="classBox" key={index}>
              <div className="upperLine">
                <p>
                  {currClass.classSubject} with {currClass.classLanguage}
                </p>
                <p className="read">Read More</p>
              </div>
              <div className="lowerLine">
                <p className="minTag">45 Min</p>

                <p>{currClass.classMode}</p>
              </div>
              <a href={"/book/" + currClass.classID} class="bookNow">
                Book Now
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchedulePage;
