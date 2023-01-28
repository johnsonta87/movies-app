import React from 'react';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';
import { ActionButtonStyle } from './ActionButtonStyles';
import { listState } from '../../../recoil/atom';

export default function ActionButton({
  buttonValue,
  isSimple,
  isSecondaryQuery,
}) {
  const setList = useSetRecoilState(listState);

  return (
    <ActionButtonStyle
      type="button"
      isSimple={isSimple}
      onClick={() =>
        setList({
          type: buttonValue,
          isSecondaryQuery,
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
  isSecondaryQuery: PropTypes.bool,
};
