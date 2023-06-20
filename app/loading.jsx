export default function Loading() {
  return (
    <div className=" animate-pulse">
      <div className="mx-auto bg-gradient-to-r from-slate-400 to-slate-500 rounded-full w-60 h-60 mb-5 mt-10 p-6 select-none md:h-72 md:w-72" />

      <div className=" flex flex-col items-center p-5">
        <div className="my-2 h-14 w-52 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl" />
        <div className="my-2 h-9 w-56 bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl" />
        <div className="my-5 h-40 max-w-xl w-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-3xl" />
      </div>

      <div className="pt-2 flex justify-center items-center gap-16">
        <div className=" bg-gradient-to-r from-slate-400 to-slate-500 rounded-full  w-16 h-16" />
        <div className=" bg-gradient-to-r from-slate-400 to-slate-500 rounded-full  w-16 h-16" />
      </div>
    </div>
  );
}
