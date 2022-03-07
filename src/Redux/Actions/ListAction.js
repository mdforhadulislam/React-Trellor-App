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
