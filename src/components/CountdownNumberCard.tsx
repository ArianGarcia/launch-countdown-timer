import {CountdownNumberCardProps} from '@interfaces/CountdownNumberCard';

const CountdownNumberCard = ({text, count}: CountdownNumberCardProps) => (
  <div className="timer-card">
    <div className="container">
      <div className="top-half"></div>
      <span className="time">{count}</span>
      <div className="bottom-half"></div>
    </div>
    <span className="time-unit">{text}</span>
  </div>
);

export default CountdownNumberCard;