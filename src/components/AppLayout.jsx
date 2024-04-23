import TimeBox from './TimeBox';
import UserBox from './UserBox';

function AppLayout() {
  return (
    <div className=" grid gap-[1.2rem] text-white sm:h-[48.5dvh] sm:w-[77dvw] sm:grid-cols-4 sm:grid-rows-2">
      <UserBox />

      <TimeBox
        activityIcon="icon-work.svg"
        activityColor="bg-primary-light-orange"
        activity="Work"
        currentDuration="32"
        previousDuration="36"
      />

      <TimeBox
        activityIcon="icon-play.svg"
        iconPosition="-mt-[.2rem] mr-[.6rem]"
        activityColor="bg-primary-soft-blue"
        activity="Play"
        currentDuration="10"
        previousDuration="8"
      />

      <TimeBox
        activityIcon="icon-study.svg"
        iconPosition="-mt-[.2rem] mr-[.6rem]"
        activityColor="bg-primary-light-red"
        activity="Study"
        currentDuration="4"
        previousDuration="7"
      />

      <TimeBox
        activityIcon="icon-exercise.svg"
        iconSize="h-8 w-12"
        iconPosition=" mr-[.6rem]"
        activityColor="bg-primary-lime-green"
        activity="Exercise"
        currentDuration="4"
        previousDuration="5"
      />

      <TimeBox
        activityIcon="icon-social.svg"
        iconSize="h-14 w-12"
        iconPosition="-mt-2 mr-2"
        activityColor="bg-primary-violet"
        activity="Social"
        currentDuration="5"
        previousDuration="10"
      />

      <TimeBox
        activityIcon="icon-self-care.svg"
        iconSize="h-10 w-10"
        activityColor="bg-primary-yellow"
        activity="Self Care"
        currentDuration="2"
        previousDuration="2"
      />
    </div>
  );
}

export default AppLayout;
