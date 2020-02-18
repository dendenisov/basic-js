module.exports = function createDreamTeam(members) {
  let team = [];
  if (!Array.isArray(members) || typeof members != 'object') {return false};
  for (let i=0; i<members.length; i++) {
    if (typeof members[i] =="string") {
      if (members[i].length>0) {
      team.push(members[i].trim().toUpperCase());
      }
    }
  }
  return team.sort().join("");
};