import React from 'react';
import { CreditsStyles } from './CreditsStyles';

export default function Credits() {
  return (
    <CreditsStyles>
      <p>
        <small>
          Built with Expo + React.
          <br />
          Data source:
          https://developers.themoviedb.org/3/movies/get-movie-details
        </small>
      </p>
    </CreditsStyles>
  );
}
