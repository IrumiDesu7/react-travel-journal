import earthIcon from '../images/earth-icon.png';

export default function Navbar() {
  return (
    <nav>
      <img src={earthIcon} alt='' className='earth-icon' />
      <h4 className='navbar-title'>my travel journal.</h4>
    </nav>
  );
}
