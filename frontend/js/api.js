// Auto-detects backend URL — works locally and on Vercel
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3002'
  : 'https://weather-psi-self-16.vercel.app';

async function fetchWeather(city) {
  const response = await fetch(`${API_BASE}/api/weather?city=${encodeURIComponent(city)}`);
  const json = await response.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}
