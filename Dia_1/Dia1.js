const gift = [1,2,3,4,1,9,3]

// Falla un test
function findFirstRepeatedOld(gifts) {
    let repeated = {
      element: 0,
      indexDiff:0
    }
    gifts.forEach((element,index)=>{
     gifts.forEach((e,i)=>{
      let diff = i - index
      index == 0 ? repeated.indexDiff = diff : false
      if(e == element && index < i && diff < repeated.indexDiff){
        repeated.indexDiff = diff
        repeated.element = element
      }
     })
    })
    if(repeated.element == 0){
      return -1
    }else{
      return repeated.element;
    }
  }

// Falla el 2,8 y 9 pero pasa los secretos
  function findFirstRepeatedSlice(gifts) {
    let repeated = -1
    gifts.forEach((e,i)=>{
      if(gifts.slice(i+1).includes(e) && repeated == -1){
        repeated = e
      }
    })
    return repeated
  }

  //Pass all the test but no a secret one
  function findFirstRepeatedSliceDiff(gifts) {
    let repeated = -1
    let diff = false
    gifts.forEach((e,i)=>{
      if(gifts.slice(i+1).includes(e)){
        let actualDiff = gifts.slice(i+1).indexOf(e)
        if(!diff) diff = actualDiff
        if(actualDiff <= diff ) repeated = e
      }
    })
    return repeated
  }
  
  //Falla un test secreto
  function findFirstRepeatedSet(gifts) {
    let repeated  = -1
    let uniqueGifts = Array.from(new Set(gifts))
    const diffArr = []
    
    uniqueGifts.forEach(e=>{
      let diff = gifts.lastIndexOf(e) - gifts.indexOf(e)
      if(diff != 0)diffArr.push({element: e, difference: diff})
    })
      console.log(diffArr)
      let diff
    diffArr.forEach((d,i)=>{
        if(i==0){
            diff = d.difference
            console.log(`d.difference of`, d.element, '', d.difference)
            repeated = d.element
        } else{
            d.difference < diff ? repeated = d.element : ''  
            console.log(`d.difference of`, d.element, '', d.difference)
            console.log(`diff of`, d.element, '', diff)
        }
    })
  
    return repeated
  }

  console.log(findFirstRepeated(gift))

