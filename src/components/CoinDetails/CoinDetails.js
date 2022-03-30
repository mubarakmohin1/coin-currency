  
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
 
 const CoinDetails = () => {
     const {id} = useParams();
     const [loading,setLoading] = useState(false);
     const [coin,setCoin] = useState({});
     useEffect(()=>{
         setLoading(true);
         fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
         .then(res =>res.json())
         .then(data =>setCoin(data))
         setLoading(false);
        
     },[id]);
     return (
        <>
        {
            loading ?(<Spinner/>):( <div className='px-4 h-[80hvh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl'>General Info:</h1>
                    <hr />
                    <h1>Coin-Name: {coin.name}</h1>
                    <h1>Market cap: {coin?.market_cap_rank}</h1>
                    <h1>Contact address: {coin?.contract_address}</h1>
                    <h1>Country origin: {coin?.country_origin}</h1>
                    <h1>Hashing algorithm: {coin?.hashing_algorithm}</h1>
                    <h1> Genesis date: {coin?.genesis_date}</h1>
                    <h1>Last update: {coin?.last_updated}</h1>
                    <h1 className='text-3xl pt-8'>Scores:</h1>
                    <h1>Community score: {coin?.community_score}</h1>
                    <h1>Developer score: {coin?.developer_score}</h1>
                    <h1>Liquidity score: {coin?.liquidity_score}</h1>
                    <h1> public interest score: {coin?.public_interest_score}</h1>
                    
                     
       
                   
                </div>
                <div className='flex justify-center items-center order-1 md:order-2'> <img src={coin.image?.large} alt="" /> </div>
                
                
            </div>
            
        </div>)
        }
        
        </>
     );
 };
 
 export default CoinDetails;