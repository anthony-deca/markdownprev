import { useState } from 'react';
import marked from 'marked';
import "./App.css";


marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {
  
  const array = [
    `# FreeCodeCamp Libraries`,
    `## I learnt React and Jquery`,
    `* item 1
* Item 2
- Item 3
- Item 4
+ item 5
+ item 5`,
    `[link to Google!](http://google.com)`,
    "Heres some code, `<div></div>`, between 2 backticks.",
    `.first item\n .second item\n .third item`,
    `> A blockquote would look great below the second list item.`,
    `![Tux, the Linux mascot](/assets/images/tux.png)`,
    `**make text bold**`,
    `
    <html>
          <head>
            </head>
            </html>
    `,
  ];
  
  const [text, setText] = useState(array.join('\n'));

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div className="editor-wrap">
        <h3>The Editor</h3>
        <textarea
          id="editor"
          rows="15"
          cols="50"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="preview-wrap">
        <h3>The Preview</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(text, { renderer: renderer }),
          }}
          id="preview"
        ></div>
      </div>
    </>
  );
}

export default App;
