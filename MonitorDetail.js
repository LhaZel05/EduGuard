import React, { useState, useEffect } from 'react';
import './MonitorDetail.css'; // Assuming you will create a CSS file for styling
import { motion } from 'framer-motion'; // Import for animations

const MonitorDetail = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated fetch function to get monitor details
    const fetchDetails = async () => {
      try {
        const response = await fetch('/api/monitor-details'); // Replace with actual API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      className="monitor-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{details.name}</h2>
      <p>Resolution: {details.resolution}</p>
      <p>Size: {details.size}</p>
      <p>Refresh Rate: {details.refreshRate}</p>
      {/* Add more details as needed */}
    </motion.div>
  );
};

export default MonitorDetail;