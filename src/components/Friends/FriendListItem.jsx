import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.statusOn : style.statusOff}></span>
      <img className={style.avatar} src={avatar} alt={name} width="50" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
