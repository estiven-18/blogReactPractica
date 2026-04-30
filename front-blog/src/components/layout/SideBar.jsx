const SideBar = () => {
  return (
    <div className="sticky top-0 bg-gray-100 rounded-2xl p-4 h-screen overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-800 mb-3">Fútbol</h3>
      
      <div className="space-y-4">
        <div className="border-b border-gray-300 pb-3">
          <h4 className="text-sm font-semibold text-gray-700">Partidos Hoy</h4>
          <ul className="mt-2 space-y-2 text-xs text-gray-600">
            <li>🏆 Real Madrid vs Barcelona - 20:00</li>
            <li>⚽ Atlético vs Sevilla - 21:00</li>
            <li>🥎 PSG vs Monaco - 22:00</li>
          </ul>
        </div>
        
        <div className="border-b border-gray-300 pb-3">
          <h4 className="text-sm font-semibold text-gray-700">Tabla LaLiga</h4>
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            <li>1. Real Madrid - 78 pts</li>
            <li>2. Barcelona - 75 pts</li>
            <li>3. Atlético - 71 pts</li>
            <li>4. Sevilla - 65 pts</li>
          </ul>
        </div>
        
        <div className="border-b border-gray-300 pb-3">
          <h4 className="text-sm font-semibold text-gray-700">Goleadores</h4>
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            <li>⚽ Mbappé - 28 goles</li>
            <li>⚽ Lewy - 22 goles</li>
            <li>⚽ Jude - 19 goles</li>
          </ul>
        </div>
        
        <div className="pb-3">
          <h4 className="text-sm font-semibold text-gray-700">Próxima Fecha</h4>
          <ul className="mt-2 space-y-2 text-xs text-gray-600">
            <li>Sá 12:00 - Betis vs Valencia</li>
            <li>Do 16:15 - Villarreal vs RSO</li>
            <li>Do 18:30 - Athletic vs Osasuna</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;