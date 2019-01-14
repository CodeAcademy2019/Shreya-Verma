function getDependencies(tree, depArray) {
    if (depArray===undefined) { 
        var depArray=[];
    }
    if (tree===undefined || !tree['dependencies']) {
        return [];
    }
    var ins=Object.keys(tree['dependencies']).map((a)=>a+"@"+tree['dependencies'][a]['version']).filter((a) => depArray.indexOf(a)===-1);     
    depArray.push(...ins);
    Object.keys(tree['dependencies']).forEach((a)=>getDependencies(tree['dependencies'][a], depArray)); 
    return depArray.sort();
  }

  module.exports = getDependencies