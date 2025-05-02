import React from 'react';
import './timeline.css';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const events: TimelineEvent[] = [
  {
    year: '2019',
    title: 'Starlink Launches Begin',
    description: 'Astronomers raise concerns about satellite brightness.',
  },
  {
    year: '2020',
    title: 'SATCON1',
    description: 'SpaceX tests darker coatings on satellites.',
  },
  {
    year: '2021',
    title: 'SATCON2',
    description: 'Push for public awareness and coordination body.',
  },
  {
    year: '2022',
    title: 'VisorSat Tests',
    description: 'Sunshield designs tested to reduce brightness.',
  },
  {
    year: 'Present',
    title: 'No Official Regulations',
    description: 'Environmental effects still largely unaddressed.',
  },
];

const Timeline: React.FC = () => {
    return (
      <div className="timeline-container">
        <div className="timeline-line" />
        <div className="timeline-track">
          {events.map((event, index) => (
            <div className="timeline-event" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h4>{event.year}</h4>
                <h5>{event.title}</h5>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Timeline;
