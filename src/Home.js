import React from 'react'
import './Home.css'
import Banner from  './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
           <Banner />
           <div className='home_section'>
               <Card 
                  src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
                  title ="Oneline Experiences"
                  description="Unique activities we can do together,
                               led by a world of hosts."/>
               <Card   
                  src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
                  
                   title ="Unique"
                   description="Spaces that are more than just a 
                                place to sleep."/>
               <Card 
                  src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                  title ="Entire homes"
                  description="Comfortable Private places , with room for 
                                friends or family."/>
           </div>
          
           <div className='home_section'>
               <Card 
                  src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                  title ="3 Bedroom Flat in Bournemouth"
                  description="Superhost eith a stunning view of the 
                  beachside in sunny Bournemouth"
                  price= "$130/night"
                  />

               <Card 
                  src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                  title ="Penthouse in London"
                  description="Enjoy the amaxing sights of London 
                               with this stunning Penthouse"
                   price="$350/night"            />

               <Card 
               src="https://media.nomadicmatt.com/2018/apartment.jpg"
               title ="1 Bedroom apartment"
               description="Superhost with great amenities and a fabolous
                             shopping complex nearby"
               price="$70/night"              
               
               />
           </div>

          
        </div>
    )
}

export default Home
