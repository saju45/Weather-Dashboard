import Header from "./components/header/Hader";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherProvider } from "./provider";

export default function App() {
  return (
    <WeatherProvider>
      <div className=" grid place-items-center h-screen">
        <Header />
        <main>
          <section className="mt-20">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}
