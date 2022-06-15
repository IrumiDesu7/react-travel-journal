import locationIcon from '../images/location-icon.png';

export default function Main() {
  return (
    <div className='lists'>
      <img
        src='https://source.unsplash.com/WLxQvbMyfas'
        alt=''
        className='photos'
      />
      <div className='details'>
        <div className='countryContainer'>
          <img src={locationIcon} alt='' className='location-icon' />
          <p className='country'>JAPAN</p>
          <a
            className='gmaps-link'
            href='https://goo.gl/maps/1DGM5WrWnATgkSNB8'
          >
            View on Google Maps
          </a>
        </div>
        <h1 className='location-name'>Mount Fuji</h1>
        <div className='date'>12 Jan, 2021 - 24 Jan, 2021</div>
        <p className='location-desc'>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters.
          Mount Fuji is the single most popular tourist site in Japan, for both
          Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
