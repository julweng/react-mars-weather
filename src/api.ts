const API_KEY: string | undefined = process.env.REACT_APP_API_KEY
export const API_URL: string = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
