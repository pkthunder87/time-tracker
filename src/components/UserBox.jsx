function UserBox({ setDurationDisplay, durationDisplay }) {
  const dailyHighlight =
    durationDisplay === 'daily'
      ? 'text-white'
      : 'text-neutral-desaturated-blue';

  const weeklyHighlight =
    durationDisplay === 'weekly'
      ? 'text-white'
      : 'text-neutral-desaturated-blue';

  const monthlyHighlight =
    durationDisplay === 'monthly'
      ? 'text-white'
      : 'text-neutral-desaturated-blue';

  return (
    <div className="grid h-[12rem] w-[87dvw] grid-rows-[64%_36%]  rounded-xl bg-neutral-dark-blue  sm:row-span-2 sm:h-full sm:w-full sm:grid-rows-[68.5%_31.5%] sm:rounded-lg ">
      <div className="flex items-center gap-4  rounded-xl bg-primary-blue  p-7 sm:grid sm:grid-rows-[43%_57%] sm:items-baseline sm:gap-0 sm:rounded-lg sm:p-5">
        <div className="h-[4.2rem] w-[4.2rem] rounded-full border-[3px] sm:-ml-[.13rem] sm:mt-[.1rem] sm:h-[3.25rem] sm:w-[3.25rem] sm:border-2">
          <img className="" src="./image-jeremy.png" alt="Profile image" />
        </div>
        <div>
          <p className="text-[.9rem] leading-6 text-neutral-pale-blue sm:text-[.58rem] sm:leading-4">
            Report for
          </p>
          <p className=" text-[1.5rem] font-light leading-[1.8rem] sm:text-[1.55rem]">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="ml-2 flex justify-between rounded-b-lg p-7 pr-5 text-lg leading-4 sm:ml-0 sm:flex-col sm:justify-normal sm:gap-[.6rem] sm:p-5 sm:text-[.7rem]">
        <p
          onClick={() => {
            if (durationDisplay === 'daily') return;
            setDurationDisplay(() => 'daily');
            console.log(durationDisplay);
          }}
          className={`${dailyHighlight} cursor-pointer hover:text-white sm:-mt-[.3rem]`}
        >
          Daily
        </p>
        <p
          onClick={() => {
            if (durationDisplay === 'weekly') return;
            setDurationDisplay(() => 'weekly');
            console.log(durationDisplay);
          }}
          className={`${weeklyHighlight} cursor-pointer hover:text-white`}
        >
          Weekly
        </p>
        <p
          onClick={() => {
            if (durationDisplay === 'monthly') return;
            setDurationDisplay(() => 'monthly');
            console.log(durationDisplay);
          }}
          className={`${monthlyHighlight} cursor-pointer hover:text-white`}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}

export default UserBox;
