import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const BoardCard = ({ children, addClass, attack1Click, attack2Click}) => {
  return (
    <div className={['board__card', ...addClass].join(' ')}>
      <div className="board__card__holder">
        <Button addClass={['board__card__attack']} onClick={attack1Click}>
          <span className="text">Attack1</span>
        </Button>
        { children }
        <Button addClass={['board__card__attack']} onClick={attack2Click}>
          <span className="text">Attack2</span>
        </Button>
      </div>
    </div>
  )
}

BoardCard.propTypes = {
  children: PropTypes.any,
  addClass: PropTypes.array,
  attack1Click: PropTypes.func,
  attack2Click: PropTypes.func
}

BoardCard.defaultProps = {
  addClass: [],
  attack1Click: undefined,
  attack2Click: undefined
};

export default BoardCard;