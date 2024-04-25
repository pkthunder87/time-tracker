function TimeBox({
  activityIcon,
  iconSize = 'sm:h-12 sm:w-12 h-[4.5rem] w-20 xl:h-20 xl:w-20',
  iconPosition = 'sm:-mt-[.4rem] sm:mr-[.6rem] -mt-[.6rem] mr-[1rem] xl:-mt-3 xl:mr-4',
  activityColor,
  activity,
  currentDuration,
  previousDuration,
  durationDisplay,
  ellipsis = 'mr-[.05rem] cursor-pointer hover:brightness-150 sm:h-[.2rem] sm:w-[.65rem] xl:mr-[4px] xl:mt-[4px] xl:w-[.875rem] xl:scale-150',
}) {
  return (
    <div
      className={`grid h-40 grid-rows-[23%_77%]
      rounded-xl sm:h-full sm:grid-rows-[19%_81%] xl:grid-rows-[18.5%_81.5%]  xl:rounded-3xl ${activityColor} text-base`}
    >
      <div
        className={`flex justify-end overflow-hidden rounded-lg xl:rounded-2xl ${activityColor} `}
      >
        <img
          className={`${iconSize} ${iconPosition}`}
          src={activityIcon}
          alt="suitcase"
        />
      </div>
      <div className="group cursor-pointer rounded-lg bg-neutral-dark-blue p-6 font-light focus-within:brightness-100 hover:brightness-[1.75] sm:p-[1.18rem] xl:rounded-2xl xl:p-[1.9rem]">
        <div className="mt-1 flex items-center justify-between text-base font-medium sm:-mt-[.4rem] sm:text-[.7rem]">
          <p className="text-[1.1rem] sm:text-[.7rem] xl:mt-[.16rem] xl:text-[1.14rem]">
            {activity}
          </p>
          <img
            className={`${ellipsis}`}
            src="./icon-ellipsis.svg"
            alt="suitcase"
          />
        </div>
        <div className="flex justify-between sm:block">
          <p className="mt-3 text-[2.15rem] sm:mt-[1.12rem] xl:mt-[2.8rem] xl:text-[3.5rem]">
            {currentDuration}hrs
          </p>
          <p className=" mt-3 text-[.92rem] font-normal text-neutral-pale-blue group-hover:text-neutral-desaturated-blue sm:mt-[.4rem] sm:text-[.57rem] xl:mt-[1.65rem] xl:text-[.94rem]">
            {durationDisplay === 'daily'
              ? 'Yesterday'
              : durationDisplay === 'weekly'
                ? 'Last Week'
                : 'Last Month'}
            {' - '}
            {previousDuration}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimeBox;
