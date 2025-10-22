import { toast } from "react-toastify";
import React, { useState } from "react";
function BookingForm({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [formdata, SetFormData] = useState({
    username: "",
    phonenumber: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formdata.username || !formdata.phonenumber || !formdata.date || !formdata.time) {
        toast.error(" Please fill all required fields!",{ toastId:"all-fields-mandatory" });
        return;
    }
    if (formdata.phonenumber.length !== 10) {
        toast.error(" Phone number must be 10 digits!",{ toastId:"number-field" });
        return;
    }
    if (formdata.persons <= 0) {
        toast.error(" Number of persons must be at least 1!",{ toastId:"persons-field" });
        return;
    }

    toast.success(" Booking submitted successfully!",{ toastId:"success-message" });
    
    // Reset form
    SetFormData({
      username: "",
      phonenumber: "",
      persons: "",
      date: "",
      time: "",
    });
    handleClose();
  };

  if (!show) return null; 

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[1050]">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4 text-white">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-yellow-400">Book Your Table</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-white text-2xl leading-none">
            &times;
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="text-yellow-400 block mb-1">Name</label>
              <input
                type="text"
                name="username"
                value={formdata.username}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-yellow-400 block mb-1">Phone Number</label>
              <input
                type="tel"
                name="phonenumber"
                value={formdata.phonenumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              />
            </div>
          </div>
          {/* second row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-yellow-400 block mb-1">Persons</label>
              <input
                type="number"
                name="persons"
                value={formdata.persons}
                onChange={handleChange}
                placeholder="1"
                min="1"
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              />
            </div>
            <div>
              <label className="text-yellow-400 block mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formdata.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              />
            </div>
            <div>
              <label className="text-yellow-400 block mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={formdata.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              />
            </div>
          </div>
          
          {/* Modal Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
            <button
              type="button" 
              className="text-white hover:bg-gray-700 px-6 py-2 rounded transition border border-gray-600"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-semibold transition"
            >
              Book Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;