function hasAdNow() {
    const artistName = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.JG5J9NWJkaUO9fiKECMA > footer > div > div.snFK6_ei0caqvFI6As9Q > div > div.j96cpCtZAIdqxcDrYHPI.iZrIHsls0lCEhoMDA9kc > div.w_TTPh4y9H1YD6UrTMHa.r6Psl2_K_0vpdX6vFLQd > div > div > div > div > span > a")
    if (artistName === null) {
        console.log('artistName not found!')
        return true
    } else {
        console.log('artistName found!', artistName.textContent)
        return false
    }
}

function mutedNow() {
    const muteElement = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.JG5J9NWJkaUO9fiKECMA > footer > div > div.pLifNBuHRY8cZkZyEqwL > div > div.G4n5bTzWUvlftzDwrFVG.ExuDUBJ7bk8vT6INnm9F > button");
    if (muteElement === null) {
        console.log("muteElement not found!");
        return
    }
    console.log("muteElement found!");
    const ariaLabel = muteElement.getAttribute("aria-label");
    console.log(ariaLabel === 'Mute');
    let muted = ariaLabel !== 'Mute'
    return muted
}

function muteAd() {
    let hasAd = hasAdNow()
    let muted = mutedNow()
    const muteElement = document.querySelector("#main > div > div.ZQftYELq0aOsg6tPbVbV > div.JG5J9NWJkaUO9fiKECMA > footer > div > div.pLifNBuHRY8cZkZyEqwL > div > div.G4n5bTzWUvlftzDwrFVG.ExuDUBJ7bk8vT6INnm9F > button");
    if (hasAd && !muted) {
        console.log('has ad and not muted')
        muteElement.click()
    }
    if (!hasAd && muted) {
        console.log('not has ad and muted')
        muteElement.click()
    }
}

const intervalId = setInterval(muteAd, 3000);
///