import React, { useEffect } from 'react'

export default function ClockText() {
          useEffect(() => {
                    const interval = setInterval(() => {
                              const textHour = document.getElementById('text-hour') as HTMLElement;
                              const textMinutes = document.getElementById('text-minutes') as HTMLElement;
                              const textSeconds = document.getElementById('text-seconds') as HTMLElement;
                              const textAmPm = document.getElementById('text-ampm') as HTMLElement;
                              const dateWeek = document.getElementById('date-day-week') as HTMLElement;
                              const dateDay = document.getElementById('date-day') as any;
                              const dateMonth = document.getElementById('date-month') as HTMLElement;
                              const dateYear = document.getElementById('date-year') as any;

                              let date = new Date()

                              let hh = date.getHours() as any;
                              let ampm;
                              let mm = date.getMinutes() as any;
                              let ss = date.getSeconds() as any;
                              let day = date.getDate();
                              let dayweek = date.getDay();
                              let month = date.getMonth();
                              let year = date.getFullYear();

                              // We change the hours from 24 to 12 hours and establish whether it is AM or PM
                              if (hh >= 12) {
                                        hh = hh - 12
                                        ampm = 'PM'
                              } else {
                                        ampm = 'AM'
                              }

                              // We detect when it's 0 AM and transform to 12 AM
                              if (hh === 0) { hh = 12 }

                              // Show a zero before hours
                              if (hh < 10) { hh = `0${hh}` }

                              // Show time
                              textHour.innerHTML = `${hh}:`

                              // Show a zero before the minutes
                              if (mm < 10) { mm = `0${mm}` }

                              // Show a zero before the seconds
                              if (ss < 10) { ss = `0${ss}` }

                              // Show minutes
                              textMinutes.innerHTML = `${mm}:`

                              // Show seconds
                              textSeconds.innerHTML = ss

                              // Show am or pm
                              textAmPm.innerHTML = ampm

                              // If you want to show the name of the day of the week
                              let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

                              // We get the months of the year and show it
                              let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

                              // We show the day, the month and the year
                              dateDay.innerHTML = day
                              dateWeek.innerHTML = `${week[dayweek]},`;
                              dateMonth.innerHTML = `${months[month]},`;
                              dateYear.innerHTML = year
                    }, 1000);
                    return () => clearInterval(interval);
          }, []);
          return (
                    <div>
                              <div className="clock__text">
                                        <div className="clock__text-hour" id="text-hour"></div>
                                        <div className="clock__text-minutes" id="text-minutes"></div>
                                        <div className="clock__text-seconds" id="text-seconds"></div>
                                        <div className="clock__text-ampm" id="text-ampm"></div>
                              </div>

                              <div className="clock__date">
                                        <span id="date-day-week"></span>
                                        <span id="date-day"></span>
                                        <span id="date-month"></span>
                                        <span id="date-year"></span>
                              </div>
                    </div>
          )
}
