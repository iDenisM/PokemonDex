import './BoardCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const BoardCard = ({ card, children, addClass, attack1Click, attack2Click}) => {
  const { name, attacks, HP } = card || {name: null, attacks: {fast:null, special:null}, HP: null};

  return (
    <div className={['board__card', ...addClass].join(' ')}>
      <Button addClass={['board__card__attack']} onClick={attack1Click}>
        {
          attacks.fast ? 
          (
            <>
              <span className="name">{attacks.fast.name}</span>
              <span className="damage">{attacks.fast.damage}</span>
            </>
          ) :
          (
            <span className="text">Attack fast</span>
          )
        }
      </Button>
      <div className="board__card__holder">
        { children }
        {
          HP !== null && (
            <div className="board__card__health">Health: <span className="text">{HP}</span></div>
          )
        }
      </div>
      <Button addClass={['board__card__attack']} onClick={attack2Click}>
        {
          attacks.special ? 
          (
            <>
              <span className="name">{attacks.special.name}</span>
              <span className="damage">{attacks.special.damage}</span>
            </>
          ) :
          (
            <span className="text">Attack special</span>
          )
        }
      </Button>
      {
        name && (
          <div className="board__card__name">{name}</div>
        )
      }
    </div>
  )
}

BoardCard.propTypes = {
  children: PropTypes.any,
  addClass: PropTypes.array,
  attack1Click: PropTypes.func,
  attack2Click: PropTypes.func,
  card: PropTypes.object
}

BoardCard.defaultProps = {
  addClass: [],
  attack1Click: undefined,
  attack2Click: undefined,
  card: null
};

export default BoardCard;