function ProfileCard({ title, handle, image }) {
  // method 1
  // const title = props.title;
  // const handle = props.handle;

  // method 2
  // const { title, handle } = props;

  return (
    <>
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={image} alt={title} />
            </figure>
          </div>

          <div className="card-content">
            <div className="media-content">
              <div className="title is-4">{title}</div>
              <div className="subtitle is-6">{handle}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
