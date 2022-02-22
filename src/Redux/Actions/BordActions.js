export function add_bord_action(payload) {
  return {
    type: "ADD_BORD",
    payload,
  };
}

export function delete_bord_action(payload) {
  return {
    type: "DELETE_BORD",
    payload,
  };
}

export function add_bord_list_id_action(payload) {
  return {
    type: "ADD_BORD_LIST_ID",
    payload,
  };
}
