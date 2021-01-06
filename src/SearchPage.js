import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className='searchpage'>
           <div className='searchpage_info'>
               <p>62 stays . 26 august to 30 august . 2 guest </p>
               <h1> Stays nearby  </h1>
               <Button  
               variant="outlined"> Cancellation Flexibility
               </Button>
               <Button  
               variant="outlined">Type of place
               </Button>
               <Button  
               variant="outlined"> Price
               </Button>
               <Button  
               variant="outlined"> Rooms and Beds
               </Button>
               <Button  
               variant="outlined"> More filters
               </Button>

               <SearchResult 
               img = "https://a0.muscache.com/im/pictures/98d7e328-0c17-42ab-a58f-87041cd33022.jpg?im_w=720"
               location =""
               title ="Entire house Big Bear"
               description ="The Studio in Big Bear Luxury Suite"
               price =" $88 / night"
               star ={4.99}
               total =""
               />

            <SearchResult 
               img = "https://a0.muscache.com/im/pictures/dfd9109c-0b4d-48f0-ab36-9bcb515e0965.jpg?im_w=720"
               location =""
               title ="Entire cabin Fawnskin"
               description ="GETWAY CABIN MINUTES TO THE LAKE"
               price =" $93 / night"
               star ={4.97}
               total =""
               />

            <SearchResult 
               img = "https://a0.muscache.com/im/pictures/b71446a2-ed39-47d9-9060-5132d51fd16f.jpg?im_w=720"
               location =""
               title ="Big Bear"
               description ="Big Bear Cozy Cabin 2"
               price =" $135 / night"
               star ={4.96}
               total =""
               />

<SearchResult 
               img ="https://a0.muscache.com/im/pictures/db0b6dc2-5ce7-40aa-b677-cb226aea2120.jpg?im_w=720"
               location =""
               title ="Entire Big Bear Lake"
               description ="NEW Contemporary,Cozy Cabin in Heart of Action"
               price =" $212 / night"
               star ="New"
               total =""
               />

            <SearchResult 
               img = "https://a0.muscache.com/im/pictures/2784f178-8b7d-4afc-a59f-23e55a56d702.jpg?im_w=720"
               location =""
               title ="Entire cabin. Big Bear Lake"
               description ="Look Out at Mountain Views from an A-Frame Cabin"
               price =" $213 / night"
               star ={4.89}
               total =""
               />

            <SearchResult 
               img = "https://a0.muscache.com/im/pictures/1e34c48c-4d2d-49e4-b08b-60e09ca01e80.jpg?im_w=720"
               location =""
               title ="Entire cabin. Big Bear"
               description ="SPA+BBQ+HIKE Backs2Forest 7mi-Lake.Shops&Slopes"
               price =" $118 / night"
               star ={4.93}
               total =""
               />
                <SearchResult 
               img = "https://a0.muscache.com/im/pictures/0b273096-6d68-4631-ad76-9cc793d885aa.jpg?im_w=720"
               location =""
               title ="Entire condominium. Big Bear"
               description ="Bear X Chalets 1min walk to the slopes BearMTN 102"
               price =" $137 / night"
               star ={4.99}
               total =""
               />

            <SearchResult 
               img = "https://a0.muscache.com/im/pictures/d50992c2-ad64-429b-9e59-023377e4b153.jpg?im_w=720"
               location =""
               title ="Entire cabin. Big Bear"
               description ="Serenity in the Tree Tops"
               price =" $81 / night"
               star ={4.93}
               total =""
               />

            <SearchResult 
               img = "https://a0.muscache.com/im/pictures/ee6e2258-5cfd-4ce0-99e9-29da196fb80f.jpg?im_w=720"
               location =""
               title =" Entire cabin.Big Bear Lake"
               description ="Walk to Big Bear Village studio"
               price =" $98 / night"
               star ={4.82}
               total =""
               />
               <SearchResult 
               img = "https://a0.muscache.com/im/pictures/13bf34a2-721c-4e4f-a47d-73d393700851.jpg?im_w=720"
               location =""
               title ="Big Bear"
               description ="Boulder Bay Lakeside Suite -FREE Kaak/Bike Rental!"
               price =" $166 / night"
               star ="New"
               total =""
               />

           </div>
            
        </div>
    )
}

export default SearchPage
