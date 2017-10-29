export const getPatterns = ({ commit }) => {
  fetch('/api/patterns').then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};