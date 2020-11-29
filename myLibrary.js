function isTouching(movObject,MyRect)
{
    if( (movObject.x - MyRect.x )<=(movObject.width + MyRect.width )/2
    && (MyRect.x - movObject.x  )<=(movObject.width + MyRect.width )/2
    && (movObject.y - MyRect.y )<=(movObject.height + MyRect.height )/2
    && (MyRect.y - movObject.y )<=(movObject.height + MyRect.height )/2)
  {
  // 
  return true;
  }
  else
  {
  //
   return false;
  }
}

function addNumbers(num1,num2)
{
  c = num1 + num2
  console.log("The sum is " + c)
}

function bounceOff (object1,object2)
{
     if( (object1.x - object2.x )<=(object1.width + object2.width )/2
     && (object2.x - object1.x  )<=(object1.width + object2.width )/2)
   {
    object1.velocityX = -1*object1.velocityX;
   }
}