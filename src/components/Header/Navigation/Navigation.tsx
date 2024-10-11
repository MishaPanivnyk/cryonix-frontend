import { Nav, Link } from './Navigation.styled';
interface NavigationProps {
  onClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
  return (
    <Nav>
      <Link to="/" onClick={onClick}>
        Home
      </Link>
      <Link to="/find" onClick={onClick}>
        Find Books
      </Link>
      <Link to="/trades" onClick={onClick}>
        Trades
      </Link>
    </Nav>
  );
};
