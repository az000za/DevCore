class WEBAPPS {
  Apps = {};  
  constructor(webAppLinks){
      this.import(webAppLinks);
  }
  fetch(webAppLinks){
        for (const filePath of filePaths) {
          const url = filePath;
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
  }
}
