function importHTMLAPP(filePaths) {
  console.log(`

      function ImportHTMLAPP 

      ** gets the file somehow.
      ** converts it into a useable html component.

      returns file name as accessible property

      example

      ./hello.js
      ./goodbye.js

      WebApps.hello(<class constructor params>);


      .............
      Will take any html file.

      all html gets harvested
      all style gets harvested
      all script get harvested

      makes a generic form ui based on
      the class methods.

      any ui this comes with will be optional to view.

      every component will be sandboxed with
      iframes
      and only be able to communicate to eachother with webrtc
      through the ui node manager.
  `);
  const Apps = {};  
    for (const filePath of filePaths) {
      fetch(url, {
        mode: "no-cors"
      })
      .then(response => response.text())
      .then(data => {        
          const url = filePath;
          const fileName = filePath.slice().split('/').pop();
        
          const html = data;
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const body = doc.body.cloneNode(true);
          console.log("imported ", filePath);
          console.log(html);
          const AppName = fileName.split(".").slice().shift();
          const scriptTags = doc.querySelectorAll('script');
          const styleTags = doc.querySelectorAll('style');
          const css = styleTags;
          const javascript = scriptTags;
          scriptTags.forEach((scriptTag, index) => {
            console.log(`Script ${index + 1}:`);
            console.log(scriptTag.textContent); // Extract the JavaScript code
          });
          console.log("AppName",AppName);
          Apps[AppName] = function(){                        
            return new class _ {
              peerID = 0;  // needs to generated
              html = html;
              css = css;
              javascript = javascript;
              constructor(){
                
              }
              renderGenericUI(){
                console.error("renderGenericUI unprogrammed");
              }
              renderCustomUI(){
                console.error("renderCustomUI unprogrammed");
              }
              update(){
                console.error("update unprogrammed");
              }
            }
          }
        
      })
      .catch(error => console.error('Error importing HTML file:', filePath));
    }
    return Apps;
  }
