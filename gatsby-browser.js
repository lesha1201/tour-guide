/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'keen-slider/keen-slider.min.css';
import './src/assets/fonts/Nunito/nunito.scss';
import './src/assets/scss/main.scss';
import Modal from 'react-modal';

Modal.defaultStyles = {
  ...Modal.defaultStyles,
  overlay: {
    ...Modal.defaultStyles.overlay,
    backgroundColor: 'rgba(10, 21, 38, 0.9)',
  },
};

export const onInitialClientRender = () => {
  Modal.setAppElement('#___gatsby');
};
