// Checkout the repo examples to get an idea of other ways you can use scripting 
// https://github.com/AIDungeon/Scripting/blob/master/examples
const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase()
  
  // The text passed in is either the user's input or players output to modify.
  for (let i = 0 ; i < 500; i++)
  {
    if ((text.includes('You are Level '+(i+1))) || (text.includes('You are now Level '+(i+1))))
    {
  state.memory.context = state.memory.context + '\nYour skills:\nBarter: '+state.Barter+'\nEnergy Weapons: '+state.EnergyWeapons+'\nExplosives: '+state.Explosives+'\nGuns: '+Guns+'\nLockpick: '+Lockpick+'\nMedicine: '+Medicine+'\nMelee Weapons: '+MeleeWeapons+'\nRepair: '+Repair+'\nScience: '+Science+'\nSneak: '+Sneak+'\nSpeech: '+Speech+'\nSurvival: '+Survival+'\nUnarmed: '+Unarmed

     state.playerLevel = i+1
    }
    if ((text.includes('You gain '+ (i+1) +' XP'))||(text.includes('You gain '+ (i+1) +' EXP'))||(text.includes('You gain '+ (i+1) +' experience')))
    {
     state.playerXP = state.playerXP +i+1
    }
  }
  if(state.playerXP>=100)
  {
    modifiedText = text + '\nLEVEL UP\nYou are now Level '+(state.playerLevel+1)+'!' +'\nYou gain a random perk: ' //random because I couldn't be bothered to define every perk and have a script to let players choose, so we'll just hope the AI doesn't fuck up
    state.Barter += state.skillPoints/2 //Likewise, I couldn't be bothered to destribute skill points between skills upon level up
    state.EnergyWeapons += state.skillPoints/2
    state.Explosives += state.skillPoints/2
    state.Guns += state.skillPoints/2
    state.Lockpick += state.skillPoints/2
    state.Medicine += state.skillPoints/2
    state.MeleeWeapons += state.skillPoints/2
    state.Repair += state.skillPoints/2
    state.Science += state.skillPoints/2
    state.Sneak += state.skillPoints/2
    state.Speech += state.skillPoints/2
    state.Survival += state.skillPoints/2
    state.Unarmed += state.skillPoints/2
    state.playerXP = 0
  }
 state.message = JSON.stringify(state.memory);
    // You must return an object with the text property defined. 
    return {text: modifiedText}
}

// Don't modify this part
modifier(text)
