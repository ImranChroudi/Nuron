import data from "../../Data/data.json"
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import React, { useState, useEffect } from "react";

function CountDownTimer({ day, hour, minute, second }) {
  const [remainingTime, setRemainingTime] = useState({
    days: day,
    hours:  hour,
    minutes: minute,
    seconds: second,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        remainingTime.days === 0 &&
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(interval);
      } else {
        setRemainingTime((prevState) => {
          const updatedState = { ...prevState };

          if (updatedState.seconds > 0) {
            updatedState.seconds -= 1;
          } else {
            updatedState.seconds = 59;

            if (updatedState.minutes > 0) {
              updatedState.minutes -= 1;
            } else {
              updatedState.minutes = 59;

              if (updatedState.hours > 0) {
                  updatedState.hours -= 1;
                 
              } else {
                updatedState.hours = 23;

                if (updatedState.days > 0) {
                  updatedState.days -= 1;
                }
              }
            }
          }

          return updatedState;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <div className='d-flex gap-2 countdown__timre'>
        <div className='text-center'>
           <p>{remainingTime.days}</p>
           d'ys
        </div>
        <div className='text-center'>
           <p>{remainingTime.hours < 10 ? `0${remainingTime.hours}` : remainingTime.hours}</p>
           h's
        </div>
        <div className='text-center'>
           <p>{remainingTime.minutes < 10 ? `0${remainingTime.minutes}` : remainingTime.minutes}</p>
           min
        </div>
        <div className='text-center'>
           <p>{remainingTime.seconds}</p>
           sec
        </div>
    </div>
  );
}


export const Elements = ({timer , type = "Art"})=>{

    const liveBiddings = data.LiveBidding;
    const [btnClickeyMenuShare , setClickeyBtnMenuShare] = useState(false)

  return (
  <>
      <div className="cards w-100 m-0 row">
      {liveBiddings && 
      liveBiddings.filter((item)=>item.type = "Art").map((item , key)=>(
          <div className='item  col-md-4 col-sm-6 col-12 p-1' >
              <div className="card rounded bg__color4" >
                    <div className='image__portfolio position-relative  p-2'>
                      <div className='hover__scale' >
                          <img className="card-img-top tag__img rounded" src={item.img} alt="Card image cap" />
                      </div>
                    <div className='timer bottom-0 w-100 flex__center__center start-0 position-absolute'>
                         {timer && <CountDownTimer day={255} hour={12} minute={1} second={0} />}
                    </div>
               </div>
      <div class="card-body">
        <div className='clients__share d-flex gap-3 align-items-center'>
            <div className='images__clients d-flex '>
                {
                item.profiles && item.profiles.map((item)=>(
                 <div className='position-relative name__img__client'>
                     <div className='name__client py-1 px-3 bg__color4 rounded position-absolute'>
                        <p className='font__small fw-bold text-white m-0'>Imran</p>
                     </div>
                     <div>
                        <a href="#">
                            <img className='img__client' src={item} />
                        </a>
                     </div>
                 </div>
                ))
                }
            </div>
            <div className='share'>
                 <span className='color__2 m-0 font__small'> {item.numShare} + Place Bit</span>
            </div>
            <div className='menu__share'>
                <button onClick={()=>{setClickeyBtnMenuShare(prev => prev === key ? false : key)}} >
                     <BiDotsHorizontalRounded />
                </button>
                <ul className={btnClickeyMenuShare === key  ? 'rounded position-absolute px-4 bg__color4 d-block' : 'rounded position-absolute d-none px-4 bg__color4'}>
                    <li className='pt-2 pb-2 color__1'>Share</li>
                    <li className='pt-2 pb-2 color__1'>Reporte</li>
                </ul>
            </div>
        </div>
        <div>
        <h5 class="card-title mt-3 p-0 font__18 m-0 color__1">{item.productName}</h5>
        <p class="card-text font__16 color__2">heighLaset Bid {item.latestBid} </p>
        </div>
    
        <div className='mt-3 fs-6 flex__center__between'>
           <p className='p-0 m-0 font__small color__3'>{item.bidReact} wETH</p>
           <div>
             <span clssName='color__2 flex__center__center'><AiOutlineHeart /> {item.numLove} </span>
           </div>
        </div>
      </div>
    </div>
    </div>
      ))
    }         
    </div>

  </>
  )
}





const LiveBidding = ({timer}) => {

  return (
    <div className='live__bidding w-100 py-5'>
       <div className='contant w-100'>
        
          <div className='mb-3 title'>
            <h1 className='text-white fw-bold'>Live Bidding</h1>
         </div>
           <Elements timer={true}/>

      </div>
    </div>
  )
}

export default LiveBidding