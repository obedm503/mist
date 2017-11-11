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
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  fetch(`/api/patterns`, {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers,
  }).then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};

export const updatePattern = ({ commit }, { id, name }) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  fetch(`/api/patterns/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ name, id }),
    headers,
  }).then(res => res.json()).then(patterns => {
    commit('setPatterns', patterns);
  });
};