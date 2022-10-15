import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const createRootElement = (id: any) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
};

const addRootElement = (rootElem: any) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild!.nextElementSibling
  );
};

const usePortal = (id: any) => {
  const rootElemRef = useRef(null);

  useEffect(() => {
    const rootElemInstance: any = rootElemRef.current;
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild<any>(rootElemInstance);

    return () => {
      rootElemInstance.remove();
      if (!parentElem.childElementCount) {
        parentElem.remove();
      }
    };
  }, [id]);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = <any>document.createElement('div');
    }
    return rootElemRef.current;
  };
  return getRootElem();
};

export const Portal = ({ children, rootId }: any) => {
  const target: any = usePortal(rootId);
  return createPortal(children, target);
};

export default Portal;
