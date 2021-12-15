import CountdownNumberCard from './CountdownNumberCard';

const Countdown = () => {
  const clockData = [
    {text: 'DAYS', count: '08'},
    {text: 'HOURS', count: '23'},
    {text: 'MINUTES', count: '55'},
    {text: 'SECONDS', count: '41'},
  ];

  const clockCards = clockData.map((item) => {
    return (
      <CountdownNumberCard
        key={`${item.text}_Card`}
        text={item.text}
        count={item.count}
      />
    );
  });

  return (
    <div id='timer'>
      {clockCards}
    </div>
  )
}

export default Countdown;