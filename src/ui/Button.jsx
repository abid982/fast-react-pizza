import { Link } from 'react-router-dom';

// eslint-disable-next-line
function Button({ children, disabled, to, type }) {
  const className = '';

  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 ring-offset-1 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-2 md:px-6 md:py-3',
    small: base + ' px-4 py-2 md:px-5 md:py-2 text-xs',
    secondary:
      'inline-block border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-400 ring-offset-1 transition-colors duration-300 hover:text-stone-800 focus:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
