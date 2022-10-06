import React from 'react'

export default function AnalogClock() {
  return (
    <>
      <span className="clock__twelve"></span>
      <span className="clock__three"></span>
      <span className="clock__six"></span>
      <span className="clock__nine"></span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" id="clock-hour"></div>
      <div className="clock__minutes" id="clock-minutes"></div>
      <div className="clock__seconds" id="clock-seconds"></div>
    </>
  )
}
