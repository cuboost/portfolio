import PlatformIcons from "./PlatformIcons";

export default function Footer() {
  return (
    <footer className="text-center p-6 mt-10">
      {/* Line */}
      <hr className=" border-2 border-solid border-teal-600 my-5 mx-auto rounded-md w-2/3 md:w-1/2 lg:mx-90 max-w-xs" />

      {/* Credits */}
      <h5 className=" p-2 text-gray-800 dark:text-slate-300">
        Made by Cuboost
      </h5>

      {/* Date */}
      <p>Last updated on June 20, 2023</p>

      {/* Platform Icons */}
      <PlatformIcons size="text-xl" />
    </footer>
  );
}
