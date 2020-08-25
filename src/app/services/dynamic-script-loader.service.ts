import { Injectable } from '@angular/core';
interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'host-url', src: 'assets/js/host.url.js?v=7.0.5' },
  { name: 'app-settings', src: 'assets/js/app.settings.js?v=7.0.5' },
  { name: 'plugins-bundle', src: 'assets/plugins/global/plugins.bundle.js?v=7.0.5' },
  { name: 'prismjs-bundle', src: 'assets/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.5' },
  { name: 'scripts-bundle', src: 'assets/js/scripts.bundle.js?v=7.0.5' },
  { name: 'image-input', src: 'assets/js/pages/crud/file-upload/image-input.js?v=7.0.5'}
];

declare var document: any;
@Injectable({
  providedIn: 'root'
})
export class DynamicScriptLoaderService {
  private scripts: any = {};

constructor() {
  ScriptStore.forEach((script: any) => {
    this.scripts[script.name] = {
        loaded: false,
        src: script.src
    };
  });
 }
 load(...scripts: string[]) {
  const promises: any[] = [];
  scripts.forEach((script) => promises.push(this.loadScript(script)));
  return Promise.all(promises);
  }
  loadScript(name: string) {
  return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
          // load script
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = this.scripts[name].src;
        
          if (script.readyState) {  // IE
              script.onreadystatechange = () => {
                  if (script.readyState === 'loaded' || script.readyState === 'complete') {
                      script.onreadystatechange = null;
                      this.scripts[name].loaded = true;
                      resolve({ script: name, loaded: true, status: 'Loaded' });
                  }
              };
          } else {  // Others
              script.onload = () => {
                  this.scripts[name].loaded = true;
                  resolve({ script: name, loaded: true, status: 'Loaded' });
              };
          }
          script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
          document.getElementsByTagName('body')[0].appendChild(script);
      } else {
          resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
  });
  }
}
