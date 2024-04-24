function TimeBox({
  activityIcon,
  iconSize = 'sm:h-12 sm:w-12 h-[4.5rem] w-20',
  iconPosition = 'sm:-mt-[.4rem] sm:mr-[.6rem] -mt-[.6rem] mr-[1rem]',
  activityColor,
  activity,
  currentDuration,
  previousDuration,
}) {
  return (
    <div
      className={`grid h-40 grid-rows-[23%_77%] rounded-xl sm:h-full sm:grid-rows-[19%_81%] ${activityColor} text-base`}
    >
      <div
        className={`flex justify-end overflow-hidden rounded-lg ${activityColor} `}
      >
        <img
          className={`${iconSize} ${iconPosition}`}
          src={activityIcon}
          alt="suitcase"
        />
      </div>
      <div className="group cursor-pointer rounded-lg bg-neutral-dark-blue p-6 font-light focus-within:brightness-100 hover:brightness-[1.75] sm:p-[1.18rem]">
        <div className="mt-1 flex items-center justify-between text-base font-medium sm:-mt-[.4rem] sm:text-[.7rem]">
          <p className="text-[1.1rem] sm:text-[.7rem]">{activity}</p>
          <img
            className="mr-[.05rem] cursor-pointer hover:brightness-150 sm:h-[.2rem] sm:w-[.65rem]"
            src="./icon-ellipsis.svg"
            alt="suitcase"
          />
        </div>
        <div className="flex justify-between sm:block">
          <p className="mt-3 text-[2.15rem] sm:mt-[1.12rem] ">
            {currentDuration}hrs
          </p>
          <p className=" mt-3 text-[.92rem] font-normal text-neutral-pale-blue group-hover:text-neutral-desaturated-blue sm:mt-[.4rem] sm:text-[.57rem]">
            Last Week - {previousDuration}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimeBox;
