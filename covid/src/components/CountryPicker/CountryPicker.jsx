import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchcountries} from '../../api/index'
const CountryPicker=({handleCountryChange})=>{
const [fetchedCountires,setfetchedCountires]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setfetchedCountires(await fetchcountries());

        }
        fetchAPI();
    },[setfetchedCountires]);


    return(
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}> 
            <option value="">Global</option>
    {fetchedCountires.map((country,i)=><option key={i} value={country}>{country}</option>)}
        </NativeSelect>
         
    </FormControl>
    )
}
export default CountryPicker;