import FoundationInput from "./FoundationInput";

export default function ImagePlaceholder({
  src,
  alt = "",
  className = "",
  label = "FOUNDATION INPUT — APPROVED IMAGE",
}) {
  return (
    <div className={`image-placeholder ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div>
          <span className="placeholder-mark">MF</span>
          <FoundationInput label={label} />
        </div>
      )}
    </div>
  );
}
