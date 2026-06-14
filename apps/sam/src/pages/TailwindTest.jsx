
export function TailwindTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl text-center">
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Tailwind is Working 🚀
        </h1>

        <p className="text-white/80 mb-6">
          If you can see gradients, blur, and spacing — Tailwind is fully active.
        </p>

        <button className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition">
          Test Button
        </button>

      </div>
    </div>
  );
}