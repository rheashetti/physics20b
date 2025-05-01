const SatelliteEmbed = () => {
    return (
      <iframe
        src="https://satellitemap.space/?norad=53721"
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Satellite Tracker"
      />
    );
  };
  
  export default SatelliteEmbed;