const userNamesGroupedByLocation = {
  'Tokio': [
    'Aiko',
    'Chizu',
    'Fushigi',
  ],
  'Buenos Aires': [
    'Santiago',
    'Valentina',
    'Lola',
  ],
  'Saint Petersburg': [
    'Sonja',
    'Dunja',
    'Iwan',
    'Tanja',
  ],
};


userNamesGroupedByLocation[Symbol.iterator] = function(){
  const cityKeys = Object.keys(this);
  let cityIndex = 0;
  let userIndex = 0;
  return {
    next: () =>{
      if(cityIndex > cityKeys.length -1){
        return {
          value: undefined,
          done: true
        }
      }
      const users = this[cityKeys[cityIndex]];
      const user = users[userIndex];
      const isLastUser = userIndex >= users.length - 1;
      userIndex++;
      if(isLastUser){
        userIndex = 0;
        cityIndex++;
      }
      
      return {
        done: false,
        value: user,
      }
    }
  }
};

// const iterator = userNamesGroupedByLocation[Symbol.iterator]();
// console.log(iterator.next().value);

for(let i of userNamesGroupedByLocation){
  console.log('name: ', i);
}