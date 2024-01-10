import { FC } from 'react';
import Slider from 'react-slick';
import styles from './ProjectsSlider.module.scss';
import { data } from './projects.ts';
const ProjectsSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {data.map(item => (
        <div key={item.id}>
          <div className={styles.slider}>
            <div className={styles.sliderImage}>
              <img src={item.picture} alt={`img-${item.id}`} />
            </div>
            <div className={styles.sliderBlockInfo}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <a href={item.url} target="_blank">
                Подробности
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectsSlider;
