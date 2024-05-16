import React from 'react'

function Header() {
  return (
    <>
    <div style = {{
        display :"flex",
        marginBottom:30
      }}>
      <img style = {{
        borderRadius:"50%"
      }}
      src ="https://yt3.googleusercontent.com/OoVuuL6C86aY1WQVxMouogyZcvhsMty_0C9k1KTQi303O-SlyivduPeozs9SvApxj6nwjq9EpA=s176-c-k-c0x00ffffff-no-rj"
           alt = "Ashok it" />

      <div>
        <h1>Ashok IT</h1>
        <ul>
            <li>@ashokit</li>
            <li>79.9k subscribers</li>
            <li>1.1k videos</li>   
        </ul>
        
      </div>
    </div>
    <div style ={{
       marginBottom: "20px",
    }}>
    <button
      style={{
        padding: "8px 20px",
        border: "none",
        borderRadius: "15px",
        backgroundColor: "black",
        color: "White",
        fontWeight: "600",
        marginRight: "10px",
      }}
    >
      Subscribe
    </button>
    <button
      style={{
        padding: "8px 20px",
        border: "1px solid grey",
        borderRadius: "20px",
        fontWeight: "600",
        backgroundColor: "white",
      }}
    >
      Join
    </button>
  </div> 
  </>
  )
}

export default Header
