'use client'

import React, { useState } from 'react'
import AddPropertyModal from './AddPropertyModal'

interface PropertiesProps {
  properties: any[] | undefined
  setProperties: React.Dispatch<React.SetStateAction<any[]>>
}

const Properties: React.FC<PropertiesProps> = ({ properties = [], setProperties }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState<number | null>(null)

  const handleAddProperty = (newProperty: any) => {
    setProperties([...properties, newProperty])
  }

  const handleEditProperty = (index: number) => {
    setEditingProperty(index)
    setIsModalOpen(true)
  }

  const handleUpdateProperty = (updatedProperty: any) => {
    const newProperties = properties.map((property, index) => 
      index === editingProperty ? updatedProperty : property
    )
    setProperties(newProperties)
    setEditingProperty(null)
  }

  const handleDeleteProperty = (index: number) => {
    const newProperties = properties.filter((_, i) => i !== index)
    setProperties(newProperties)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingProperty(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-primary">Property Management</h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-accent text-white px-4 py-2 rounded">
          + Add Property
        </button>
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
            {properties && properties.length > 0 ? (
              properties.map((property, index) => (
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
                    <button onClick={() => handleEditProperty(index)} className="mr-2 text-accent">Edit</button>
                    <button onClick={() => handleDeleteProperty(index)} className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="p-2 text-center text-secondary">
                  No properties available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddPropertyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddProperty={handleAddProperty}
        onUpdateProperty={handleUpdateProperty}
        editingProperty={editingProperty !== null ? properties[editingProperty] : null}
      />
    </div>
  )
}

export default Properties