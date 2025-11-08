export default function BigText({ children, color = "text-gray-900" }) {
  return (
    <span className={`text-2xl font-bold ${color}`}>
      {children}
    </span>
  );
}