import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Log } from '../LoggingMiddleware/logger'; 
import { Log } from './logger'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Log("frontend", "info", "page", "App component loaded");
  }, []);

  const fetchData = async () => {
    Log("frontend", "debug", "api", "API fetch started");
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData(res.data.title);
      Log("frontend", "info", "api", "API fetch success");
    } catch (err) {
      Log("frontend", "error", "api", "API fetch failed");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Frontend Test App</h1>
      <button onClick={fetchData}>Fetch Post</button>
      {data && <p>Post Title: {data}</p>}
    </div>
  );
}

export default App;








// "clientID": "8fb4f15b-2ebf-4dc4-9964-d332cf730ae8",
//     "clientSecret": "pcwMwdNRxvGqMrNc"


// {
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbG
// FpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1
// haWwiOiJzd2V0YXJpdGExN0BnbWFpbC5jb20iLCJleHAiOjE3NTI0NzI5NDksImlhdCI6MTc1MjQ3MjA0OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIs
// Imp0aSI6ImE4ZWNmZmUyLTg1ODctNDM4Mi04ZGQ1LTg3MGIxOWUyMTkyZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InN3ZXRhIGt1bWFyaSIsInN1YiI6IjhmYjRmMTViLTJlYmYtNGRjNC05OTY0LWQzMzJjZjczMGFlOCJ9LCJlbWFpbCI6InN3ZXRhcml0YTE3QGdtYWlsLmNvbSIsIm5hbWUiOiJzd2V0YSBrdW1hcmkiLCJyb2xsTm8iOiIxMjIxNzEyMyIsImFjY2Vzc0NvZGUiOiJDWnlwUUsiLCJjbGllbnRJRCI6IjhmYjRmMTViLTJlYmYtNGRjNC05OTY0LWQzMzJjZjczMGFlOCIsImNsaWVudFNlY3JldCI6InBjd013ZE5SeHZHcU1yTmMifQ.A8bPkB3jMvER_EOQ4boMS3LNuqUxNDJD9UL6qlrD034",
//     "expires_in": 1752472949
// }