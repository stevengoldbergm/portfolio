// Create badges for skills
function Badge({ reference, source, altText }) {
  return (
    <a href={reference} target="_blank" rel="noreferrer">
      <img src={source} width="36" height="36" alt={altText} />
    </a>
  );
}

export default Badge;