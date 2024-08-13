import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { initializeStore } from './store';
import router from './router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      await initializeStore();
      setIsLoading(false);
    };
    initialize();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
