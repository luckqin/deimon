import React, { useState, createContext } from 'react';
import ReactDom from 'react-dom';
import { PurePortal, Portal } from '../../es';
import { DialogTest } from './dialog';
import { IconTest } from './icon';

export const ctx = createContext({
  userName: 'xyq',
});

const store1 = {
  userAge: 3,
  changeUserAge: () => {
    store1.userAge = 666;
  },
};

const stores = {
  store1,
};

function Provider({ children }) {
  return <ctx.Provider value={stores}>{children}</ctx.Provider>;
}

function App() {
  const [v, setV] = useState(false);

  return (
    <Provider>
      <div onClick={() => console.log('aaaaaaaa')}>
        <div className="portal-node">content to be overwritten</div>
        {v && (
          <PurePortal selector=".portal-node">
            <div onClick={() => console.log('onclick portal')}>portal</div>
          </PurePortal>
        )}
        <button onClick={() => setV(!v)}>aaa</button>

        <Portal visible={v}>hhh</Portal>

        <br />
        <DialogTest />
        <IconTest />
      </div>
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
