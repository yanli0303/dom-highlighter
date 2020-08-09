import './index.css';

import { start } from 'dom-highlighter';
import React from 'react';
import { render } from 'react-dom';

const radomColor = () => {
  const colors = ['red', 'pink', 'orange', 'purple', 'blue', 'black', 'green'];
  const int = Math.floor(Math.random() * 1000) % colors.length;
  return colors[int];
};

let id = 0;
start(function(nodes: Node[]) {
  const regex = /\w+/gm;
  const texts = nodes.map(node => node.nodeValue || '');
  return new Promise(function(resolve, reject) {
    const match = (text: string) => {
      const matches = [];
      let m = regex.exec(text);
      while (m !== null) {
        matches.push({
          id: id.toString(),
          color: radomColor(),
          start: m.index,
          end: m.index + m[0].length,
          keyword: m[0],
        });
        id += 1;
        m = regex.exec(text);
      }
      return matches;
    };

    setTimeout(() => {
      try {
        const result = texts.map(match);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }, 5);
  });
}, 20);

render(<div />, document.getElementById('root'));