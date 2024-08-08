import './index.scss';
import concluImage from './../../assets/images/byebye.png';

export function Conclusion() {
  return (
    <div className='portfolio-conclusion'>
      <div className='portfolio-conclusion-details'>
        <p className='portfolio-conclusion-para'>
          <span className='conclusion-phrase'>
            Merci d'avoir lu mon portfolio 💝
          </span>
        </p>

        <img className='portfolio-conclusion-img' src={concluImage} />
      </div>
    </div>
  );
}
