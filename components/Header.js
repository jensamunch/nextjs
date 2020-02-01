import Link from 'next/link';

const Header = () => (
<ul className="flex mb-5">
  <li className="mr-3">
  <Link href="/">
    <a className="block py-2 px-4 text-gray-900">Home</a>
    </Link>  </li>
    <li className="mr-3">
  <Link href="/about">
    <a className="block py-2 px-4 text-gray-900">About</a>
    </Link>
  </li>
</ul>
);

export default Header;