import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <img src={image} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
      <ul className={styles.stats}>
        <li>
          <span>Followers:</span> {stats.followers}
        </li>
        <li>
          <span>Views:</span> {stats.views}
        </li>
        <li>
          <span>Likes:</span> {stats.likes}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
