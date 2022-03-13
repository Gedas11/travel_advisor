import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


   
  

 export const getPlacesData = async (sw, ne)=>{
    try{
        const {data: {data}}  = await axios.get(URL, options)
        const options = { 
            
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '497f5e8830msha3fe7b68f914373p18ff68jsn8cbb49b12df1'
            }
          };
    
        return data;
    }catch (error){
        console.log(error)

    }

}