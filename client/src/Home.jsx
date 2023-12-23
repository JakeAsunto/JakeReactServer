import './Home.css';
import NavBar from './NavBar';
const handleButton = () => {
window.open("https://www.facebook.com/spidergarlic10", "_blank");
};

export default function Home() {
  return (
   <>
    <NavBar />
    <div className="desc">
    <h1 className="welcome">Welcome to JakeServer!</h1>
     <p> Made With React ⚛️ + Vite ⚡ + Replit 🌀</p>
     <p>This website is currently in development.</p>
      <br />
      <button
        className="button-85"
        role="button"
        onClick={ handleButton }>
          Jake Dev
      </button>
    </div>
  </>
  );
} 
