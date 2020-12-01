import React, { useState } from 'react';
import { Dialog } from '../../es';
import '../../css/dialog.css';

export function DialogTest() {
  const [v, setV] = useState(false);
  return (
    <>
      <button onClick={() => setV(!v)}>open dialog</button>
      <Dialog visible={v} onClose={() => setV(false)}>
        i am dialog
      </Dialog>
    </>
  );
}
