import React from 'react'
import Card from "./Card.jsx"
    import "./Team.css"

const data = [
    {
      name: "Suman",
      title: "Head",
      dept: "R&D",
      picture:"./Images/profilePic.webp"
    },
    {
      name: "Suman",
      title: "Head",
      dept: "Web",
      picture:"./Images/profilePic.webp"
    },
    {
      name: "Suman",
      title: "Head",
      dept: "AI",
      picture:"./Images/profilePic.webp"
    },
    {
      name: "Suman",
      title: "Head",
      dept: "Management",
      picture:"./Images/profilePic.webp"
    },
    {
      name: "Suman",
      title: "Head",
      dept: "PR",
      picture:"./Images/profilePic.webp"
    },
    {
      name:"Suman",
      title:"Head",
      dept:"Creatives",
      picture:"./Images/profilePic.webp"
      }
  ];

export const Team = () => {

    const [cardArray,setCardArray] = React.useState();
    console.log(data)

  return (
    <div className="none">
        {/* <p className="superscript">OUR TEAM</p>
        <div className='button-grid'>
            <button className='button first'>R&D</button>
            <button className='button second'>WEB</button>
            <button className='button third'>AI/ML</button>
            <button className='button fourth'>Management</button>
            <button className='button fifth'>PR</button>
            <button className='button sixth'>CREATIVES</button>
        </div> */}
        <Card  name="Suman" title="head"></Card>

    </div>
  )
}
