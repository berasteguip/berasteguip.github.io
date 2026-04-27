export default function SpotlightTitle({
  as: Tag = "h2",
  children,
  className = "",
}) {
  function updateSpotlight(event) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  function handlePointerEnter(event) {
    event.currentTarget.dataset.spotlightActive = "true";
    updateSpotlight(event);
  }

  function handlePointerLeave(event) {
    delete event.currentTarget.dataset.spotlightActive;
  }

  return (
    <Tag
      className={`spotlight-title ${className}`.trim()}
      onPointerEnter={handlePointerEnter}
      onPointerMove={updateSpotlight}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </Tag>
  );
}
