import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageError from '../../components/ErrorMessage';
import Menu from '../Menu';
import { clearError } from '../../actions';
import './styles.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error);
  const handleDismiss = () => {
    dispatch(clearError());
  };
  return (
    <div>
      <Menu />
      {errorMessage && (
        <MessageError message={errorMessage} removeError={handleDismiss}/>
      )}
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;
