"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Have questions about our services? Reach out to our team and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#6500AB]/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-500/30">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-100 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-purple-100 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="+91 96878 78669"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-100 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-6 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white font-medium rounded-xl hover:from-[#D800AA] hover:to-[#FF6DE1] shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#6500AB]/50 to-[#6500AB]/30 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-purple-500/30">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#C6009A]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-pink-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-purple-100">+91 96878 78669</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#C6009A]/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-pink-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-purple-100">info@pitchvilla.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#C6009A]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-pink-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Office</h3>
                    <p className="text-purple-100">1815, BLOCK-B</p>
                    <p className="text-purple-100">NAVRATNA CORPORATE PARK AMBLI BOPAL ROAD AHMEDABAD Ahmedabad, Gujarat 380058</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#C6009A]/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-pink-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Working Hours</h3>
                    <p className="text-purple-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-purple-100">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#6500AB]/50 to-[#6500AB]/30 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-purple-500/30">
              <h2 className="text-2xl font-semibold text-white mb-6">Follow Us</h2>
              <div className="flex space-x-4">
  {['LinkedIn', 'Instagram'].map((social) => {
    const socialLink = 
      social === 'LinkedIn' 
      ? 'https://www.linkedin.com/company/pitchvilla/' 
      : 'https://www.instagram.com/pitchvillaindia/?hl=en';

    return (
      <a
        key={social}
        href={socialLink}
        className="flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-3 transition-colors duration-300"
      >
        <span className="text-white">{social}</span>
      </a>
    );
  })}
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
