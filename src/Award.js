import React from 'react';
import "./Award.css";

function Award() {
  return (
    <div>  
        
  <div className="AwardWrapper">
      <div className="AwardfirstDiv">
    <center><h2 className="AwardHeading">Awards & Recognitions</h2></center>
    <center>
      <h1 className="AwardHeading2">
        157 family
      </h1>
    </center>
        </div>
    <div className="AwardCard">
      <div className="AwardPoster">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"
          alt="Location Unknown"  
        />
      </div>
      <div className="AwardDetails">
        <h1>Technoviti 1 - Award by Bank Frontiers and Ernst & Young LLP</h1>
        <p className="AwardDesc">
          Lorem ipsum dolor, sit amet consectetur A explicabo consequuntur
          sint repellendus fugit dignissimos debitis adipisci, molestias saepe
          quam?
        </p>
      </div>
    </div>

    <div className="AwardCard">
      <div className="AwardPoster">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"
          alt="Location Unknown"
        />
      </div>
      <div className="AwardDetails">
        <h1>Technoviti 2 - Award by Bank Frontiers and Ernst & Young LLP</h1>
        <p className="AwardDesc">
          Lorem ipsum dolor, sit amet consectetur A explicabo consequuntur
          sint repellendus fugit dignissimos debitis adipisci, molestias saepe
          quam?
        </p>
      </div>
    </div>
    <div className="AwardCard">
      <div className="AwardPoster">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"
          alt="Location Unknown"
        />
      </div>
      <div className="AwardDetails">
        <h1>Technoviti 3 - Award by Bank Frontiers and Ernst & Young LLP</h1>
        <p className="AwardDesc">
          Lorem ipsum dolor, sit amet consectetur A explicabo consequuntur
          sint repellendus fugit dignissimos debitis adipisci, molestias saepe
          quam?
        </p>
      </div>
    </div>
  </div>

  <div className="AwardsecondDiv">
    <div className="AwardsecondSubDiv">
      <div className="AwardphotoDiv">
        <img
          className="AwardImg"
          src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"
          alt="Award"
        />
      </div>
      <div className="AwardInfoDiv">
        <h3 className="AwardHeadingTag">
          Technoviti 1 - Award by Bank Frontiers and Ernst & Young LLP
        </h3>
        <p className="AwardDesc">
          Lorem ipsum dolor, sit amet consectetur A explicabo and Ernst &
          Young LLP consequuntur sint repellendus fugit dignissimos debitis
          adipisci, molestias saepe quam?
        </p>
      </div>
    </div>
    <div className="AwardsecondSubDiv">
      <div className="AwardphotoDiv">
        <img
          className="AwardImg"
          src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"
          alt="Award"
        />
      </div>
      <div className="AwardInfoDiv">
        <h3 className="AwardHeadingTag">
          Technoviti 2 - Award by Bank Frontiers and Ernst & Young LLP
        </h3>
        <p className="AwardDesc">
          className ipsum dolor, sit amet consectetur A explicabo and Ernst &
          Young LLP consequuntur sint repellendus fugit dignissimos debitis
          adipisci, molestias saepe quam?
        </p>
      </div>
    </div>

    <div className="AwardsecondSubDiv" id="AwardcontactForm">
      <div className="AwardphotoDiv">
          <img
            className="AwardImg"
            src="https://cdn.pixabay.com/photo/2016/08/23/14/25/cup-1614530_1280.png"
            alt="Award"
          />
        </div>
      <div className="AwardInfoDiv">
        <h3 className="AwardHeadingTag">
          Technoviti 3 - Award by Bank Frontiers and Ernst & Young LLP
        </h3>
        <p className="AwardDesc">
          Lorem ipsum dolor, sit amet consectetur A explicabo and Ernst &
          Young LLP consequuntur sint repellendus fugit dignissimos debitis
          adipisci, molestias saepe quam?
        </p>
      </div>
    </div>
  </div>   
   </div>
  );
}

export default Award;