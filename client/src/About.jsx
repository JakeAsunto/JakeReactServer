import Navbar from './NavBar';
import { useState, useRef, useEffect } from 'react';
import useCountdown from './hooks/useCountdown';
// import ShowCounter from './ShowCounter';


export default function About() {
 let mainYear = new Date().getFullYear();
  let countdown = `Dec 25, ${mainYear} 00:00:00`;
      // Set the date we're counting down to
  const [ days, hours, minutes, seconds ] = useCountdown(countdown);

  const [ time, setTime ] = useState(`— Wait ⚡⚙️...`);

 useEffect(() => {
   setInterval(() => setTime(
     new Date().toLocaleString("en-US", {
         timeZone: "Asia/Manila"
     })
   ), 1000);
   return () => clearInterval(time);
  }, []);

  return (
      <>
        <Navbar />
        <h1>About</h1>
          <p>This is the about page</p>
          <div>
            <p>This is a test server made using reactjs!</p> <br/>
            <b>— Created By Jake Dev.</b> <br/>
            <b>— Current Date In Manila: { time }</b>
            <br />

            <strong> — Time Left Before Christmas: { days }d, { hours }h, { minutes }m, { seconds }s
            </strong>
          </div>
      </>
    );
}