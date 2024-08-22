export {removemovie} from "../reducers/movieSlice";
import {loadmovie, removemovie} from "../reducers/movieSlice";
import axios from "../../utils/Axios";

export const asyncloadmovie=  (id) => async(dispatch, getState) =>{
    
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const credits = await axios.get(`/movie/${id}/credits`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

        let theultimatedetails ={
            detail : detail.data,
            externalid : externalid.data,
            credits : credits.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find(m => m.type === "Trailer"),
            watchproviders : watchproviders.data.results.IN,
        }
        //  console.log(theultimatedetails);
        dispatch(loadmovie(theultimatedetails));
    }
    catch (error){
        console.log(error);
    }
   
   
}