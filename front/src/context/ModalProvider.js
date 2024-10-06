import React, { createContext, useReducer } from 'react';
import {
  DEMO,
  CONTACTUS,
  CONTACT,
  ESSENTIAL,
  ANALYTICAL,
  GDPRMODAL,
  SUCCESS,
  RESUME_SUCCESS,
} from '@/constant/ActionTypes';
const ModalWithReducer = createContext({
  modalOpenState: {
    demoModalOpen: false,
    successModal: false,
    resumeModal: false,
    contactModalOpen: false,
    showModalGpdr: true,
    useCookie: {
      essential: true,
      analytics: true,
    },
  },

  dispatch: () => {},
});
export { ModalWithReducer };
function reducer(state, action) {
  switch (action.type) {
    case DEMO:
      return {
        demoModalOpen: true,
        successModal: false,
        resumeModal: false,
        contactModalOpen: false,
        showModalGpdr: false,
      };
    case SUCCESS:
      return {
        demoModalOpen: false,
        successModal: true,
        resumeModal: false,
        contactModalOpen: false,
        showModalGpdr: false,
      };
    case RESUME_SUCCESS:
      return {
        demoModalOpen: false,
        successModal: false,
        resumeModal: true,
        contactModalOpen: false,
        showModalGpdr: false,
      };

    case CONTACTUS:
      return {
        demoModalOpen: false,
        successModal: false,
        resumeModal: false,
        contactModalOpen: true,
        showModalGpdr: false,
      };
    case CONTACT:
      return {
        demoModalOpen: false,
        successModal: false,
        resumeModal: false,
        contactModalOpen: false,
        showModalGpdr: false,
      };
    case GDPRMODAL:
      return {
        ...state,
        showModalGpdr: true,
      };
    case ESSENTIAL:
      return {
        ...state,
        useCookie: {
          essential: !state.useCookie?.essential,
          analytics: !!state.useCookie?.analytics,
        },
      };

    case ANALYTICAL:
      return {
        ...state,
        useCookie: {
          analytics: !state.useCookie?.analytics,
          essential: !!state.useCookie?.essential,
        },
      };

    case 'Close':
      return {
        demoModalOpen: false,
        successModal: false,
        resumeModal: false,
        contactModalOpen: false,
        showModalGpdr: false,
      };

    default:
      break;
  }
}
export default function ModalWithReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    demoModalOpen: false,
    successModal: false,
    resumeModal: false,
    contactModalOpen: false,
    showModalGpdr: false,
    useCookie: {
      essential: true,
      analytics: true,
    },
  });
  return (
    <ModalWithReducer.Provider
      value={{ modalOpenState: state, dispatch: dispatch }}
    >
      {children}
    </ModalWithReducer.Provider>
  );
}
