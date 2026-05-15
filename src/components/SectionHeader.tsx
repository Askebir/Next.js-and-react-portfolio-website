export const SectionHeader = () => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent  ">
          Real-world Results
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">
        Featured Projects
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md  mx-auto">
        {" "}
        See how I transformed concepts into engaging digital experiences.
      </p>
    </>
  );
};
