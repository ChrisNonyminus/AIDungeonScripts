/*
Adds "you attempt to" in front of every player input, and attempts to implement stats and skills
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
  var skillPoints = 10+(playerIntelligence/2)
  
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
  if (modifiedText.includes('> You')){
    modifiedText = "\n> You attempt to " + text.substring(7)
  }
  if (!modifiedText.includes('> You')){
    
  for (let i = 0 ; i < 11; i++)
  {
    if (text.includes((i+1)+' Strength') || text.includes('S'+(i+1)) || text.includes('Strength '+(i+1)) || text.includes('STR '+(i+1)))
    {
    playerStrength = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Perception') || text.includes('P'+(i+1)) || text.includes('Perception '+(i+1))) || text.includes('PER '+(i+1)))
    {
    playerPerception = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Endurance') || text.includes('E'+(i+1)) || text.includes('Endurance '+(i+1))) || text.includes('END '+(i+1)))
    {
    playerEndurance = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Charisma') || text.includes('C'+(i+1)) || text.includes('Charisma '+(i+1))) || text.includes('CHR '+(i+1)))
    {
    playerCharisma = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Intelligence') || text.includes('I'+(i+1)) || text.includes('Intelligence '+(i+1))) || text.includes('INT '+(i+1)))
    {
    playerIntelligence = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Agility') || text.includes('A'+(i+1)) || text.includes('Agility '+(i+1))) || text.includes('AGI '+(i+1)))
    {
    playerAgility = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Luck') || text.includes('L'+(i+1)) || text.includes('Luck '+(i+1))) || text.includes('LUC '+(i+1)))
    {
    playerLuck = i;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes('You are Level '+(i+1))) || (text.includes('You are now Level '+(i+1))))
    {
    playerLevel = i+1
    }
  }
  if ((text.includes('Barter *')))
  {
  barterBonus += 15
  }
  if ((text.includes('Energy Weapons *')))
  {
  energyWepBonus += 15
  }
  if ((text.includes('Explosives *')))
  {
  explosivesBonus += 15
  }
  if ((text.includes('Guns *')))
  {
  gunsBonus += 15
  }
  if ((text.includes('Lockpick *')))
  {
  lockpickBonus += 15
  }
  if ((text.includes('Medicine *')))
  {
  medicineBonus += 15
  }
  if ((text.includes('Melee Weapons *')))
  {
  meleeWepBonus += 15
  }
  if ((text.includes('Repair *')))
  {
  repairBonus += 15
  }
  if ((text.includes('Science *')))
  {
  scienceBonus += 15
  }
  if ((text.includes('Sneak *')))
  {
  sneakBonus += 15
  }
  if ((text.includes('Speech *')))
  {
  speechBonus += 15
  }
  if ((text.includes('Survival *')))
  {
  survivalBonus += 15
  }
  if ((text.includes('Unarmed *')))
  {
  unarmedBonus += 15
  }
  }
  
  state.memory = state.memory + '\nYou are level '+playerLevel+'.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerStrength] +' strength.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerPerception] +' perception.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerEndurance] +' endurance.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerCharisma] +' charisma.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerIntelligence] +' intelligence.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerAgility] +' agility.'
  state.memory = state.memory + '\nYou have '+ playerAttributeWord[playerLuck] +' luck.'
  state.memory = state.memory + '\nYour skills:\nBarter: '+(2+(2*playerCharisma)+(playerLuck/2)+barterBonus)+'\nEnergy Weapons: '+(2+(2*playerPerception)+(playerLuck/2)+energyWepBonus)+'\nExplosives: '+(2+(2*playerPerception)+(playerLuck/2)+explosivesBonus)+'\nGuns: '+(2+(2*playerAgility)+(playerLuck/2)+gunsBonus)+'\nLockpick: '+(2+(2*playerPerception)+(playerLuck/2)+lockpickBonus)+'\nMedicine: '+(2+(2*playerIntelligence)+(playerLuck/2)+medicineBonus)+'\nMelee Weapons: '+(2+(2*playerStrength)+(playerLuck/2)+meleeWepBonus)+'\nRepair: '+(2+(2*playerIntelligence)+(playerLuck/2)+repairBonus)+'\nScience: '+(2+(2*playerIntelligence)+(playerLuck/2)+scienceBonus)+'\nSneak: '+(2+(2*playerAgility)+(playerLuck/2)+sneakBonus)+'\nSpeech: '+(2+(2*playerCharisma)+(playerLuck/2)+speechBonus)+'\nSurvival: '+(2+(2*playerEndurance)+(playerLuck/2)+survivalBonus)+'\nUnarmed: '+(2+(2*playerEndurance)+(playerLuck/2)+unarmedBonus)
  state.memory = state.memory + '\nYour traits:\n'+playerTraits
  if(text.includes'/check'){
  state.message = state.message + JSON.stringify(state.memory);
  modifiedText=''
  }
  // You must return an object with the text property defined.
  return {text: modifiedText}
}


modifier(text)
