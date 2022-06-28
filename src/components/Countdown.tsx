import CountdownNumberCard from './CountdownNumberCard';
import { useCountdown } from '../hooks/useCountdown';

const Countdown = ({dueDate}: {dueDate: number}) => {
  const [days, hours, minutes, seconds] = useCountdown(dueDate);

  return (
    <div id='timer'>
      <CountdownNumberCard text="DAYS" count={days.toString()} />
      <CountdownNumberCard text="HOURS" count={hours.toString()} />
      <CountdownNumberCard text="MINUTES" count={minutes.toString()} />
      <CountdownNumberCard text="SECONDS" count={seconds.toString()} />
    </div>
  )
}

export default Countdown;