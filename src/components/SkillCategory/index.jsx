import './index.scss';

export function SkillCategory({ title, images }) {
  return (
    <div className='category-card'>
      <h2>{title}</h2>
      <ul className='tech-list'>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.src} alt={image.alt} className='tech-icon' />
            <span>{image.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
