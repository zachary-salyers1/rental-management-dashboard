'use client'

import React from 'react'

const Calendar: React.FC = () => {
  const bookings = [
    { property: 'Lakeside Retreat', checkIn: '9/15/2023', checkOut: '9/20/2023' },
    { property: 'Mountain View Cabin', checkIn: '9/18/2023', checkOut: '9/25/2023' },
    { property: 'Downtown Loft', checkIn: '9/22/2023', checkOut: '9/24/2023' },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Booking Calendar</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          {/* Placeholder for calendar component */}
          <p>Calendar component goes here</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Bookings</h3>
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} className="mb-2">
                <strong>{booking.property}</strong>
                <br />
                Check-in: {booking.checkIn}
                <br />
                Check-out: {booking.checkOut}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Calendar