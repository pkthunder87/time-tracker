function TimeBox({
  activityIcon,
  iconSize = 'h-12 w-12',
  iconPosition = '-mt-[.4rem] mr-[.6rem] ',
  activityColor,
  activity,
  currentDuration,
  previousDuration,
}) {
  return (
    <div
      className={`grid h-full grid-rows-[19%_81%] rounded-xl ${activityColor} text-base`}
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
      <div className="group cursor-pointer rounded-lg bg-neutral-dark-blue p-[1.18rem] font-light focus-within:brightness-100 hover:brightness-[1.75]">
        <div className="-mt-[.4rem] flex items-center justify-between text-[.7rem] font-medium">
          <p>{activity}</p>
          <img
            className="mr-[.05rem] h-[.2rem] w-[.65rem] cursor-pointer hover:brightness-150 "
            src="./icon-ellipsis.svg"
            alt="suitcase"
          />
        </div>
        <p className="mt-[1.12rem] text-[2.15rem] ">{currentDuration}hrs</p>
        <p className=" mt-[.4rem] text-[.57rem] font-normal  text-neutral-pale-blue group-hover:text-neutral-desaturated-blue">
          Last Week - {previousDuration}hrs
        </p>
      </div>
    </div>
  );
}

export default TimeBox;
