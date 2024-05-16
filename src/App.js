import logo from './logo.svg';
import './App.css';
import Header from './youtube/Header';
import YoutubeComponent from './youtube/YoutubeComponent';

function App() {
  return (
    <div>
        <Header />
    
      <div
      style = {{
        display :"flex",
        flexWrap:"wrap",
        gap:"20px"
      }}>
      <YoutubeComponent imageUrl = "https://i.ytimg.com/vi/h64A9JT3-9o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDldMrtJ9lbYBgG6VlkJC5wRXS1Qg"
       title=" Linux Virtual Machine Setup"
       noofview="1.9K views "
       time="3 weeks ago"
       />
      <YoutubeComponent imageUrl = "https://i.ytimg.com/vi/AHTsJ2UtLlo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMQwrn_u8AOAag-bTLXzaoFrQp3A" 
      title= "Java Design Patterns Course Launch"
      noofview="1.5K views "
      time="18 hours ago"/>
      <YoutubeComponent imageUrl = "https://i.ytimg.com/vi/icsxikOzfVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm7h6KHrTloxDzWsToCIXglm_o0w"
      title= "DevOps with AWS Cloud"
      noofview="1.1K views "
      time=" 1week ago"/>

    </div>
    </div>
  );
}

export default App;
