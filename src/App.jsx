import Header from "./components/header/Hader";
import WeatherBoard from "./components/weather/WeatherBoard";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className=" grid place-items-center h-screen">
            <Header />
            <main>
              <section className="mt-20">
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
