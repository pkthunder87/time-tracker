import { useState } from 'react';
import TimeBox from './TimeBox';
import UserBox from './UserBox';

import dataJSON from './data.json';

function AppLayout() {
  const [durationDisplay, setDurationDisplay] = useState('daily');

  console.log(dataJSON[0].timeframes.daily.current);

  return (
    <div className=" grid gap-6 text-white sm:h-[48.5dvh] sm:w-[77dvw] sm:grid-cols-4 sm:grid-rows-2 sm:gap-[1.2rem]">
      <UserBox
        setDurationDisplay={setDurationDisplay}
        durationDisplay={durationDisplay}
      />

      <TimeBox
        activityIcon="icon-work.svg"
        activityColor="bg-primary-light-orange"
        activity="Work"
        currentDuration="32"
        previousDuration="36"
      />

      <TimeBox
        activityIcon="icon-play.svg"
        iconPosition="-mt-[.2rem] sm:mr-[.6rem] mr-4"
        activityColor="bg-primary-soft-blue"
        activity="Play"
        currentDuration="10"
        previousDuration="8"
      />

      <TimeBox
        activityIcon="icon-study.svg"
        iconPosition="-mt-[.2rem] sm:mr-[.6rem] mr-4"
        activityColor="bg-primary-light-red"
        activity="Study"
        currentDuration="4"
        previousDuration="7"
      />

      <TimeBox
        activityIcon="icon-exercise.svg"
        iconSize="sm:h-8 sm:w-12 h-[3.4rem] w-20"
        iconPosition=" sm:mr-[.6rem] mr-4"
        activityColor="bg-primary-lime-green"
        activity="Exercise"
        currentDuration="4"
        previousDuration="5"
      />

      <TimeBox
        activityIcon="icon-social.svg"
        iconSize="sm:h-14 sm:w-12 h-[5.6rem] w-20"
        iconPosition="sm:-mt-2 sm:mr-2 -mt-3 mr-3"
        activityColor="bg-primary-violet"
        activity="Social"
        currentDuration="5"
        previousDuration="10"
      />

      <TimeBox
        activityIcon="icon-self-care.svg"
        iconSize="sm:h-10 sm:w-10 h-16 w-16"
        activityColor="bg-primary-yellow"
        activity="Self Care"
        currentDuration="2"
        previousDuration="2"
      />
    </div>
  );
}

export default AppLayout;
