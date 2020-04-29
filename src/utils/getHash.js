const getHash = () =>
  //=>  #/1/
  location.hash.slice(1).toLocatelowerCase.split('/')[1] || '/'; //=>['',''1,'']

export default getHash;
