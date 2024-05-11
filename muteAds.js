function muteAd(){
  const adElement = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.JG5J9NWJkaUO9fiKECMA > footer > div > div.snFK6_ei0caqvFI6As9Q > div > div.j96cpCtZAIdqxcDrYHPI.iZrIHsls0lCEhoMDA9kc > div.w_TTPh4y9H1YD6UrTMHa.r6Psl2_K_0vpdX6vFLQd > div > div > div > div > a");
  let hasAd = false
  if (adElement) {
    // Do something with the selected element
    console.log("Element found!");
    console.log('adElement text',adElement.text);
    const adElementName = adElement.text;
    // Check if 'adver' is in adElementName using in operator
    hasAd = adElementName.includes('Adver')
    if (hasAd){
      console.log('hasAd')
    }else{
      console.log('Not hasAd')
    }
  }
  
  
  //muted or not
  const muteElement = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.JG5J9NWJkaUO9fiKECMA > footer > div > div.pLifNBuHRY8cZkZyEqwL > div > div.G4n5bTzWUvlftzDwrFVG.ExuDUBJ7bk8vT6INnm9F > button");
  let muted = false
  if (muteElement) {
    // Do something with the selected element
    console.log("muteElement found!");
    const ariaLabel = muteElement.getAttribute("aria-label");
    console.log(ariaLabel === 'Mute');
    muted = ariaLabel !== 'Mute'
  } 
  
  if(hasAd && muted){
    console.log('had ad and muted')
  }
  if(hasAd && !muted){
    muteElement.click()
  }
  if(!hasAd && muted){
    muteElement.click()
  }
  if(!hasAd && !muted){
    console.log('Not had ad && Not muted')
  }
}

const intervalId = setInterval(muteAd, 1000);
///
