import { useState } from 'react';
import TimeBox from './TimeBox';
import UserBox from './UserBox';

import dataJSON from './data.json';

function AppLayout() {
  const [durationDisplay, setDurationDisplay] = useState('daily');

  const workDuration =
    durationDisplay === 'daily'
      ? dataJSON[0].timeframes.daily
      : durationDisplay === 'weekly'
        ? dataJSON[0].timeframes.weekly
        : dataJSON[0].timeframes.monthly;

  const playDuration =
    durationDisplay === 'daily'
      ? dataJSON[1].timeframes.daily
      : durationDisplay === 'weekly'
        ? dataJSON[1].timeframes.weekly
        : dataJSON[1].timeframes.monthly;

  const studyDuration =
    durationDisplay === 'daily'
      ? dataJSON[2].timeframes.daily
      : durationDisplay === 'weekly'
        ? dataJSON[2].timeframes.weekly
        : dataJSON[2].timeframes.monthly;

  const exerciseDuration =
    durationDisplay === 'daily'
      ? dataJSON[3].timeframes.daily
      : durationDisplay === 'weekly'
        ? dataJSON[3].timeframes.weekly
        : dataJSON[3].timeframes.monthly;

  const socialDuration =
    durationDisplay === 'daily'
      ? dataJSON[4].timeframes.daily
      : durationDisplay === 'weekly'
        ? dataJSON[4].timeframes.weekly
        : dataJSON[4].timeframes.monthly;

  const selfCareDuration =
    durationDisplay === 'daily'
      ? dataJSON[5].timeframes.daily
      : durationDisplay === 'weekly'
        ? dataJSON[5].timeframes.weekly
        : dataJSON[5].timeframes.monthly;

  return (
    <div className=" grid gap-6 text-white sm:h-[36dvw] sm:w-[77dvw] sm:grid-cols-4 sm:grid-rows-2 sm:gap-[2.1dvw] xl:w-[77.2dvw]">
      <UserBox
        setDurationDisplay={setDurationDisplay}
        durationDisplay={durationDisplay}
      />

      <TimeBox
        activityIcon="icon-work.svg"
        activityColor="bg-primary-light-orange"
        activity="Work"
        currentDuration={workDuration.current}
        previousDuration={workDuration.previous}
        durationDisplay={durationDisplay}
        ellipsis="mr-[.05rem] cursor-pointer hover:brightness-150 sm:h-[.2rem] sm:w-[.65rem] xl:mr-[7px] xl:mt-[4px] xl:scale-150"
      />

      <TimeBox
        activityIcon="icon-play.svg"
        iconSize="sm:h-12 sm:w-12 h-[4.5rem] w-20 xl:h-[4.8rem] xl:w-[4.8rem]"
        iconPosition="-mt-[.2rem] sm:mr-[.6rem] mr-4 xl:-mt-[5px] xl:mr-[1.35rem]"
        activityColor="bg-primary-soft-blue"
        activity="Play"
        currentDuration={playDuration.current}
        previousDuration={playDuration.previous}
        durationDisplay={durationDisplay}
      />

      <TimeBox
        activityIcon="icon-study.svg"
        iconPosition="-mt-[.2rem] sm:mr-[.6rem] mr-4 xl:-mt-2 xl:mr-[1.05rem]"
        activityColor="bg-primary-light-red"
        activity="Study"
        currentDuration={studyDuration.current}
        previousDuration={studyDuration.previous}
        durationDisplay={durationDisplay}
      />

      <TimeBox
        activityIcon="icon-exercise.svg"
        iconSize="sm:h-8 sm:w-12 h-[3.4rem] w-20 xl:h-[3.4rem] xl:w-20"
        iconPosition=" sm:mr-[.6rem] mr-4 xl:mr-[1.1rem] mt-0 xl:-mt-[1px]"
        activityColor="bg-primary-lime-green"
        activity="Exercise"
        currentDuration={exerciseDuration.current}
        previousDuration={exerciseDuration.previous}
        durationDisplay={durationDisplay}
      />

      <TimeBox
        activityIcon="icon-social.svg"
        iconSize="sm:h-14 sm:w-12 h-[5.6rem] w-20 xl:h-24 xl:w-20"
        iconPosition="sm:-mt-2 sm:mr-2 -mt-3 mr-3 xl:mr-3 xl:-mt-3"
        activityColor="bg-primary-violet"
        activity="Social"
        currentDuration={socialDuration.current}
        previousDuration={socialDuration.previous}
        durationDisplay={durationDisplay}
      />

      <TimeBox
        activityIcon="icon-self-care.svg"
        iconSize="sm:h-10 sm:w-10 h-16 w-16 xl:h-[4.2rem] xl:w-[4.2rem]"
        activityColor="bg-primary-yellow"
        activity="Self Care"
        currentDuration={selfCareDuration.current}
        previousDuration={selfCareDuration.previous}
        durationDisplay={durationDisplay}
      />
    </div>
  );
}

export default AppLayout;
