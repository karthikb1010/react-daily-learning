function Hello(){

  let myName = 'Prashanth';
  let number = 456;
  let fullName=()=>{
    return 'Prashanth Jain';
  }

  return <h3>
    MessageNo:{number} I am your master {fullName()}
  </h3>
}


export default Hello;