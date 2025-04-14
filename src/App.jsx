import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function Countdown() {
    const targetDate = new Date("2025-06-19T08:30:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ fontSize: "5em", fontFamily: "monospace" }}>
            <p>
                <strong>{String(timeLeft.days).padStart(2, "0")}</strong>{" "}
                <u style={{ fontSize: "0.5em" }}>DAYS</u> :{" "}
                <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>{" "}
                <u style={{ fontSize: "0.5em" }}>HOURS</u>:{" "}
                <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>{" "}
                <u style={{ fontSize: "0.5em" }}>MINUTES</u> :{" "}
                <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>{" "}
                <u style={{ fontSize: "0.5em" }}>SECONDS</u>
            </p>
        </div>
    );
}

function App() {
    return (
        <>
            <h2>EFF DevOWFS Countdown 😭</h2>
            <Countdown />
        </>
    );
}

export default App;
