/*
*/
const modifier = (text) => {
 
  let modifiedText = text
  var lowered = text.toLowerCase()
  var playerNumericalAttribute = [1,2,3,4,5,6,7,8,9,10]
  var playerAttributeWord = ['pathetic','very bad','bad','poor','average','fair','good','very good','excellent','perfect']
  var playerStrength
  var playerPerception
  var playerEndurance
  var playerCharisma
  var playerIntelligence
  var playerAgility
  var playerLuck
  var playerLevel = 1
  var playerXP = 0
  var skillPoints = 10+(state.playerIntelligence/2)
  
  var barterBonus = 0
  var energyWepBonus = 0
  var explosivesBonus = 0
  var gunsBonus = 0
  var lockpickBonus = 0
  var medicineBonus = 0
  var meleeWepBonus = 0
  var repairBonus = 0
  var scienceBonus = 0
  var sneakBonus = 0
  var speechBonus = 0
  var survivalBonus = 0
  var unarmedBonus = 0
  var playerTraits = []
  if (modifiedText.includes('> You') && !modifiedText.includes('> You say') && !modifiedText.includes('> You talk')){
    var rng = Math.floor(Math.random() * (110 - (state.playerLuck*5)))
    if (rng <= 20)
    {
    modifiedText = "\n> You successfully " + text.substring(7)
    }
    if (rng <= 40 && rng > 20)
    {
    modifiedText = "\n> You " + text.substring(7)
    }
    if (rng <= 50 && rng > 20)
    {
    modifiedText = "\n> You try to " + text.substring(7)
    }
    if (rng <= 80 && rng > 50)
    {
    modifiedText = "\n> You fail to " + text.substring(7)
    }
    if (rng <= 100 && rng > 80)
    {
    modifiedText = "\n> You spectacularly fail to " + text.substring(7)
    }
  }
  if (modifiedText.includes('> You say') || modifiedText.includes('> You talk'))
  {
    var rng = Math.floor(Math.random() * (110 - (state.playerCharisma*5)))
    if (rng <= 20)
    {
    modifiedText = "\n> You successfully " + text.substring(7)
    }
    if (rng <= 40 && rng > 20)
    {
    modifiedText = "\n> You try hard to " + text.substring(7)
    }
    if (rng <= 50 && rng > 20)
    {
    modifiedText = "\n> You try to " + text.substring(7)
    }
    if (rng <= 80 && rng > 50)
    {
    modifiedText = "\n> You fail to " + text.substring(7)
    }
    if (rng <= 100 && rng > 80)
    {
    modifiedText = "\n> You embarrassingly fail to " + text.substring(7)
    }
  }
  if(!text.includes('> You') && text.includes('Your name is ') || text.includes('You are ') && !text.includes('> You'))
  {
  
  for (let i = 0 ; i < 11; i++)
  {
    if (text.includes((i+1)+' Strength') || text.includes('S'+(i+1)) || text.includes('Strength '+(i+1)) || text.includes('STR '+(i+1)))
    {
    state.playerStrength = i
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Perception') || text.includes('P'+(i+1)) || text.includes('Perception '+(i+1))) || text.includes('PER '+(i+1)))
    {
    state.playerPerception = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Endurance') || text.includes('E'+(i+1)) || text.includes('Endurance '+(i+1))) || text.includes('END '+(i+1)))
    {
    state.playerEndurance = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Charisma') || text.includes('C'+(i+1)) || text.includes('Charisma '+(i+1))) || text.includes('CHR '+(i+1)))
    {
    state.playerCharisma = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Intelligence') || text.includes('I'+(i+1)) || text.includes('Intelligence '+(i+1))) || text.includes('INT '+(i+1)))
    {
    state.playerIntelligence = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Agility') || text.includes('A'+(i+1)) || text.includes('Agility '+(i+1))) || text.includes('AGI '+(i+1)))
    {
    state.playerAgility = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Luck') || text.includes('L'+(i+1)) || text.includes('Luck '+(i+1))) || text.includes('LUC '+(i+1)))
    {
    state.playerLuck = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes('You are Level '+(i+1))) || (text.includes('You are now Level '+(i+1))))
    {
    state.playerLevel = i+1
    }
  }
  if ((text.includes('Barter *')))
  {
  state.barterBonus += 15
  }
  if ((text.includes('Energy Weapons *')))
  {
  state.energyWepBonus += 15
  }
  if ((text.includes('Explosives *')))
  {
  state.explosivesBonus += 15
  }
  if ((text.includes('Guns *')))
  {
  state.gunsBonus += 15
  }
  if ((text.includes('Lockpick *')))
  {
  state.lockpickBonus += 15
  }
  if ((text.includes('Medicine *')))
  {
  state.medicineBonus += 15
  }
  if ((text.includes('Melee Weapons *')))
  {
  state.meleeWepBonus += 15
  }
  if ((text.includes('Repair *')))
  {
  state.repairBonus += 15
  }
  if ((text.includes('Science *')))
  {
  state.scienceBonus += 15
  }
  if ((text.includes('Sneak *')))
  {
  state.sneakBonus += 15
  }
  if ((text.includes('Speech *')))
  {
  state.speechBonus += 15
  }
  if ((text.includes('Survival *')))
  {
  state.survivalBonus += 15
  }
  if ((text.includes('Unarmed *')))
  {
  state.unarmedBonus += 15
  }
}
  state.memory = state.memory + '\nYou are level '+playerLevel+'.'
  if(!text.includes('> You') && text.includes('Your name is ') || text.includes('You are ') && !text.includes('> You'))
  {
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerStrength] +' strength.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerPerception] +' perception.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerEndurance] +' endurance.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerCharisma] +' charisma.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerIntelligence] +' intelligence.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerAgility] +' agility.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[state.playerLuck] +' luck.'
  state.memory = state.memory + '\nYour traits:\n'+playerTraits
  state.memory = state.memory + '\nYour skills:\nBarter: '+(2+(2*state.playerCharisma)+(state.playerLuck/2)+state.barterBonus)+'\nEnergy Weapons: '+(2+(2*state.playerPerception)+(state.playerLuck/2)+state.energyWepBonus)+'\nExplosives: '+(2+(2*state.playerPerception)+(state.playerLuck/2)+state.explosivesBonus)+'\nGuns: '+(2+(2*state.playerAgility)+(state.playerLuck/2)+state.gunsBonus)+'\nLockpick: '+(2+(2*state.playerPerception)+(state.playerLuck/2)+state.lockpickBonus)+'\nMedicine: '+(2+(2*state.playerIntelligence)+(state.playerLuck/2)+state.medicineBonus)+'\nMelee Weapons: '+(2+(2*state.playerStrength)+(state.playerLuck/2)+state.meleeWepBonus)+'\nRepair: '+(2+(2*state.playerIntelligence)+(state.playerLuck/2)+state.repairBonus)+'\nScience: '+(2+(2*state.playerIntelligence)+(state.playerLuck/2)+state.scienceBonus)+'\nSneak: '+(2+(2*state.playerAgility)+(state.playerLuck/2)+state.sneakBonus)+'\nSpeech: '+(2+(2*state.playerCharisma)+(state.playerLuck/2)+state.speechBonus)+'\nSurvival: '+(2+(2*state.playerEndurance)+(state.playerLuck/2)+state.survivalBonus)+'\nUnarmed: '+(2+(2*state.playerEndurance)+(state.playerLuck/2)+state.unarmedBonus)

  }  
  if(text.includes('check stats') || text.includes('check skills'))
  {
    state.message = JSON.stringify(state.memory);
  }
  
  // You must return an object with the text property defined.
  return {text: modifiedText}
}


modifier(text)
