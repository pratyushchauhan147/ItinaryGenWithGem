import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ItineraryDisplay = ({ itineraryData }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 1000); // Delay navigation until exit animation completes
  };

  if (!itineraryData) {
    return <p className="text-gray-500 text-center">No itinerary available.</p>;
  }

  const { destination, duration, travelStyle, interests, dates, itinerary, optionalNotes } = itineraryData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-2">{destination}</h1>
      <p className="text-gray-300">
        <strong>Duration:</strong> {duration} | <strong>Travel Style:</strong> {travelStyle} | <strong>Interests:</strong> {interests} | <strong>Dates:</strong> {dates || "Not specified"}
      </p>

      {/* Render Itinerary Days */}
      {itinerary &&
        Object.entries(itinerary).map(([day, schedule]) => (
          <div key={day} className="mt-6">
            <h2 className="text-2xl font-semibold text-yellow-400">{day}</h2>
            <div className="border-l-4 border-yellow-400 pl-4 mt-2">
              {Object.entries(schedule).map(([timeOfDay, details]) => (
                <div key={timeOfDay} className="mt-4">
                  <h3 className="text-xl font-semibold text-blue-300">{timeOfDay}</h3>
                  <p>
                    <strong>Time:</strong> {details.Time}
                  </p>
                  <p>
                    <strong>Activity:</strong> {details["Activity/Location"]}
                  </p>
                  <p className="text-gray-300">{details["Brief description"]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* Optional Notes */}
      {optionalNotes && (
        <div className="mt-8 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-400">Additional Notes</h2>
          {optionalNotes.transportation && <p><strong>🚗 Transportation:</strong> {optionalNotes.transportation}</p>}
          {optionalNotes.culturalInsights && <p><strong>🎭 Culture:</strong> {optionalNotes.culturalInsights}</p>}
          {optionalNotes.food && <p><strong>🍽️ Food:</strong> {optionalNotes.food}</p>}
        </div>
      )}

      {/* Button to Trigger Page Transition Before Navigation */}
      <button
        onClick={() => handleNavigate("/next-page")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Next Page
      </button>
    </motion.div>
  );
};

export default ItineraryDisplay;
