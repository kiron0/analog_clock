import React, { useState } from 'react'

export default function DarkTheme() {
          const [theme, setTheme] = useState<Boolean>(false);

          const toggleClass = () => {
                    setTheme(document.body.classList.toggle("dark-theme"));
          };

          return (
                    <div className="clock__theme" onClick={toggleClass}>
                              {
                                        theme ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>
                              }
                    </div>
          )
}
