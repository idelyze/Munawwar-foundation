export default function FoundationInput({
  label = "FOUNDATION INPUT",
  className = "",
}) {
  return (
    <div className={`foundation-input ${className}`}>
      <span>{label}</span>
    </div>
  );
}
