import UserBox from './UserBox';

function AppLayout() {
  return (
    <div className=" grid h-[50dvh] w-[80dvw] grid-cols-4 grid-rows-2 gap-5 text-2xl text-white">
      <UserBox />
      <div className=" flex h-full justify-center rounded-xl bg-neutral-dark-blue p-4 text-base">
        Work
      </div>
      <div className=" flex h-full justify-center rounded-xl bg-neutral-dark-blue p-4 text-base">
        Play
      </div>
      <div className=" flex h-full justify-center rounded-xl bg-neutral-dark-blue p-4 text-base">
        Study
      </div>
      <div className=" flex h-full justify-center rounded-xl bg-neutral-dark-blue p-4 text-base">
        Exercise
      </div>
      <div className=" flex h-full justify-center rounded-xl bg-neutral-dark-blue p-4 text-base">
        Study
      </div>
      <div className=" flex h-full justify-center rounded-xl bg-neutral-dark-blue p-4 text-base">
        Self Care
      </div>
    </div>
  );
}

export default AppLayout;
