import SatelliteEmbed from "./satelitemap";

const Background: React.FC = () => {

  return (
    <section id="background">
      <h2> Starlink and the Limits of Space Law </h2>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
        <h4 style={{ flex: 1 }}>
          In May 2019, Elon Musk’s SpaceX launched 60 megaconstellations, part of a planned 12,000 satellites, also known as Starlink. These satellite constellations aim to provide internet access to rural and under-covered communities. By 2030, it is estimated that there will be more than 100,000 satellites orbiting near-Earth space. However, this rapid expansion has raised significant concerns among astronomers, environmentalists, and regulators, as the quick deployment of private satellites highlights a legal and ethical gray area in space governance.
          <div style={{ flex: 1 }}>
          <p>Currently, there is little regulation of near-Earth space beyond the 1967 Outer Space Treaty, which only addresses how “exploration and use of outer space should be carried on for the benefit of all peoples.” Since it was originally designed to govern weapons and harmful interference, it didn’t anticipate the mass deployment of private satellites. Similarly, the Moon Agreement only covers how resources should be distributed, particularly considering the needs and interests of developing countries and those directly involved in obtaining those resources. However, three of the world’s leading space nations did not even sign it, which further highlights the lack of regulation. This allows companies like SpaceX to operate with minimal oversight on satellite deployment. </p>
      </div>
        </h4>
        <div style={{ flex: 1, marginTop:"2em" }}>
          <div>
            <SatelliteEmbed />
            <p style={{ textAlign: "center", marginTop: "1rem", fontWeight: "bold" , color: "#FFFFFF" }}>
              Live satellite map of Starlink satellites
            </p>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Background;