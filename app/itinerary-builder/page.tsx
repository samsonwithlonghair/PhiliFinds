'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ItineraryBuilder() {
  const [currentStep, setCurrentStep] = useState('setup');
  const [destination, setDestination] = useState('');
  const [tripDuration, setTripDuration] = useState(7);
  const [durationUnit, setDurationUnit] = useState('days');

  const handleContinue = () => {
    if (destination.trim()) {
      setCurrentStep('places');
    }
  };

  const steps = [
    { id: 'setup', label: 'Setup', description: 'Next step' },
    { id: 'places', label: 'Pick Places', description: 'Step 2' },
    { id: 'schedule', label: 'Schedule', description: 'Step 3' },
    { id: 'budget', label: 'Budget', description: 'Final step' },
  ];

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#F5F3E8' }}>
      {/* Header */}
      <header className="w-full h-16 bg-[#4A5A47] shadow-md flex items-center px-8">
        <h1 className="text-2xl font-semibold" style={{ color: '#F5F3E8' }}>
          Travel Planner
        </h1>
      </header>

      {/* Sub Navigation Tabs */}
      <nav className="w-full bg-white border-b border-[#4A5A47]/20 px-8 flex gap-8">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => {
              if (step.id === 'setup' || destination.trim()) {
                setCurrentStep(step.id);
              }
            }}
            className={`py-4 px-3 flex items-center gap-2 border-b-2 transition ${
              currentStep === step.id
                ? 'border-[#5FAF6B]'
                : 'border-transparent hover:text-[#5FAF6B]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {step.id === 'setup' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
              {step.id === 'places' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              )}
              {step.id === 'schedule' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              )}
              {step.id === 'budget' && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
            </svg>
            <span style={{ color: currentStep === step.id ? '#5FAF6B' : '#6A6A6A' }}>
              {step.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-8 py-12">
        {/* Setup Step */}
        {currentStep === 'setup' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-semibold text-[#2A2A2A] mb-2">Plan Your Trip</h2>
              <p className="text-base text-[#6A6A6A]">Let's start by setting up your trip details</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#4A5A47]/20 max-w-2xl space-y-6">
              {/* Destination */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FAF6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <label className="text-sm font-medium text-[#2A2A2A]">Destination</label>
                </div>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where are you going?"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-[#2A2A2A] placeholder-[#6A6A6A] focus:outline-none focus:ring-2 focus:ring-[#5FAF6B]"
                />
              </div>

              {/* Trip Duration */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FAF6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <label className="text-sm font-medium text-[#2A2A2A]">Trip Duration</label>
                </div>

                {/* Duration Unit Selector */}
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={durationUnit === 'days'}
                      onChange={() => {
                        setDurationUnit('days');
                        setTripDuration(7);
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-[#2A2A2A]">Days</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={durationUnit === 'weeks'}
                      onChange={() => {
                        setDurationUnit('weeks');
                        setTripDuration(2);
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-[#2A2A2A]">Weeks</span>
                  </label>
                </div>

                {/* Duration Input and Display */}
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={tripDuration}
                    onChange={(e) => setTripDuration(parseInt(e.target.value) || 1)}
                    min="1"
                    className="w-32 px-3 py-2 rounded-lg bg-white border border-gray-300 text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#5FAF6B]"
                  />
                  <span className="text-base text-[#6A6A6A]">
                    {durationUnit === 'days' ? 'day(s)' : 'week(s)'}
                  </span>
                </div>

                <p className="text-sm text-[#6A6A6A]">
                  Total: {durationUnit === 'days' ? tripDuration : tripDuration * 7} days
                </p>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                disabled={!destination.trim()}
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition ${
                  destination.trim()
                    ? 'bg-[#5FAF6B] text-white hover:bg-[#4a9b5a]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Places
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Step Progress Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-white rounded-2xl p-4 border-2 border-[#5FAF6B]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5FAF6B]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5FAF6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2A2A]">Pick Places</h3>
                    <p className="text-xs text-[#6A6A6A]">Next step</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E8E6D8]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8E6D8] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#6A6A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#6A6A6A]">Schedule</h3>
                    <p className="text-xs text-[#6A6A6A]">Step 3</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E8E6D8]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8E6D8] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#6A6A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#6A6A6A]">Budget</h3>
                    <p className="text-xs text-[#6A6A6A]">Final step</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Places Step */}
        {currentStep === 'places' && (
          <div className="space-y-8">
            {/* Page Title */}
            <div>
              <h2 className="text-4xl font-semibold text-[#2A2A2A] mb-2">Choose Your Destinations</h2>
              <p className="text-base text-[#6A6A6A]">Select places you'd like to visit in {destination}</p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search places..."
                  className="w-full px-10 py-3 rounded-lg bg-white border border-gray-300 text-[#2A2A2A] placeholder-[#6A6A6A] focus:outline-none focus:ring-2 focus:ring-[#5FAF6B]"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-[#6A6A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filters */}
              <div className="flex gap-3 flex-wrap">
                <button className="px-3 py-2 rounded-lg bg-[#7A9174] text-[#F5F3E8] font-medium text-sm hover:bg-[#6a8264] transition">
                  All
                </button>
                {['Museum', 'Park', 'Tour', 'Nature', 'Market', 'Entertainment'].map((category) => (
                  <button
                    key={category}
                    className="px-3 py-2 rounded-lg bg-[#F5F3E8] border border-[#4A5A47]/20 text-[#2A2A2A] font-medium text-sm hover:bg-gray-100 transition"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Cards Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'National Museum', category: 'Museum', desc: 'Explore the rich history and culture', duration: '2-3 hours', price: '$25' },
                { name: 'Central Park', category: 'Park', desc: 'Beautiful green space for relaxation', duration: '1-2 hours', price: 'Free' },
                { name: 'Art Gallery', category: 'Museum', desc: 'Contemporary and classic art collections', duration: '2-3 hours', price: '$30' },
                { name: 'Historic Downtown', category: 'Tour', desc: 'Walking tour through historic architecture', duration: '3-4 hours', price: '$15' },
                { name: 'Mountain Viewpoint', category: 'Nature', desc: 'Stunning panoramic views of the city', duration: '1-2 hours', price: '$10' },
                { name: 'Local Market', category: 'Market', desc: 'Experience local culture and cuisine', duration: '2-3 hours', price: '$20' },
                { name: 'Botanical Garden', category: 'Park', desc: 'Peaceful garden with exotic plants', duration: '2-3 hours', price: '$18' },
                { name: 'Aquarium', category: 'Entertainment', desc: 'Marine life and interactive exhibits', duration: '2-3 hours', price: '$35' },
                { name: 'Theater District', category: 'Entertainment', desc: 'Live performances and shows', duration: '3-4 hours', price: '$50' },
                { name: 'Beach', category: 'Nature', desc: 'Relaxing seaside activities', duration: '3-4 hours', price: 'Free' },
              ].map((place) => (
                <div key={place.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#4A5A47]/20 hover:shadow-md transition">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#2A2A2A] mb-2">{place.name}</h3>
                    <span className="inline-block px-3 py-1 bg-[#F5F3E8] border border-[#4A5A47]/20 rounded-lg text-xs font-medium text-[#2A2A2A]">
                      {place.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#6A6A6A] mb-4">{place.desc}</p>

                  <div className="flex items-center gap-4 text-sm text-[#6A6A6A] mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {place.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {place.price}
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 rounded-lg border border-[#5FAF6B] text-[#5FAF6B] font-medium text-sm hover:bg-[#5FAF6B]/10 transition">
                    + Add to Itinerary
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-8">
              <button
                onClick={() => setCurrentStep('setup')}
                className="px-6 py-3 border border-gray-300 rounded-lg text-[#2A2A2A] font-medium hover:bg-gray-50 transition"
              >
                ← Back to Setup
              </button>
              <button
                onClick={() => setCurrentStep('schedule')}
                className="px-6 py-3 bg-[#5FAF6B] text-white rounded-lg font-medium hover:bg-[#4a9b5a] transition"
              >
                Continue to Schedule →
              </button>
            </div>
          </div>
        )}

        {/* Schedule Step */}
        {currentStep === 'schedule' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-semibold text-[#2A2A2A] mb-2">Schedule Your Days</h2>
              <p className="text-base text-[#6A6A6A]">Plan your daily activities over {tripDuration} {durationUnit}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#4A5A47]/20 max-w-2xl">
              <p className="text-[#6A6A6A] mb-6">Create a day-by-day schedule for your trip.</p>
              <button
                onClick={() => setCurrentStep('budget')}
                className="px-6 py-3 bg-[#5FAF6B] text-white rounded-lg font-medium hover:bg-[#4a9b5a] transition"
              >
                Continue to Budget
              </button>
            </div>
          </div>
        )}

        {/* Budget Step */}
        {currentStep === 'budget' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-semibold text-[#2A2A2A] mb-2">Set Your Budget</h2>
              <p className="text-base text-[#6A6A6A]">Plan your spending for {destination}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#4A5A47]/20 max-w-2xl">
              <p className="text-[#6A6A6A] mb-6">Set budgets for accommodation, dining, activities, and transportation.</p>
              <button
                className="px-6 py-3 bg-[#5FAF6B] text-white rounded-lg font-medium hover:bg-[#4a9b5a] transition"
              >
                Complete Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
