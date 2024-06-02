'use client'
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { log } from "console";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherForecast[];
  city: City;
}

interface WeatherForecast {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  pod: string;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}


export default function Home() {

  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ['repoData'],
    queryFn: async() =>
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Nagpur&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56&units=metric`)
    .then((res) =>
        res.json(),
      ),
  })

  console.log("data", data);

  if (isPending)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">
        <AiOutlineLoading3Quarters className='text-4xl font-bold text-rose-500'/>
        </div>
      </div>
    )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="flex flex-col gap-4 bg-gray-200 min-h-screen">
      <Navbar/>
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10-pt-4">
        {/* Todays weather data */}
        <section>
          <div>
            <h2 className="flex gap-1 text-2xl items-end">
              <p></p>
            </h2>
          </div>
        </section>

        {/* 7 days weather forcast */}
        <section></section>
      </main>
    </div>
  );
}
