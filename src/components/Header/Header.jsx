import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className='py-3 shadow bg-blue-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' className="hidden md:block" />
            </Link>
          </div>
          <ul className='flex items-center'>
            {navItems.map((item) => item.active && (
              <NavItem key={item.slug} onClick={() => navigate(item.slug)}>
                {item.name}
              </NavItem>
            ))}
            {authStatus && <LogoutBtn />}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

function NavItem({ children, onClick }) {
  return (
    <li className='ml-2'>
      <button
        onClick={onClick}
        className='inline-block px-3 py-2 text-white transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700 rounded-full'
      >
        {children}
      </button>
    </li>
  );
}

export default Header;
