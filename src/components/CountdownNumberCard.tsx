import {CountdownNumberCardProps} from '@interfaces/CountdownNumberCard';

const CountdownNumberCard = ({text, count}: CountdownNumberCardProps) => (
  <div className="timer-card">
    <div className="container">
      <span className="time">{count}</span>
    </div>
    <span className="time-unit">{text}</span>
  </div>
);

export default CountdownNumberCard;