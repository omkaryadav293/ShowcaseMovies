export {removeperson} from "../reducers/peopleSlice";
import {loadperson} from "../reducers/peopleSlice";
import axios from "../../utils/Axios";

export const asyncloadperson=  (id) => async(dispatch, getState) =>{
    
    try{
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`); 
        const combinedCredits= await axios.get(`/person/${id}/combined_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
       

        let theultimatedetails ={
            detail : detail.data,
            externalid : externalid.data,
            combinedCredits : combinedCredits.data,
            movieCredits : movieCredits.data,
            tvCredits : tvCredits.data,
           

        }
        //  console.log(theultimatedetails);
        dispatch(loadperson(theultimatedetails));
    }
    catch (error){
        console.log(error);
    }
   
   
}