export const enhanceAirOutput = (output) => {
  if (!output) return "";
  if (!output.includes("PM2.5")) return output;
  return output.replace("PM2.5", "Air quality index");
};
