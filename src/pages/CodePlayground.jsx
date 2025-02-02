import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const CodePlayground = () => {
  const [code, setCode] = useState(`// Write your Three.js code here`);
  const iframeRef = useRef(null);

  useEffect(() => {
    const updatePreview = () => {
      if (iframeRef.current?.contentWindow?.document) {
        const doc = iframeRef.current.contentWindow.document;
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
              <script type="importmap">
                {
                  "imports": {
                    "three": "https://unpkg.com/three@0.159.0/build/three.module.js"
                  }
                }
              </script>
              <style>
                body { margin: 0; }
                canvas { width: 100%; height: 100%; display: block; }
              </style>
            </head>
            <body>
              <script type="module">
                ${code}
              </script>
            </body>
          </html>
        `);
        doc.close();
      }
    };

    const timer = setTimeout(updatePreview, 1000);
    return () => clearTimeout(timer);
  }, [code]);

  const templates = {
    basic: `// Basic Three.js scene
import * as THREE from 'three';
// ...rest of the code`,
    rotatingCube: `// Rotating Cube
import * as THREE from 'three';
// ...rest of the code`,
    // Add more templates
  };

  const loadTemplate = (templateKey) => {
    setCode(templates[templateKey]);
  };

  return (
    <div className="h-screen flex flex-col">
      <Editor
        height="50%"
        defaultLanguage="javascript"
        value={code}
        onChange={setCode}
        theme="vs-dark"
      />
      <iframe
        ref={iframeRef}
        title="preview"
        className="h-[50%] w-full border-t border-gray-600"
        sandbox="allow-scripts"
      />
      <div className="flex space-x-2 mb-4">
        <button onClick={() => loadTemplate('basic')} className="px-4 py-2 bg-[#154734] text-white rounded-lg hover:bg-[#0F3526] transition-colors">
          Basic Scene
        </button>
        <button onClick={() => loadTemplate('rotatingCube')} className="px-4 py-2 bg-[#C75B12] text-white rounded-lg hover:bg-[#B54E0F] transition-colors">
          Rotating Cube
        </button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default CodePlayground;
