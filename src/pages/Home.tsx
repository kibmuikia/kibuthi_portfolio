import { profileConfig } from '../config/profile';

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Welcome to {profileConfig.name}'s Portfolio</h1>
        <p className="text-secondary">{profileConfig.tagline}</p>
        <div className="card">
          <p>{profileConfig.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
