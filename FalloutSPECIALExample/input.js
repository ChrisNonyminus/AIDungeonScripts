/*
*/
const modifier = (text) => {
  var playerNumericalAttribute = [1,2,3,4,5,6,7,8,9,10]
  var playerAttributeWord = ['pathetic','very bad','bad','poor','average','fair','good','very good','excellent','perfect']
  var playerStrength
  var playerPerception
  var playerEndurance
  var playerCharisma
  var playerIntelligence
  var playerAgility
  var playerLuck
  var playerLevel 
  var playerXP 
  var skillPoints = 10+(state.playerIntelligence/2)
  
  var barterBonus 
  var energyWepBonus 
  var explosivesBonus 
  var gunsBonus 
  var lockpickBonus 
  var medicineBonus 
  var meleeWepBonus 
  var repairBonus 
  var scienceBonus
  var sneakBonus
  var speechBonus
  var survivalBonus
  var unarmedBonus
  var Barter
  var EnergyWeapons
  var Explosives
  var Guns
  var Lockpick
  var Medicine
  var MeleeWeapons
  var Repair
  var Science
  var Sneak
  var Speech
  var Survival
  var Unarmed
  var playerTraits = []
  let modifiedText = text
  var lowered = text.toLowerCase()
  if (modifiedText.includes('> You') && !modifiedText.includes('> You say') && !modifiedText.includes('> You talk')){
    var rng = Math.floor(Math.random() * (110 - (state.playerLuck*5)))
    if (rng <= 20)
    {
    if(state.playerLuck >= 8) modifiedText = "\n> You successfully " + text.substring(7)
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
    if (state.playerLuck <= 5) modifiedText = "\n> You fail to " + text.substring(7)
    }
    if (rng <= 100 && rng > 80)
    {
    if (state.playerLuck <= 3) modifiedText = "\n> You spectacularly fail to " + text.substring(7)
    }
  }
  if (modifiedText.includes('> You say') || modifiedText.includes('> You talk') || modifiedText.includes('> You persuade') || modifiedText.includes('> You tell'))
  {
    var rng = Math.floor(Math.random() * (110 - (state.playerCharisma*5)))
    if (rng <= 20)
    {
    if (state.playerCharisma >= 8 || state.Speech >= rng) modifiedText = "\n> You successfully " + text.substring(7)
    }
    if (rng <= 40 && rng > 20)
    {
    if (state.playerCharisma > 2 && state.playerCharisma <= 8 || state.Speech >= rng) modifiedText = "\n> You " + text.substring(7)
    }
    if (rng <= 50 && rng > 20)
    {
    if (state.playerCharisma > 2 && state.playerCharisma <= 8) modifiedText = "\n> You try to " + text.substring(7)
    }
    if (rng <= 80 && rng > 50)
    {
    if (state.playerCharisma <= 6 || state.Speech <= rng) modifiedText = "\n> You fail to " + text.substring(7)
    }
    if (rng <= 100 && rng > 80)
    {
    if (state.playerCharisma <= 4 || state.Speech <= rng) modifiedText = "\n> You embarrassingly fail to " + text.substring(7)
    }
  }
  if(!text.includes('> You') || text.includes('Your name is ') || text.includes('You are ') && !text.includes('> You'))
  {
  
  for (let i = 0 ; i < 11; i++)
  {
    if (text.includes((i+1)+' Strength') || text.includes('S'+(i+1)) || text.includes('Strength '+(i+1)) || text.includes('STR '+(i+1)))
    {
		state.playerStrength = i+1
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Perception') || text.includes('P'+(i+1)) || text.includes('Perception '+(i+1))) || text.includes('PER '+(i+1)))
    {
		state.playerPerception = i+1;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Endurance') || text.includes('E'+(i+1)) || text.includes('Endurance '+(i+1))) || text.includes('END '+(i+1)))
    {
		state.playerEndurance = i+1;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Charisma') || text.includes('C'+(i+1)) || text.includes('Charisma '+(i+1))) || text.includes('CHR '+(i+1)))
    {
		state.playerCharisma = i+1;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Intelligence') || text.includes('I'+(i+1)) || text.includes('Intelligence '+(i+1))) || text.includes('INT '+(i+1)))
    {
		state.playerIntelligence = i+1;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Agility') || text.includes('A'+(i+1)) || text.includes('Agility '+(i+1))) || text.includes('AGI '+(i+1)))
    {
		state.playerAgility = i+1;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes((i+1)+' Luck') || text.includes('L'+(i+1)) || text.includes('Luck '+(i+1))) || text.includes('LUC '+(i+1)))
    {
		state.playerLuck = i+1;
    }
  }
  for (let i = 0 ; i < 11; i++)
  {
    if ((text.includes('You are Level '+(i+1))) || (text.includes('You are now Level '+(i+1))))
    {
		state.playerLevel = i+1
    }
  }
	state.Barter = (2+(2*(state.playerCharisma+1))+((state.playerLuck+1)/2))
	state.EnergyWeapons = (2+(2*(state.playerPerception+1))+((state.playerLuck+1)/2))
	state.Explosives = (2+(2*(state.playerPerception+1))+((state.playerLuck+1)/2))
	state.Guns = (2+(2*(state.playerAgility+1))+((state.playerLuck+1)/2))
	state.Lockpick = (2+(2*(state.playerPerception+1))+((state.playerLuck+1)/2))
	state.Medicine = (2+(2*(state.playerIntelligence+1))+((state.playerLuck+1)/2))
	state.MeleeWeapons = (2+(2*(state.playerStrength+1))+((state.playerLuck+1)/2))
	state.Repair = (2+(2*(state.playerIntelligence+1))+((state.playerLuck+1)/2))
	state.Science = (2+(2*(state.playerIntelligence+1))+((state.playerLuck+1)/2))
	state.Sneak = (2+(2*(state.playerAgility+1))+((state.playerLuck+1)/2))
	state.Speech = (2+(2*(state.playerCharisma+1))+((state.playerLuck+1)/2))
	state.Survival = (2+(2*(state.playerEndurance+1))+((state.playerLuck+1)/2))
	state.Unarmed = (2+(2*(state.playerEndurance+1))+((state.playerLuck+1)/2))
  if ((text.includes('Barter *')))
  {
  state.Barter += 15
  }
  if ((text.includes('Energy Weapons *')))
  {
  state.EnergyWeapons += 15
  }
  if ((text.includes('Explosives *')))
  {
  state.Explosives += 15
  }
  if ((text.includes('Guns *')))
  {
  state.Guns += 15
  }
  if ((text.includes('Lockpick *')))
  {
  state.Lockpick += 15
  }
  if ((text.includes('Medicine *')))
  {
  state.Medicine += 15
  }
  if ((text.includes('Melee Weapons *')))
  {
  state.MeleeWeapons += 15
  }
  if ((text.includes('Repair *')))
  {
  state.Repair += 15
  }
  if ((text.includes('Science *')))
  {
  state.Science += 15
  }
  if ((text.includes('Sneak *')))
  {
  state.Sneak += 15
  }
  if ((text.includes('Speech *')))
  {
  state.Speech += 15
  }
  if ((text.includes('Survival *')))
  {
  state.Survival += 15
  }
  if ((text.includes('Unarmed *')))
  {
  state.Unarmed += 15
  }
}
  if(!text.includes('> You') && text.includes('Your name is ') || text.includes('You are ') && !text.includes('> You'))
  {
    state.memory.context = state.memory.context + '\nYou are level '+state.playerLevel+'.'
  
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerStrength+1] +' strength.'
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerPerception+1] +' perception.'
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerEndurance+1] +' endurance.'
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerCharisma+1] +' charisma.'
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerIntelligence+1] +' intelligence.'
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerAgility+1] +' agility.'
  state.memory.context = state.memory.context + '\nYou have '+ playerAttributeWord[state.playerLuck+1] +' luck.' 
  state.memory.context = state.memory.context + '\nYour skills:\nBarter: '+state.Barter+'\nEnergy Weapons: '+state.EnergyWeapons+'\nExplosives: '+state.Explosives+'\nGuns: '+Guns+'\nLockpick: '+Lockpick+'\nMedicine: '+Medicine+'\nMelee Weapons: '+MeleeWeapons+'\nRepair: '+Repair+'\nScience: '+Science+'\nSneak: '+Sneak+'\nSpeech: '+Speech+'\nSurvival: '+Survival+'\nUnarmed: '+Unarmed
  state.memory.context = state.memory.context + '\nYour traits:\n'+playerTraits
  }  
  if(text.includes('check stats') || text.includes('check skills'))
  {
  }
 state.message = JSON.stringify(state.memory);
  
  // You must return an object with the text property defined.
  return {text: modifiedText}
}


modifier(text)
