import locationIcon from '../images/location-icon.png';

export default function Main(props) {
  console.log(props.data);
  return (
    <div className='lists'>
      <img src={props.data.imageUrl} alt='' className='photos' />
      <div className='details'>
        <div className='countryContainer'>
          <img src={locationIcon} alt='' className='location-icon' />
          <p className='country'>{props.data.location}</p>
          <a className='gmaps-link' href={props.data.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className='location-name'>{props.data.title}</h1>
        <div className='date'>
          {props.data.startDate} - {props.data.endDate}
        </div>
        <p className='location-desc'>{props.data.description}</p>
      </div>
      {props.data.title !== 'Geirangerfjord' && <hr />}
    </div>
  );
}
