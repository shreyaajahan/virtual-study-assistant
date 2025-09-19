import React from 'react';
import WelcomeBanner from './_components/WelcomeBanner';

function Dashboard({ children }) {
  return (
    <div>
      <WelcomeBanner/>
    </div>
  );
}

export default Dashboard;
