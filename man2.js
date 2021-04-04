// fetching and executing script from other url
function injectScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`unable to load script: ${src}`));
    document.head.appendChild(script);
  });
}

injectScript('http://localhost:5500/man1.js')
  .then(() => {
    console.log('Script loaded!');
  })
  .catch((error) => {
    console.error(error);
  });

injectScript('http://localhost:5500/man.js')
  .then(() => {
    console.log('Script loaded!');
  })
  .catch((error) => {
    console.error(error);
  });
