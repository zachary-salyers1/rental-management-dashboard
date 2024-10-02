'use client'

import React, { useState } from 'react'
import AddGuestModal from './AddGuestModal'
import GuestDetailsModal from './GuestDetailsModal'

interface Guest {
  id: number
  name: string
  email: string
  phone: string
  lastStay: string
  upcomingStay: string
  totalStays: number
  favoriteProperty: string
  assignedProperty: string
  bookingHistory: BookingHistoryItem[]
  notes: Note[]
}

interface BookingHistoryItem {
  id: number
  property: string
  checkIn: string
  checkOut: string
}

interface Note {
  id: number
  content: string
  date: string
}

const Guests: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      lastStay: '2023-05-01',
      upcomingStay: '2023-07-15',
      totalStays: 3,
      favoriteProperty: 'Lakeside Retreat',
      assignedProperty: 'Lakeside Retreat',
      bookingHistory: [
        { id: 1, property: 'Lakeside Retreat', checkIn: '2023-05-01', checkOut: '2023-05-05' },
        { id: 2, property: 'Mountain View Cabin', checkIn: '2023-03-15', checkOut: '2023-03-20' },
      ],
      notes: [
        { id: 1, content: 'Prefers quiet rooms', date: '2023-04-01T12:00:00Z' },
      ],
    },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', lastStay: '2023-04-15', assignedProperty: 'Downtown Loft', upcomingStay: '2023-08-01', totalStays: 2, favoriteProperty: 'Downtown Loft', bookingHistory: [], notes: [] },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '456-789-0123', lastStay: '2023-03-22', assignedProperty: 'Mountain View Cabin', upcomingStay: '2023-09-10', totalStays: 5, favoriteProperty: 'Mountain View Cabin', bookingHistory: [], notes: [] },
  ])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)

  const handleAddGuest = (newGuest: Omit<Guest, 'id'>) => {
    const guestWithId = { ...newGuest, id: Date.now() }
    setGuests([...guests, guestWithId])
    setIsAddModalOpen(false)
  }

  const handleViewDetails = (guest: Guest) => {
    setSelectedGuest(guest)
  }

  const handleCloseDetails = () => {
    setSelectedGuest(null)
  }

  const handleUpdateGuest = (updatedGuest: Guest) => {
    setGuests(guests.map(guest => guest.id === updatedGuest.id ? updatedGuest : guest))
    setSelectedGuest(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Guest Management</h2>
        <button onClick={() => setIsAddModalOpen(true)} className="bg-accent text-white px-4 py-2 rounded">
          + Add Guest
        </button>
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
          {guests.map((guest) => (
            <tr key={guest.id} className="border-b">
              <td className="p-2">{guest.name}</td>
              <td className="p-2">{guest.email}</td>
              <td className="p-2">{guest.phone}</td>
              <td className="p-2">{guest.lastStay}</td>
              <td className="p-2">{guest.assignedProperty}</td>
              <td className="p-2">
                <button onClick={() => handleViewDetails(guest)} className="text-accent">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddGuestModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddGuest={handleAddGuest}
      />
      {selectedGuest && (
        <GuestDetailsModal
          isOpen={!!selectedGuest}
          onClose={handleCloseDetails}
          guest={selectedGuest}
          onUpdateGuest={handleUpdateGuest}
        />
      )}
    </div>
  )
}

export default Guests