import React from 'react';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { ActionButtonStyle } from './ActionButtonStyles';
import { listState } from '../../../recoil/atom';

export default function ActionButton({ buttonValue, isSimple }) {
  const setList = useSetRecoilState(listState);

  return (
    <ActionButtonStyle
      type="button"
      isSimple={isSimple}
      onClick={() =>
        setList({
          type: buttonValue,
        })
      }
    >
      {buttonValue}
    </ActionButtonStyle>
  );
}

ActionButton.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  isSimple: PropTypes.bool,
};
