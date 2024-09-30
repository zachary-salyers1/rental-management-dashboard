'use client'

import React from 'react'

const Properties: React.FC = () => {
  const properties = [
    { name: 'Lakeside Retreat', type: 'House', location: 'Lake Tahoe, CA', bedrooms: 3, bathrooms: 2, maxGuests: 8, pricePerNight: 250, assignedGuests: 1 },
    { name: 'Downtown Loft', type: 'Apartment', location: 'San Francisco, CA', bedrooms: 1, bathrooms: 1, maxGuests: 2, pricePerNight: 150, assignedGuests: 1 },
    { name: 'Mountain View Cabin', type: 'Cabin', location: 'Aspen, CO', bedrooms: 2, bathrooms: 1, maxGuests: 4, pricePerNight: 200, assignedGuests: 1 },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-primary">Property Management</h2>
        <button className="bg-accent text-white px-4 py-2 rounded">+ Add Property</button>
      </div>
      <div className="bg-card-bg rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 text-secondary">Name</th>
              <th className="text-left p-2 text-secondary">Type</th>
              <th className="text-left p-2 text-secondary">Location</th>
              <th className="text-left p-2 text-secondary">Bedrooms</th>
              <th className="text-left p-2 text-secondary">Bathrooms</th>
              <th className="text-left p-2 text-secondary">Max Guests</th>
              <th className="text-left p-2 text-secondary">Price/Night</th>
              <th className="text-left p-2 text-secondary">Assigned Guests</th>
              <th className="text-left p-2 text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-2 text-foreground">{property.name}</td>
                <td className="p-2 text-foreground">{property.type}</td>
                <td className="p-2 text-foreground">{property.location}</td>
                <td className="p-2 text-foreground">{property.bedrooms}</td>
                <td className="p-2 text-foreground">{property.bathrooms}</td>
                <td className="p-2 text-foreground">{property.maxGuests}</td>
                <td className="p-2 text-foreground">${property.pricePerNight}</td>
                <td className="p-2 text-foreground">{property.assignedGuests}</td>
                <td className="p-2">
                  <button className="mr-2 text-accent">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Properties