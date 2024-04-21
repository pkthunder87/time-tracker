import UserBox from './UserBox';

function AppLayout() {
  return (
    <div className=" grid h-[48.5dvh] w-[77dvw] grid-cols-4 grid-rows-2 gap-[1.2rem] text-white">
      <UserBox />
      <div className=" flex h-full justify-center rounded-lg bg-neutral-dark-blue p-4 text-base">
        Work
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
