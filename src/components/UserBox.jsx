function UserBox() {
  return (
    <div className="row-span-2 grid h-full grid-rows-[68.5%_31.5%] rounded-lg bg-neutral-dark-blue ">
      <div className="grid grid-rows-[43%_57%] rounded-lg bg-primary-blue p-5">
        <div className="-ml-[.13rem] mt-[.1rem] h-[3.25rem] w-[3.25rem] rounded-full border-2">
          <img className="" src="./image-jeremy.png" alt="Profile image" />
        </div>
        <div>
          <p className="text-[.58rem] leading-4 text-neutral-pale-blue">
            Report for
          </p>
          <p className=" text-[1.55rem] font-light leading-[1.8rem]">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[.6rem] rounded-b-lg p-5 text-[.7rem] leading-4 text-neutral-desaturated-blue">
        <p className="-mt-[.3rem]">Daily</p>
        <p className="text-white">Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
}

export default UserBox;
