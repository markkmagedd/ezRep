import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-t from-base-100 to-primary min-h-screen">
        <div className="hero bg-base-200 bg-transparent justify-items-center">
          <div className="hero-content text-center">
            <div className="max-w-md">
              {/* Slogan */}
              <h1 className="text-5xl font-extrabold text-white mb-6">
                Make Every Rep Matter
              </h1>
              {/* Catchy Description */}
              <p className="text-lg text-white opacity-90 mb-8">
                Unlock your potential with a dedicated platform to track and
                enhance your workout journey. Every rep counts towards your
                goals.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
