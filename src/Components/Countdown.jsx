import React from 'react';
import CountdownNumberCard from './CountdownNumberCard';

export default function Countdown() {
  const clock = [
    {text: 'DAYS', count: '08'},
    {text: 'HOURS', count: '23'},
    {text: 'MINUTES', count: '55'},
    {text: 'SECONDS', count: '41'},
  ];

  return (
    clock.map((item) => {
      return (
        <CountdownNumberCard
          key={`${item.text}_Card`}
          text={item.text}
          count={item.count}
        />
      );
    })
  )
}
