'use client'

import React from 'react'

const Guests: React.FC = () => {
  const guests = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', lastStay: '2023-05-01', assignedProperty: 'Lakeside Retreat' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', lastStay: '2023-04-15', assignedProperty: 'Downtown Loft' },
    { name: 'Bob Johnson', email: 'bob@example.com', phone: '456-789-0123', lastStay: '2023-03-22', assignedProperty: 'Mountain View Cabin' },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Guest Management</h2>
        <button className="bg-black text-white px-4 py-2 rounded">+ Add Guest</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Phone</th>
            <th className="text-left p-2">Last Stay</th>
            <th className="text-left p-2">Assigned Property</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{guest.name}</td>
              <td className="p-2">{guest.email}</td>
              <td className="p-2">{guest.phone}</td>
              <td className="p-2">{guest.lastStay}</td>
              <td className="p-2">{guest.assignedProperty}</td>
              <td className="p-2">
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Guests