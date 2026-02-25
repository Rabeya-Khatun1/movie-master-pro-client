import React from 'react';
import { PiFilmSlateLight  } from 'react-icons/pi';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div className="w-[350px] flex items-center gap-2 text-xl font-semibold text-highlight">
<Link to='/'>
        <PiFilmSlateLight  className="text-highlight text-4xl" /></Link>
       <Link to='/'>
<span
  className="text-4xl tracking-wide"
  style={{ fontFamily: "'Oswald', sans-serif" }}
>
  <span className='text-white'>Movie Master</span> Pro
</span>

</Link>
      </div>
    );
};

export default Logo;