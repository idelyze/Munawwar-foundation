export default function TeamCard({ name, role, image }) {
  return (
    <article className="team-card">
      <div className="team-card-image-wrap">
        <img
          className="team-card-image"
          src={image}
          alt={`${name} — ${role}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  );
}