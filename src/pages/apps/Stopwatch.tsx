import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSeconds: number) => {
    const hour = Math.floor((timeInSeconds/3600));
    const minute = Math.floor((timeInSeconds%3600)/60);
    const seconds = timeInSeconds % 60;
    
    const hourInString = hour.toString().padStart(2,"0");
    const minuteInString = minute.toString().padStart(2,"0");
    const secondsInString = seconds.toString().padStart(2,"0");

    return `${hourInString}:${minuteInString}:${secondsInString}`;
}

const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
      let intervalId:number;
      if(isActive){
        intervalId = setInterval(() => {
            setTime(prev => prev+1);
        },1000)
      }
    
      return () => {
        clearInterval(intervalId)
      }
    }, [isActive]);

    const resetHandler = () => {
        setTime(0);
        setIsActive(false);
    }
    
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <main className="dashboard-app-container">
      <h1>Stopwatch.</h1>
        <section>
            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
                <button onClick={() => setIsActive((prev) => !prev)}>{isActive === true ? "Stop" : "Start"}</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
