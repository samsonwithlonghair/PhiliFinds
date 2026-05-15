// About Us page for PhiliFinds
import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5F3E8] flex flex-col items-center pt-32 pb-12">
      <section className="w-full max-w-5xl flex flex-col items-center">
        <div className="relative w-full bg-[#F5F3E8] mb-8">
          <h1 className="text-[#3D4F3D] text-4xl md:text-5xl font-medium leading-[48px] text-center font-inter mb-2">About PhiliFinds</h1>
          <p className="text-[#3D4F3D] text-lg md:text-xl font-normal leading-7 text-center font-inter">Your trusted gateway to discovering the Philippines</p>
        </div>
        <div className="w-full bg-white shadow-md rounded-2xl border border-[#3D4F3D]/20 p-8 mb-12">
          <h2 className="text-[#5A8A73] text-xl font-medium leading-[30px] font-inter mb-4">Our Purpose</h2>
          <p className="text-[#3D4F3D] text-base font-normal leading-[26px] font-inter mb-2">PhiliFinds is an accommodation "Gateway Service" for foreigners in the Philippines. We provide personalized, data-driven itineraries that optimize lodgings, travel time, and cost for enjoyable and hassle-free vacations in one of Southeast Asia's most beautiful destinations.</p>
          <p className="text-[#3D4F3D] text-base font-normal leading-[26px] font-inter">Whether you're a first-time visitor or a seasoned traveler, PhiliFinds helps you navigate the Philippines with confidence, ensuring every journey is memorable and stress-free.</p>
        </div>
        <div className="w-full flex flex-col gap-10 mb-12">
          <h2 className="text-[#5A8A73] text-xl font-medium leading-[30px] text-center font-inter">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl border border-[#3D4F3D]/20 p-6 flex flex-col items-start">
              <h3 className="text-[#3D4F3D] text-lg font-medium leading-[27px] font-inter mb-2">Budget Optimization</h3>
              <p className="text-[#3D4F3D]/80 text-base font-normal leading-6 font-inter">Calculate and project costs for lodging, food, and transportation, helping you stay within budget while maximizing your experience.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl border border-[#3D4F3D]/20 p-6 flex flex-col items-start">
              <h3 className="text-[#3D4F3D] text-lg font-medium leading-[27px] font-inter mb-2">Travel Time Assessment</h3>
              <p className="text-[#3D4F3D]/80 text-base font-normal leading-6 font-inter">Optimize your travel schedule to balance cost and transportation time between destinations while considering emergency contacts.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl border border-[#3D4F3D]/20 p-6 flex flex-col items-start">
              <h3 className="text-[#3D4F3D] text-lg font-medium leading-[27px] font-inter mb-2">Navigation Assistance</h3>
              <p className="text-[#3D4F3D]/80 text-base font-normal leading-6 font-inter">Get point-to-point travel guidance and public transportation suggestions to navigate the Philippines with ease.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl border border-[#3D4F3D]/20 p-6 flex flex-col items-start">
              <h3 className="text-[#3D4F3D] text-lg font-medium leading-[27px] font-inter mb-2">User Management</h3>
              <p className="text-[#3D4F3D]/80 text-base font-normal leading-6 font-inter">Track completed and ongoing trips, access emergency contact information, and manage all your travel details in one place.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl border border-[#3D4F3D]/20 p-6 flex flex-col items-start">
              <h3 className="text-[#3D4F3D] text-lg font-medium leading-[27px] font-inter mb-2">Archive Integration</h3>
              <p className="text-[#3D4F3D]/80 text-base font-normal leading-6 font-inter">Store itinerary history, share feedback on past trips, and maintain a comprehensive record of your Philippine adventures.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl border border-[#3D4F3D]/20 p-6 flex flex-col items-start">
              <h3 className="text-[#3D4F3D] text-lg font-medium leading-[27px] font-inter mb-2">AI Itinerary Helper</h3>
              <p className="text-[#3D4F3D]/80 text-base font-normal leading-6 font-inter">Creates personalized travel itineraries based on your preferences, budget, and pace, scheduling activities that match your interests.</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-br from-[#5A8A73] to-[#5A8A73] shadow-lg rounded-2xl p-10 flex flex-col items-center">
          <h2 className="text-[#F5F3E8] text-xl font-medium leading-[30px] text-center font-inter mb-8">Why Choose PhiliFinds?</h2>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-8">
            <div className="w-80 flex flex-col items-center">
              <span className="text-[36px] leading-10" style={{color: 'rgba(245,243,232,0.90)'}}>🎯</span>
              <div className="text-[#F5F3E8] text-base font-medium leading-6 font-inter">Personalized</div>
              <div className="text-[#F5F3E8]/80 text-base font-normal leading-6 font-inter text-center">Every itinerary is tailored to your unique preferences and travel style.</div>
            </div>
            <div className="w-80 flex flex-col items-center">
              <span className="text-[36px] leading-10" style={{color: 'rgba(245,243,232,0.90)'}}>💡</span>
              <div className="text-[#F5F3E8] text-base font-medium leading-6 font-inter">Data-Driven</div>
              <div className="text-[#F5F3E8]/80 text-base font-normal leading-6 font-inter text-center">Smart algorithms optimize your travel for the best experience and value.</div>
            </div>
            <div className="w-80 flex flex-col items-center">
              <span className="text-[36px] leading-10" style={{color: 'rgba(245,243,232,0.90)'}}>✨</span>
              <div className="text-[#F5F3E8] text-base font-medium leading-6 font-inter">Hassle-Free</div>
              <div className="text-[#F5F3E8]/80 text-base font-normal leading-6 font-inter text-center">Focus on enjoying your vacation while we handle the planning details.</div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="text-[#F5F3E8]/90 text-base font-normal leading-6 font-inter text-center max-w-2xl">Start your Philippine adventure with PhiliFinds and discover a smarter way to travel. We're here to make your journey unforgettable.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
