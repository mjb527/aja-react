module.exports = {

  capitalizeString: str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  capitalizeEveryWord: str => {
    const strings = str.split(' ');
    let r_str = "";

    strings.forEach( stringy => {
      if(stringy === 'and') r_str = r_str + stringy + " ";
      else r_str = r_str + stringy.charAt(0).toUpperCase() + stringy.slice(1) + " ";
    });

    return r_str.trim();

  },
  importAll: (context) => {
    context.keys().forEach(context);
  }

}
