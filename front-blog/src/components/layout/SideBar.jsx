const SideBar = () => {
  return (
    <div className="sticky top-0 bg-white rounded-lg p-6 shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-screen overflow-y-auto">
      <h3 className="text-[24px] font-bold text-black mb-4">Fútbol</h3>
      
      <div className="space-y-4">
        <div className="border-b border-black pb-4">
          <h4 className="text-[14px] font-medium text-black mb-2">Partidos Hoy</h4>
          <ul className="space-y-2 text-[12px] text-[#4b4b4b]">
            <li>🏆 Real Madrid vs Barcelona - 20:00</li>
            <li>⚽ Atlético vs Sevilla - 21:00</li>
            <li>🥎 PSG vs Monaco - 22:00</li>
          </ul>
        </div>
        
        <div className="border-b border-black pb-4">
          <h4 className="text-[14px] font-medium text-black mb-2">Tabla LaLiga</h4>
          <ul className="space-y-1 text-[12px] text-[#4b4b4b]">
            <li>1. Real Madrid - 78 pts</li>
            <li>2. Barcelona - 75 pts</li>
            <li>3. Atlético - 71 pts</li>
            <li>4. Sevilla - 65 pts</li>
          </ul>
        </div>
        
        <div className="border-b border-black pb-4">
          <h4 className="text-[14px] font-medium text-black mb-2">Goleadores</h4>
          <ul className="space-y-1 text-[12px] text-[#4b4b4b]">
            <li>⚽ Mbappé - 28 goles</li>
            <li>⚽ Lewy - 22 goles</li>
            <li>⚽ Jude - 19 goles</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[14px] font-medium text-black mb-2">Próxima Fecha</h4>
          <ul className="space-y-2 text-[12px] text-[#4b4b4b]">
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