export type RegionType = {
  name: string;
  state: "SA" | "WA" | "VIC";
  latitude: number;
  longtitude: number;
};

export type WeatherDataType = {
  latitude: number;
  longitude: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly?: { [key: string]: any };
  hourly_units?: { [key: string]: any };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    temperature_2m_mean: number[];
    precipitation_sum: number[];
  };
  daily_units?: { [key: string]: any };
  current_weather?: {
    time: string;
    temperature: number;
    weathercode: number;
    windspeed: number;
    winddirection: number;
  };
};
