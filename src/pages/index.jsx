import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "40px" }}>
        <h1>Welcome to Ascentify</h1>
        <p>
          Accelerating progress and unlocking new levels of innovation in a
          fast-evolving digital ecosystem.
        </p>
      </main>
    </div>
  );
}
