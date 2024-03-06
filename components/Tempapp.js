import React, { useEffect, useState } from 'react';
import "./css/style.css";
//'fas fa-street-view' ghumta hua human figure hai wo which we get from fonrawesome.com
//openWeatherMap.org - for weather api
//units=metric  ->  F to C(metric) conversion
//${search}
//https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=94a25beebf3a1b0b2f6c9932bf883745
//                                                  ----------------------       --------------------------------



const Tempapp = () => {
    const [search, setSearch] = useState("Paradip");
    const [city, setCity] = useState(null);


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=94a25beebf3a1b0b2f6c9932bf883745`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])


    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type='search'
                        value={search}
                        className='inputField'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>

                {!city ? (<p className='errorMsg'>No Data Found</p>) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className='fas fa-street-view'></i>{search}
                            </h2>
                            <h1 className='temp'>{city.temp}°Cel</h1>
                            <h3 className='tempmin_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                        </div>

                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Tempapp;
