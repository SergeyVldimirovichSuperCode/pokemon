import React, {useState, useEffect} from "react";
import axios from "axios";
import FullInf from './fullinformation';
import Pagination from "./pogination";

export default function Informatin(link){
    const [informations, setInformations] = useState([])
    const [loading, setLoading] = useState(false)
    
    
    
    useEffect(()=>{
        const getInformations = async () => {
          setLoading(true)
          const res = await axios.get(link.link.props.children)
          setInformations(res.data)
          setLoading(false)
          
        }
        getInformations()
        
      },[]);
      
    return(
        <div className="informations_list">
            <p>Рост: {informations.weight} ед</p>
            <p>Вес: {informations.height} ед</p>
        </div>
    )  
}