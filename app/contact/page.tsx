// Contact Us page for PhiliFinds
import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-[#EDE9D5] flex flex-col items-center pt-32 pb-12">
      <section className="w-full max-w-6xl flex flex-col items-center">
        <div className="w-full mb-10">
          <h1 className="text-[#3D5242] text-4xl md:text-5xl font-medium leading-[48px] text-center font-inter mb-2">Get in Touch</h1>
          <p className="text-[#507F61] text-lg font-normal leading-7 text-center font-inter max-w-2xl mx-auto">Have questions about your next Philippine adventure? We're here to help you plan the perfect itinerary.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 w-full mb-10">
          {/* Contact Info & Business Hours */}
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <div className="bg-white shadow-lg rounded-2xl border border-[#8FA98A]/20 p-6 flex flex-col gap-6">
              <h2 className="text-[#3D5242] text-xl font-medium leading-7 font-inter mb-2">Contact Information</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#507F61] rounded-full">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" fill="none"/><path d="M2.5 5.5L10 11.25L17.5 5.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="2.5" y="5.5" width="15" height="9" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
                  </span>
                  <div>
                    <div className="text-[#8FA98A] text-sm font-normal leading-5 font-inter">Email</div>
                    <div className="text-[#3D5242] text-base font-normal leading-6 font-inter">hello@philifinds.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#507F61] rounded-full">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" fill="none"/><path d="M6.25 3.75H13.75C15.1307 3.75 16.25 4.86929 16.25 6.25V13.75C16.25 15.1307 15.1307 16.25 13.75 16.25H6.25C4.86929 16.25 3.75 15.1307 3.75 13.75V6.25C3.75 4.86929 4.86929 3.75 6.25 3.75Z" stroke="#fff" strokeWidth="1.5"/><path d="M10 7.5V10.8333" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="12.5" r="0.833333" fill="#fff"/></svg>
                  </span>
                  <div>
                    <div className="text-[#8FA98A] text-sm font-normal leading-5 font-inter">Phone</div>
                    <div className="text-[#3D5242] text-base font-normal leading-6 font-inter">+63 917 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-[#507F61] rounded-full">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="20" height="20" fill="none"/><path d="M10 2.5C13.5899 2.5 16.5 5.41015 16.5 9C16.5 13.25 10 17.5 10 17.5C10 17.5 3.5 13.25 3.5 9C3.5 5.41015 6.41015 2.5 10 2.5Z" stroke="#fff" strokeWidth="1.5"/><circle cx="10" cy="9" r="2" stroke="#fff" strokeWidth="1.5"/></svg>
                  </span>
                  <div>
                    <div className="text-[#8FA98A] text-sm font-normal leading-5 font-inter">Address</div>
                    <div className="text-[#3D5242] text-base font-normal leading-6 font-inter">Manila, Philippines</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#507F61] rounded-2xl p-6 flex flex-col gap-4">
              <h2 className="text-white text-xl font-medium leading-7 font-inter mb-2">Business Hours</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#ede9d5]/80">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#ede9d5]/80">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#ede9d5]/80">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex-1 bg-white shadow-lg rounded-2xl border border-[#8FA98A]/20 p-8 flex flex-col gap-6">
            <h2 className="text-[#3D5242] text-2xl font-medium leading-8 font-inter mb-2">Send us a Message</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[#3D5242] text-base font-medium leading-6 font-inter">Full Name *</label>
                  <input type="text" placeholder="Juan Dela Cruz" className="bg-white border border-[#8FA98A] rounded-lg px-4 py-3 text-[#8FA98A]/50 text-base font-normal font-inter focus:outline-none" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-[#3D5242] text-base font-medium leading-6 font-inter">Email Address *</label>
                  <input type="email" placeholder="juan@example.com" className="bg-white border border-[#8FA98A] rounded-lg px-4 py-3 text-[#8FA98A]/50 text-base font-normal font-inter focus:outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#3D5242] text-base font-medium leading-6 font-inter">Subject *</label>
                <input type="text" placeholder="Inquiry about Palawan tour packages" className="bg-white border border-[#8FA98A] rounded-lg px-4 py-3 text-[#8FA98A]/50 text-base font-normal font-inter focus:outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#3D5242] text-base font-medium leading-6 font-inter">Message *</label>
                <textarea placeholder="Tell us about your dream Philippine adventure..." className="bg-white border border-[#8FA98A] rounded-lg px-4 py-3 text-[#8FA98A]/50 text-base font-normal font-inter focus:outline-none min-h-[120px]" />
              </div>
              <button type="submit" className="w-full mt-2 bg-[#507F61] text-white text-base font-medium leading-6 font-inter py-3 rounded-lg shadow-md hover:bg-[#40634e] transition">Send Message</button>
            </form>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="w-full bg-[#8FA98A] rounded-2xl p-8 flex flex-col items-center mb-6">
          <h2 className="text-white text-2xl font-medium leading-8 font-inter mb-2 text-center">Ready to Explore the Philippines?</h2>
          <p className="text-[#EDE9D5] text-base font-normal leading-6 font-inter text-center max-w-2xl mb-4">From pristine beaches to mountain adventures, we'll help you create unforgettable memories across the 7,641 islands of the Philippines.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-white/20 rounded-full px-6 py-2 text-white text-base font-normal font-inter">Beach Tours</span>
            <span className="bg-white/20 rounded-full px-6 py-2 text-white text-base font-normal font-inter">Island Hopping</span>
            <span className="bg-white/20 rounded-full px-6 py-2 text-white text-base font-normal font-inter">Cultural Experiences</span>
            <span className="bg-white/20 rounded-full px-6 py-2 text-white text-base font-normal font-inter">Adventure Trips</span>
          </div>
        </div>
        <footer className="w-full max-w-6xl mx-auto py-6">
          <div className="text-center text-[#3D5242]/70 text-base font-normal font-inter">© 2026 PhiliFinds. All rights reserved.</div>
        </footer>
      </section>
    </main>
  );
}
