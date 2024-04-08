function Skeleton({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div className="animate-pulse bg-red-100" key={i} >loading</div>;
    });

  return boxes;
}

export default Skeleton;
