import UserBox from './UserBox';

function AppLayout() {
  return (
    <div className=" grid h-[48.5dvh] w-[77dvw] grid-cols-4 grid-rows-2 gap-[1.2rem] text-white">
      <UserBox />
      <div className=" grid h-full grid-rows-[19%_81%] rounded-xl bg-primary-light-orange text-base">
        <div className="  flex justify-end overflow-hidden rounded-lg bg-primary-light-orange">
          <img
            className="-mt-[.4rem] mr-[.6rem] h-12 w-12"
            src="./icon-work.svg"
            alt="suitcase"
          />
        </div>
        <div className="rounded-lg bg-neutral-dark-blue p-[1.18rem] font-light">
          <div className="-mt-[.4rem] flex items-center justify-between text-[.7rem] font-medium">
            <p>Work</p>
            <img
              className="mr-[.1rem] h-[.2rem] w-[.64rem]"
              src="./icon-ellipsis.svg"
              alt="suitcase"
            />
          </div>
          <p className="mt-[1.12rem] text-[2.15rem] ">32hrs</p>
          <p className=" mt-[.4rem] text-[.57rem] font-normal  text-neutral-pale-blue">
            Last Week - 36hrs
          </p>
        </div>
      </div>
      <div className=" flex h-full justify-center rounded-lg bg-neutral-dark-blue p-4 text-base">
        Play
      </div>
      <div className=" flex h-full justify-center rounded-lg bg-neutral-dark-blue p-4 text-base">
        Study
      </div>
      <div className=" flex h-full justify-center rounded-lg bg-neutral-dark-blue p-4 text-base">
        Exercise
      </div>
      <div className=" flex h-full justify-center rounded-lg bg-neutral-dark-blue p-4 text-base">
        Study
      </div>
      <div className=" flex h-full justify-center rounded-lg bg-neutral-dark-blue p-4 text-base">
        Self Care
      </div>
    </div>
  );
}

export default AppLayout;
