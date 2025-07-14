import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzd2V0YXJpdGExN0BnbWFpbC5jb20iLCJleHAiOjE3NTI0NzI5NDksImlhdCI6MTc1MjQ3MjA0OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImE4ZWNmZmUyLTg1ODctNDM4Mi04ZGQ1LTg3MGIxOWUyMTkyZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InN3ZXRhIGt1bWFyaSIsInN1YiI6IjhmYjRmMTViLTJlYmYtNGRjNC05OTY0LWQzMzJjZjczMGFlOCJ9LCJlbWFpbCI6InN3ZXRhcml0YTE3QGdtYWlsLmNvbSIsIm5hbWUiOiJzd2V0YSBrdW1hcmkiLCJyb2xsTm8iOiIxMjIxNzEyMyIsImFjY2Vzc0NvZGUiOiJDWnlwUUsiLCJjbGllbnRJRCI6IjhmYjRmMTViLTJlYmYtNGRjNC05OTY0LWQzMzJjZjczMGFlOCIsImNsaWVudFNlY3JldCI6InBjd013ZE5SeHZHcU1yTmMifQ.A8bPkB3jMvER_EOQ4boMS3LNuqUxNDJD9UL6qlrD034";
const BASE_URL = 'http://20.244.56.144/evaluation-service/logs';

export const Log = async (stack, level, pkg, message) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
    console.log('✅ Log sent:', response.data.message);
  } catch (error) {
    console.error('❌ Logging failed:', error?.response?.data || error.message);
  }
};
