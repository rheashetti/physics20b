import SatelliteEmbed from "./satelitemap";

const Background: React.FC = () => {

  return (
    <section id="background">
      <h2> Satellite Constellations </h2>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
        <h4 style={{ flex: 1 }}>
          Elon Musk’s Starlink project, launched by SpaceX, aims to create a global network of satellites to provide internet access, especially in under-covered areas. While the goal is ambitious and could greatly benefit remote regions, Starlink’s growing constellation, over 5,000 satellites as of early 2025, has raised significant concerns among astronomers, environmentalists, and regulators. The rapid deployment of private satellites highlights a legal and ethical gray area in space governance.
          <div style={{ flex: 1 }}>
          <h2> The Outer Space Treaty </h2>
          <h4>
          Currently, there are no binding international regulations that strictly govern private use of near-Earth space. The Outer Space Treaty of 1967, ratified by over 100 countries, establishes that outer space is the "province of all mankind" and prohibits any nation from claiming sovereignty over celestial bodies. However, it lacks enforcement mechanisms and does not clearly address commercial activity or satellite congestion. The Moon Agreement of 1979 attempted to extend the Outer Space Treaty’s principles, but it failed to gain traction, most spacefaring nations, including the U.S., did not sign it. This legal vacuum allows companies like SpaceX to operate with minimal oversight on satellite deployment.
        </h4>
      </div>
        </h4>
        <div style={{ flex: 1 }}>
          <SatelliteEmbed />
        </div>
      </div>
      
    </section>
    
  );
};

export default Background;