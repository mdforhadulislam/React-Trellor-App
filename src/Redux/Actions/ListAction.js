export function add_list_action(payload) {
  return {
    type: "ADD_LIST",
    payload,
  };
}
export function edit_title_action(payload) {
  return {
    type: "EDIT_TITLE",
    payload,
  };
}
export function delete_list(payload) {
  return {
    type: "DELET_LIST",
    payload,
  };
}
export function add_list_task_id_action(payload) {
  return {
    type: "ADD_LiST_TASK_ID",
    payload,
  };
}
export default function delete_list_task_id_action(payload) {
  return {
    type: "DELETE_LiST_TASK_ID",
    payload,
  };
}
export function move_list_task(payload) {
  return {
    type: "MOVE_LIST_TASK",
    payload,
  };
}

export function copy_list_action(payload) {
  return {
    type: "COPY_LIST",
    payload,
  };
}

export function copy_list_task(payload) {
  return {
    type: "COPY_LIST_TASK",
    payload,
  };
}
export function remove_task_id_from_list(payload) {
  return {
    type: "REMOVE_TASK_ID_FROM_LIST",
    payload,
  };
}

export function sort_task_in_list(payload) {
  return {
    type: "SORT_TASK_ID_IN_LIST",
    payload,
  };
}
