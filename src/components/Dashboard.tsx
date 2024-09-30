'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Overview = dynamic(() => import('./Overview.tsx'), { ssr: false })
const Properties = dynamic(() => import('./Properties.tsx'), { ssr: false })
const Guests = dynamic(() => import('./Guests.tsx'), { ssr: false })
const Calendar = dynamic(() => import('./Calendar.tsx'), { ssr: false })

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

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
      {activeTab === 'properties' && <Properties />}
      {activeTab === 'guests' && <Guests />}
      {activeTab === 'calendar' && <Calendar />}
    </div>
  )
}

export default Dashboard