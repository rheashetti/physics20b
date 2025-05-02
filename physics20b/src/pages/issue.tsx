import React from 'react';
import starlinkImage from '../assets/starlink.png';

const Issue : React.FC = () => {

    return (
        <section id="issue">
            <h2> The Cost of Connectivity</h2>
            <h4> So why are these satellite constellations such a big deal anyway?  </h4>
            <h4> One major concern is the reduced visibility of stars due to satellite light pollution. As satellite constellations grow, they reflect sunlight, creating bright trails across the sky that obstruct views of natural celestial objects. According to SATCON 2, a workshop held to address the growing concerns about satellite constellations, the number of stars visible to us by the naked eye would be reduced by half. This not only impacts astronomers studying the night sky, but also everyday people like us who simply want to admire the night sky. </h4>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
                <h4 style={{flex: 1}}> Another concern is the interference of these satellites with already existing astronomical infrastructure that serves to tell us more about space. Ground-based telescopes, like those in Chile or Hawaii, rely on precise imaging and long exposure times, both of which are disrupted by satellites streaking across their fields of view. In addition, since there are so many satellites orbiting near Earth, there is an increased risk of collisions with observational satellites. In fact, in 2019, the European Space Agency had to move one of their satellites to avoid a collision after SpaceX failed to respond to the issue. The lifespans of these satellites are also very short, only lasting about 3 to 4 years until they become space debris, posing even more collision risks for other satellites and future space launches. Radio telescopes also face interference, as Starlink and similar networks transmit in radio frequencies. This disrupts efforts to study the universe and monitor cosmic events, undermining decades of scientific exploration. </h4>
                <div style={{ flex: 1 }}>
                    <img src={starlinkImage} style={{flex: 1, width: "100%", height: "auto", marginTop: "2em"}}/>
                    <p style={{ textAlign: "center", marginTop: "1rem", fontWeight: "bold" , color: "#FFFFFF" }}>
                        Image with Starlink interference
                    </p>
                </div>
            </div>
            <h4> Lastly, satellite constellations also pose a threat to our environment. Since their lifespans are so short, they eventually fall out of orbit and burn up, and in the process may release harmful compounds into Earth’s upper atmosphere. The large number of launches also contributes to carbon emissions, and the risk of space debris from satellite collisions increases with every launch. Some researches also warn that certain species that rely on natural light cycles may be affected as the sky brightness changes. </h4>
            <h4> From obstructing stargazing and disrupting astronomical research to increasing space debris and environmental risks, satellite constellations raise serious concerns that go far beyond just providing global internet access. </h4>
        </section>
    )

};

export default Issue;