import React from 'react';
import 'reactflow/dist/style.css';
import Flow from './entity/Flow';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Flow/>
    </div>
  );
}