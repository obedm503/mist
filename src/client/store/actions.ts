export const getPatterns = ({ commit }) => {
  fetch('/api/patterns').then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};

export const deletePattern = ({ commit }, { id }) => {
  fetch(`/api/patterns/${id}`, { method: 'DELETE' }).then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};

export const createPattern = ({ commit }, { name }) => {
  fetch(`/api/patterns`, {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};

export const updatePattern = ({ commit }, { id, name }) => {
  fetch(`/api/patterns/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ name, id }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};