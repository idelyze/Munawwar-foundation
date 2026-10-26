import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function StoryCard({ story }) {
  return (
    <article className="story-card">
      <ImagePlaceholder
        src={story.image}
        alt={story.title}
        category={story.category}
      />
      <div className="story-info">
        <div className="program-meta">
          <span>{story.category}</span>
          <span>{story.date}</span>
        </div>
        <h3>{story.title}</h3>
        <p>{story.excerpt}</p>
        <Link className="text-link" to={"/stories/" + story.slug}>
          Read story <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
