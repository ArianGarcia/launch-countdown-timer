import CountdownNumberCard from './CountdownNumberCard';

const Countdown = () => {
  
  const calculateTimeLeft = (type: any) => {
    const times = {
      'DAYS': calculateDaysLeft,
      'HOURS': calculateDaysLeft,
      'MINUTES': calculateDaysLeft,
      'SECONDS': calculateDaysLeft,
    }
    console.log(times[type]());
    
    return (12).toString();
  }

  const calculateDaysLeft = () => {
    return 23
  }

  // TODO: change array to a object literal
  const clockData = [
    {text: 'DAYS', count: calculateTimeLeft('DAYS')},
    {text: 'HOURS', count: calculateTimeLeft('HOURS')},
    {text: 'MINUTES', count: calculateTimeLeft('MINUTES')},
    {text: 'SECONDS', count: calculateTimeLeft('SECONDS')},
  ];

  /* TODO: Calculate date with a while by incrementing
  in 22 days every time the actual date pass the due date
  */

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