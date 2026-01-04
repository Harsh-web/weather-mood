document.addEventListener("DOMContentLoaded", () => {
  const moodText = document.getElementById("mood");

  function getWeatherMood(temp) {
    if (temp < 15) return "❄️ Thand ka mausam – Garam chai + soft songs";
    if (temp < 25) return "🌤️ Pleasant mausam – Chill vibes";
    if (temp < 35) return "☀️ Garmi – Cool & energetic songs";
    return "🔥 Bahut garmi – Slow & relaxing music";
  }

  // Demo temperature (baad me real weather API lagayenge)
  const demoTemp = 28;
  moodText.innerText = getWeatherMood(demoTemp);
});
