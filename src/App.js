import Calculator from "./Calculator";
import Instructions from "./Instructions";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">React Calculator</h1>
      <Calculator />
      <Instructions />
    </div>
  );
}
