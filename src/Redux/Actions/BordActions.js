export function add_bord_action(payload) {
  return {
    type: "ADD_BORD",
    payload,
  };
}

export function edit_bord_name(payload) {
  return {
    type: "EDIT_BORD_NAME",
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

export function delete_bord_list_id_action(payload) {
  return {
    type: "DELETE_BORD_LIST_ID",
    payload,
  };
}

export function move_bord(payload) {
  return {
    type: "MOVE_LIST",
    payload,
  };
}
export function copy_bord(payload) {
  return {
    type: "COPY_BORD_LIST",
    payload,
  };
}

export function sort_list_id_in_board(payload) {
  return {
    type: "SORT_LIST_ID_IN_BOARD",
    payload,
  };
}
