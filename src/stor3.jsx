import React, { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos.coords);

        const { latitude, longitude } = pos.coords;

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data))
          .catch((err) => setError(err.message));
      },
      (err) => setError(err.message)
    );
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl">

        {/* Title */}
        <h1 className="mb-8 text-center text-4xl font-bold">
          🌤️ Weather App
        </h1>

        {/* Error */}
        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-400">
            <p className="text-lg font-semibold"> Something went wrong</p>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        )}

        {/* Loading */}
        {!error && !weather && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center shadow-xl">
            <p className="text-lg text-zinc-400">
              🌍 Getting your location...
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Please don't go cause its slow.
            </p>
          </div>
        )}

        {/* Weather */}
        {weather && (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

            {/* Location */}
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Your location
              </p>

              <p className="mt-2 text-xl font-semibold">
                📍{" "}
                {position
                  ? `${position.latitude.toFixed(4)}, ${position.longitude.toFixed(4)}`
                  : "Unknown"}
              </p>
            </div>

            {/* Weather card */}
            <div className="rounded-2xl bg-zinc-950 p-6">

              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                Current weather
              </p>

              {weather.current_weather ? (
                <div className="mt-6">

                  {/* Temperature */}
                  <p className="text-6xl font-bold">
                    {weather.current_weather.temperature}°C
                  </p>

                  {/* Wind */}
                  <div className="mt-6 flex gap-4">

                    <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                      <p className="text-sm text-zinc-500">
                        💨 Wind
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        {weather.current_weather.windspeed} m/s
                      </p>
                    </div>

                    <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                      <p className="text-sm text-zinc-500">
                        🧭 Direction
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        {weather.current_weather.winddirection}°
                      </p>
                    </div>

                  </div>
                </div>
              ) : (
                <p className="mt-4 text-zinc-400">
                  Weather data unavailable.
                </p>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;