import { useState } from "react";
import {
  BookOpen,
  HandHeart,
  HeartPulse,
  Leaf,
  Users,
  Wrench,
} from "lucide-react";

function iconForCategory(category = "") {
  if (/education/i.test(category)) return BookOpen;
  if (/skill|livelihood/i.test(category)) return Wrench;
  if (/health/i.test(category)) return HeartPulse;
  if (/environment/i.test(category)) return Leaf;
  if (/family|community|women/i.test(category)) return HandHeart;
  return Users;
}

export default function ImagePlaceholder({
  src,
  alt = "",
  className = "",
  category = "",
  priority = false,
}) {
  const [failed, setFailed] = useState(false);
  const Icon = iconForCategory(category);
  const hasImage = Boolean(src) && !failed;

  return (
    <div
      className={
        "image-placeholder " +
        className +
        (hasImage ? " has-image" : " image-artwork")
      }
    >
      {hasImage ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-fallback" aria-hidden="true">
          <span>
            <Icon size={30} strokeWidth={1.5} />
          </span>
        </div>
      )}
    </div>
  );
}
