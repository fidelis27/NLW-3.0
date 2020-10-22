import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { PageMap, CreateOrphanage, PopUp, Header } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';

import mapIcon from '../../utils/mapIcon';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const { signOut, user } = useAuth();
  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <PageMap>
      <aside>
        <Header>
          <Link to="/">
            <p>Meu Perfil</p>
            <span>{user?.name}</span>
          </Link>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <footer>
          <strong>Taquaritinga</strong>
          <span>São Paulo</span>
        </footer>
        <button type="button" onClick={handleSignOut}>
          Sair
          <FaSignOutAlt size={24} color="#fff" title="sair" />
        </button>
      </aside>

      <Map
        center={[-21.4074017, -48.5073056]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <PopUp
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </PopUp>
            </Marker>
          );
        })}
      </Map>

      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </PageMap>
  );
};

export default OrphanagesMap;
