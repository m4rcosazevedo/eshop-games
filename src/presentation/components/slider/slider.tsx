import React from 'react'
import SliderItem from '@/presentation/components/slider/slider-item'
import { Items, Wrap } from '@/presentation/components/slider/slider-styles'

export type SliderProps = {
  id: number
  title: string
  image: string
  logo: string
  price: number
  coming: Date
  indicatedFor: string
  indicatedImage: string
  extras: string
  description: string
}

const Slider: React.FC = () => {
  const contents: SliderProps[] = [
    {
      id: 1,
      title: 'The Last of Us Part II',
      image: 'https://i.ibb.co/nfFtT39/the-last-of-us-part-ii-e3-2018-screen-05-ps4-us-10jul18.jpg',
      logo: 'https://www.gamerview.com.br/wp-content/uploads/2020/06/the-last-of-us-part-2-logo.png',
      price: 279.90,
      coming: new Date(2020, 5, 19),
      indicatedFor: '<p>Violência Extrema</p><p>Drogas</p><p>Nudez</p>',
      indicatedImage: 'https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/classind/18.png',
      extras: '<p>1 Jogador</p><p>Saída de vídeo 1080p</p><p>Necessário DUALSHOCK 4</p>',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien enim, feugiat in diam eget, congue laoreet diam. Mauris et auctor diam, ut tempor massa. Etiam mollis pretium molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac cursus ex. Nunc diam risus, imperdiet sit amet diam posuere, gravida molestie lorem. Mauris lacinia vulputate ex, elementum faucibus nisi dapibus in. Suspendisse potenti. Maecenas pharetra dui metus, eu scelerisque risus dignissim quis. Nam consectetur tincidunt nisi, eu iaculis massa venenatis et. Nunc porta est non ultrices rutrum. Mauris efficitur, purus quis pulvinar malesuada, risus ipsum faucibus nunc, in vehicula tortor velit vitae lectus</p><p>Nam fringilla faucibus est, a sagittis nulla. Maecenas felis nisi, sollicitudin a mi quis, feugiat convallis nisi. Etiam ac est lobortis, egestas erat id, vehicula velit. Maecenas eget mattis lorem. Morbi nec sem feugiat, porta tortor quis, fringilla massa. Proin neque nibh, rutrum vitae urna ac, feugiat tristique orci. Morbi nisi enim, vestibulum nec nisl sit amet, varius maximus orci. Curabitur vitae vestibulum nisl. Etiam et lorem posuere, fringilla magna id, tristique eros. Praesent in lectus dolor. Nam nibh orci, sodales eget leo ac, cursus venenatis magna. Phasellus lobortis congue mi, nec pellentesque enim malesuada ac. Donec vitae diam at velit sodales aliquet. Donec ac nibh fermentum, tempor dui id, vulputate dui. Proin laoreet mi eu felis placerat feugiat. Mauris maximus egestas lectus nec efficitur.</p>'
    },
    {
      id: 2,
      title: 'The Last of Us Part II',
      image: 'https://i.ibb.co/pfynNSL/the-last-of-us-state-of-play-screen-06-ps4-us-24sep19.jpg',
      logo: 'https://www.gamerview.com.br/wp-content/uploads/2020/06/the-last-of-us-part-2-logo.png',
      price: 279.90,
      coming: new Date(2020, 5, 19),
      indicatedFor: '<p>Violência Extrema</p><p>Drogas</p><p>Nudez</p>',
      indicatedImage: 'https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/classind/18.png',
      extras: '<p>1 Jogador</p><p>Saída de vídeo 1080p</p><p>Necessário DUALSHOCK 4</p>',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien enim, feugiat in diam eget, congue laoreet diam. Mauris et auctor diam, ut tempor massa. Etiam mollis pretium molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac cursus ex. Nunc diam risus, imperdiet sit amet diam posuere, gravida molestie lorem. Mauris lacinia vulputate ex, elementum faucibus nisi dapibus in. Suspendisse potenti. Maecenas pharetra dui metus, eu scelerisque risus dignissim quis. Nam consectetur tincidunt nisi, eu iaculis massa venenatis et. Nunc porta est non ultrices rutrum. Mauris efficitur, purus quis pulvinar malesuada, risus ipsum faucibus nunc, in vehicula tortor velit vitae lectus</p><p>Nam fringilla faucibus est, a sagittis nulla. Maecenas felis nisi, sollicitudin a mi quis, feugiat convallis nisi. Etiam ac est lobortis, egestas erat id, vehicula velit. Maecenas eget mattis lorem. Morbi nec sem feugiat, porta tortor quis, fringilla massa. Proin neque nibh, rutrum vitae urna ac, feugiat tristique orci. Morbi nisi enim, vestibulum nec nisl sit amet, varius maximus orci. Curabitur vitae vestibulum nisl. Etiam et lorem posuere, fringilla magna id, tristique eros. Praesent in lectus dolor. Nam nibh orci, sodales eget leo ac, cursus venenatis magna. Phasellus lobortis congue mi, nec pellentesque enim malesuada ac. Donec vitae diam at velit sodales aliquet. Donec ac nibh fermentum, tempor dui id, vulputate dui. Proin laoreet mi eu felis placerat feugiat. Mauris maximus egestas lectus nec efficitur.</p>'
    },
    {
      id: 3,
      title: 'The Last of Us Part II',
      image: 'https://i.ibb.co/Dr04T6Y/the-last-of-us-part-ii-e3-2018-screen-02-ps4-us-10jul18.jpg',
      logo: 'https://www.gamerview.com.br/wp-content/uploads/2020/06/the-last-of-us-part-2-logo.png',
      price: 279.90,
      coming: new Date(2020, 5, 19),
      indicatedFor: '<p>Violência Extrema</p><p>Drogas</p><p>Nudez</p>',
      indicatedImage: 'https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/classind/18.png',
      extras: '<p>1 Jogador</p><p>Saída de vídeo 1080p</p><p>Necessário DUALSHOCK 4</p>',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien enim, feugiat in diam eget, congue laoreet diam. Mauris et auctor diam, ut tempor massa. Etiam mollis pretium molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac cursus ex. Nunc diam risus, imperdiet sit amet diam posuere, gravida molestie lorem. Mauris lacinia vulputate ex, elementum faucibus nisi dapibus in. Suspendisse potenti. Maecenas pharetra dui metus, eu scelerisque risus dignissim quis. Nam consectetur tincidunt nisi, eu iaculis massa venenatis et. Nunc porta est non ultrices rutrum. Mauris efficitur, purus quis pulvinar malesuada, risus ipsum faucibus nunc, in vehicula tortor velit vitae lectus</p><p>Nam fringilla faucibus est, a sagittis nulla. Maecenas felis nisi, sollicitudin a mi quis, feugiat convallis nisi. Etiam ac est lobortis, egestas erat id, vehicula velit. Maecenas eget mattis lorem. Morbi nec sem feugiat, porta tortor quis, fringilla massa. Proin neque nibh, rutrum vitae urna ac, feugiat tristique orci. Morbi nisi enim, vestibulum nec nisl sit amet, varius maximus orci. Curabitur vitae vestibulum nisl. Etiam et lorem posuere, fringilla magna id, tristique eros. Praesent in lectus dolor. Nam nibh orci, sodales eget leo ac, cursus venenatis magna. Phasellus lobortis congue mi, nec pellentesque enim malesuada ac. Donec vitae diam at velit sodales aliquet. Donec ac nibh fermentum, tempor dui id, vulputate dui. Proin laoreet mi eu felis placerat feugiat. Mauris maximus egestas lectus nec efficitur.</p>'
    },
    {
      id: 4,
      title: 'The Last of Us Part II',
      image: 'https://i.ibb.co/YQxqpq5/the-last-of-us-part-ii-pgw-screen-10-ps4-us-10jul18.jpg',
      logo: 'https://www.gamerview.com.br/wp-content/uploads/2020/06/the-last-of-us-part-2-logo.png',
      price: 279.90,
      coming: new Date(2020, 5, 19),
      indicatedFor: '<p>Violência Extrema</p><p>Drogas</p><p>Nudez</p>',
      indicatedImage: 'https://cdn-a.sonyentertainmentnetwork.com/grc/images/ratings/hd/classind/18.png',
      extras: '<p>1 Jogador</p><p>Saída de vídeo 1080p</p><p>Necessário DUALSHOCK 4</p>',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien enim, feugiat in diam eget, congue laoreet diam. Mauris et auctor diam, ut tempor massa. Etiam mollis pretium molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac cursus ex. Nunc diam risus, imperdiet sit amet diam posuere, gravida molestie lorem. Mauris lacinia vulputate ex, elementum faucibus nisi dapibus in. Suspendisse potenti. Maecenas pharetra dui metus, eu scelerisque risus dignissim quis. Nam consectetur tincidunt nisi, eu iaculis massa venenatis et. Nunc porta est non ultrices rutrum. Mauris efficitur, purus quis pulvinar malesuada, risus ipsum faucibus nunc, in vehicula tortor velit vitae lectus</p><p>Nam fringilla faucibus est, a sagittis nulla. Maecenas felis nisi, sollicitudin a mi quis, feugiat convallis nisi. Etiam ac est lobortis, egestas erat id, vehicula velit. Maecenas eget mattis lorem. Morbi nec sem feugiat, porta tortor quis, fringilla massa. Proin neque nibh, rutrum vitae urna ac, feugiat tristique orci. Morbi nisi enim, vestibulum nec nisl sit amet, varius maximus orci. Curabitur vitae vestibulum nisl. Etiam et lorem posuere, fringilla magna id, tristique eros. Praesent in lectus dolor. Nam nibh orci, sodales eget leo ac, cursus venenatis magna. Phasellus lobortis congue mi, nec pellentesque enim malesuada ac. Donec vitae diam at velit sodales aliquet. Donec ac nibh fermentum, tempor dui id, vulputate dui. Proin laoreet mi eu felis placerat feugiat. Mauris maximus egestas lectus nec efficitur.</p>'
    }
  ]

  return (
    <Wrap>
      <Items>
        {contents.map((content) => (
          <SliderItem content={content} key={content.id} />
        ))}
      </Items>
    </Wrap>
  )
}

export default Slider
