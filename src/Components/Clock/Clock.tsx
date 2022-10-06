import React, { useEffect } from 'react'
import Footer from '../Footer/Footer';
import AnalogClock from './AnalogClock';
import ClockText from './ClockText';
import DarkTheme from './DarkTheme';

export default function Clock() {
    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date()
            const hour = document.getElementById('clock-hour') as HTMLElement;
            const minutes = document.getElementById('clock-minutes') as HTMLElement;
            const seconds = document.getElementById('clock-seconds') as HTMLElement;
            let hh = date.getHours() * 30;
            let mm = date.getMinutes() * 6;
            let ss = date.getSeconds() * 6;

            hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
            minutes.style.transform = `rotateZ(${mm}deg)`;
            seconds.style.transform = `rotateZ(${ss}deg)`;
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="clock container">
            <div className="clock__container grid">
                <div className="clock__content grid">
                    <div className="clock__circle">
                        <AnalogClock />

                        <DarkTheme />
                    </div>

                    <ClockText />
                </div>

                <Footer />
            </div>
        </section>
    )
}
