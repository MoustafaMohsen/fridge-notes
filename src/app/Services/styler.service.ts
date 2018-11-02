import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylerService {

  constructor() { }
  scrollById(elId:string,delay=100) {
    console.log("scrolling to",elId);
    
    setTimeout(() => {
      const elementList = document.querySelectorAll('#' + elId);
      if(elementList.length==0)
        return
      const element = elementList[0] as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth' });
    }, delay);
  }

  focusById(elId:string){
    setTimeout(() => {
      const elementList = document.querySelectorAll('#' + elId);
      if(elementList.length==0)
        return
      const element = elementList[0] as HTMLElement;
      element.focus();
    }, 600);
  }
  
  
  CopyToClipboardById(containerid) {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if ((document as any).selection) {
      // IE?
      (document as any).selection.empty();
    }

    if ((document as any).selection) {
      var range = (document.body as any).createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange() as any;
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      //this.snack.open("Copied", "x", { duration: 1000 });
    }
  }
  //
}