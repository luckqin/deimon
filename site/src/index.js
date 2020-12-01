import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { PurePortal, Portal } from '../../es';
import { DialogTest } from './dialog';

function App() {
  const [v, setV] = useState(false);

  return (
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
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
