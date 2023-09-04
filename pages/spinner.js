import React, { useState, useEffect } from 'react';
import StyledSpinner from '../src/components/spinner';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 3-second loading delay
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <>        
        <StyledSpinner />
        <div>Holder for spinner</div>
        </>
      ) : (
        <div>
          {/* Your content when loading is finished */}
          <h1>Welcome to My App</h1>
          {/* ... */}
        </div>
      )}
    </div>
  );
};

export default App;