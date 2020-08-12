import React from 'react'
import Styles from './slider-styles.scss'
import PositiveHand from '@/presentation/assets/icons/positive-hand.svg'

const Slider: React.FC = () => {
  return (
    <div className={Styles.itemsWrapper}>
      <div className={Styles.items}>
        <div className={`${Styles.item} ${Styles.itemActive}`}>
          <img src="https://i.ibb.co/nfFtT39/the-last-of-us-part-ii-e3-2018-screen-05-ps4-us-10jul18.jpg" alt="imagem 1" />
          <div className={Styles.itemInfo}>
            <div className={Styles.col1}>
              <div className={Styles.logo}>
                <img src="https://www.gamerview.com.br/wp-content/uploads/2020/06/the-last-of-us-part-2-logo.png" alt="The Last of Us Part II" />
              </div>
            </div>
            <div className={Styles.meta}>
              <div>
                <div className={Styles.col1}>
                  <button type="button">
                    <svg>
                      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Comprar R$ 279,90
                  </button>
                </div>
                <div className={Styles.col2}>
                  <h3>Lançamento 19 jun 2020</h3>
                </div>
                <div className={Styles.col3}>
                  <div className={Styles.like}>
                    <img src={PositiveHand} alt=""/>
                  </div>
                </div>
              </div>
              <div>
                <div className={Styles.col1}>
                  <div className={Styles.indicatedFor}>
                    <img src="https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/classind/18.png" alt="Maiores de 18 anos" />
                    <div>
                      <p>Violência Extrema</p>
                      <p>Drogas</p>
                      <p>Nudez</p>
                    </div>
                  </div>
                </div>
                <div className={Styles.col3}>
                  <div>
                    <p>1 Jogador</p>
                    <p>Saída de vídeo 1080p</p>
                    <p>Necessário DUALSHOCK 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.item}>
        </div>
        <div className={Styles.item}>
          <img src="https://i.ibb.co/pfynNSL/the-last-of-us-state-of-play-screen-06-ps4-us-24sep19.jpg" alt="imagem 2" />
        </div>
        <div className={Styles.item}>
          <img src="https://i.ibb.co/Dr04T6Y/the-last-of-us-part-ii-e3-2018-screen-02-ps4-us-10jul18.jpg" alt="imagem 3" />
        </div>
        <div className={Styles.item}>
          <img src="https://i.ibb.co/YQxqpq5/the-last-of-us-part-ii-pgw-screen-10-ps4-us-10jul18.jpg" alt="imagem 4" />
        </div>
      </div>
    </div>
  )
}

export default Slider
