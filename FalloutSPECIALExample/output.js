
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
     state.memory = state.memory + '\nYour skills:\nBarter: '+(2+(2*(state.playerCharisma+1))+((state.playerLuck+1)/2)+state.barterBonus)+'\nEnergy Weapons: '+(2+(2*(state.playerPerception+1))+((state.playerLuck+1)/2)+state.energyWepBonus)+'\nExplosives: '+(2+(2*(state.playerPerception+1))+((state.playerLuck+1)/2)+state.explosivesBonus)+'\nGuns: '+(2+(2*(state.playerAgility+1))+((state.playerLuck+1)/2)+state.gunsBonus)+'\nLockpick: '+(2+(2*(state.playerPerception+1))+((state.playerLuck+1)/2)+state.lockpickBonus)+'\nMedicine: '+(2+(2*(state.playerIntelligence+1))+((state.playerLuck+1)/2)+state.medicineBonus)+'\nMelee Weapons: '+(2+(2*(state.playerStrength+1))+((state.playerLuck+1)/2)+state.meleeWepBonus)+'\nRepair: '+(2+(2*(state.playerIntelligence+1))+((state.playerLuck+1)/2)+state.repairBonus)+'\nScience: '+(2+(2*(state.playerIntelligence+1))+((state.playerLuck+1)/2)+state.scienceBonus)+'\nSneak: '+(2+(2*(state.playerAgility+1))+((state.playerLuck+1)/2)+state.sneakBonus)+'\nSpeech: '+(2+(2*(state.playerCharisma+1))+((state.playerLuck+1)/2)+state.speechBonus)+'\nSurvival: '+(2+(2*(state.playerEndurance+1))+((state.playerLuck+1)/2)+state.survivalBonus)+'\nUnarmed: '+(2+(2*(state.playerEndurance+1))+((state.playerLuck+1)/2)+state.unarmedBonus)

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
    state.barterBonus += state.skillPoints/2 //Likewise, I couldn't be bothered to destribute skill points between skills upon level up
    state.energyWepBonus += state.skillPoints/2
    state.explosivesBonus += state.skillPoints/2
    state.gunsBonus += state.skillPoints/2
    state.lockpickBonus += state.skillPoints/2
    state.medicineBonus += state.skillPoints/2
    state.meleeWepBonus += state.skillPoints/2
    state.repairBonus += state.skillPoints/2
    state.scienceBonus += state.skillPoints/2
    state.sneakBonus += state.skillPoints/2
    state.speechBonus += state.skillPoints/2
    state.survivalBonus += state.skillPoints/2
    state.unarmedBonus += state.skillPoints/2
    state.playerXP = 0
  }
 state.message = JSON.stringify(state.memory);
    // You must return an object with the text property defined. 
    return {text: modifiedText}
}

// Don't modify this part
modifier(text)
