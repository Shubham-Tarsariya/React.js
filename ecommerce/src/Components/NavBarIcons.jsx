import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

const NavBarIcons = () => {
  const iconLinks = [
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/wishlist', icon: Heart, label: 'Wishlist' },
    { to: '/cart', icon: ShoppingBag, label: 'Cart' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {iconLinks.map(({ to, icon: Icon, label }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          className="text-black hover:opacity-60 transition-opacity duration-200"
        >
          <Icon strokeWidth={1.5} className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

export default NavBarIcons;

