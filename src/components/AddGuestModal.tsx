import React, { useState } from 'react'

interface AddGuestModalProps {
  isOpen: boolean
  onClose: () => void
  onAddGuest: (guest: any) => void
}

const AddGuestModal: React.FC<AddGuestModalProps> = ({ isOpen, onClose, onAddGuest }) => {
  const [guest, setGuest] = useState({
    name: '',
    email: '',
    phone: '',
    lastStay: '',
    assignedProperty: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddGuest(guest)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Guest</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={guest.name}
              onChange={(e) => setGuest({ ...guest, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={guest.email}
              onChange={(e) => setGuest({ ...guest, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={guest.phone}
              onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Stay</label>
            <input
              type="date"
              value={guest.lastStay}
              onChange={(e) => setGuest({ ...guest, lastStay: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Property</label>
            <input
              type="text"
              value={guest.assignedProperty}
              onChange={(e) => setGuest({ ...guest, assignedProperty: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark">
              Add Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddGuestModal