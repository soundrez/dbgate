import React from 'react';
import styled from 'styled-components';
import { showMenu } from '../modals/DropDownMenu';
import { AppObjectCore } from './AppObjects';
import { useSetOpenedFiles } from '../utility/globalState';

export function AppObjectList({ list, makeAppObj, SubItems = undefined, onObjectClick = undefined }) {
  const setOpenedFiles = useSetOpenedFiles();
  return (list || []).map(x => {
    const appobj = makeAppObj(x, { setOpenedFiles });
    if (onObjectClick) appobj.onClick = onObjectClick;
    let res = <AppObjectCore key={appobj.key} data={x} makeAppObj={makeAppObj} {...appobj} />;
    if (SubItems) {
      res = (
        <>
          {res}
          <SubItems data={x} />
        </>
      );
    }
    return res;
  });
}
