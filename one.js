const one = (sec) => new Promise(resolve => setTimeout(resolve, sec * 1000));
export default one;