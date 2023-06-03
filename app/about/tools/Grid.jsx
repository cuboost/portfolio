export default function Grid({ children }) {
  return (
    <div className="inline-grid grid-cols-2 gap-5 w-10/12 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
