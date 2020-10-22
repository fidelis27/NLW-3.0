import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../images/map-marker.svg';
import { AppSidebar } from './styles';

const Sidebar: React.FC = () => {
  const { push } = useHistory();
  function handleApp(): void {
    push('/app');
  }

  return (
    <AppSidebar>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={() => handleApp()}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
