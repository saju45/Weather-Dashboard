import Header from "./components/header/Hader";
import WeatherBoard from "./components/weather/WeatherBoard";

export default function App() {
  return (
    <div className=" grid place-items-center h-screen">
      <Header />
      <main>
        <section className="mt-20">
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}
