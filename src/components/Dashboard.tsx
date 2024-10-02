'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Overview = dynamic(() => import('./Overview'), { ssr: false })
const Properties = dynamic(() => import('./Properties'), { ssr: false })
const Guests = dynamic(() => import('./Guests'), { ssr: false })
const Calendar = dynamic(() => import('./Calendar'), { ssr: false })

interface Booking {
  id: number
  title: string
  start: Date
  end: Date
  property: string
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [properties, setProperties] = useState<any[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    // Fetch bookings data here
    // This is a mock implementation. Replace with actual API call.
    const mockBookings: Booking[] = [
      {
        id: 1,
        title: 'Booking 1',
        start: new Date(2023, 8, 15),
        end: new Date(2023, 8, 20),
        property: 'Lakeside Retreat'
      },
      {
        id: 2,
        title: 'Booking 2',
        start: new Date(2023, 8, 18),
        end: new Date(2023, 8, 25),
        property: 'Mountain View Cabin'
      },
      {
        id: 3,
        title: 'Booking 3',
        start: new Date(2023, 8, 22),
        end: new Date(2023, 8, 24),
        property: 'Downtown Loft'
      }
    ]
    setBookings(mockBookings)
  }, [])

  return (
    <div className="p-6 bg-background text-foreground">
      <h1 className="text-2xl font-bold mb-6 text-primary">Rental Manager Dashboard</h1>
      <div className="mb-6 border-b border-gray-200">
        <button
          className={`mr-4 pb-2 ${activeTab === 'overview' ? 'border-b-2 border-accent text-primary font-semibold' : 'text-secondary'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'properties' ? 'border-b-2 border-accent text-primary font-semibold' : 'text-secondary'}`}
          onClick={() => setActiveTab('properties')}
        >
          Properties
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'guests' ? 'border-b-2 border-accent text-primary font-semibold' : 'text-secondary'}`}
          onClick={() => setActiveTab('guests')}
        >
          Guests
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'calendar' ? 'border-b-2 border-accent text-primary font-semibold' : 'text-secondary'}`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar
        </button>
      </div>
      {activeTab === 'overview' && <Overview />}
      {activeTab === 'properties' && <Properties properties={properties} setProperties={setProperties} />}
      {activeTab === 'guests' && <Guests />}
      {activeTab === 'calendar' && <Calendar bookings={bookings} />}
    </div>
  )
}

export default Dashboard