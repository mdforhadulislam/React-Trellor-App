export function add_task_action(payload) {
  return {
    type: "ADD_TASK",
    payload,
  };
}
export function delete_task_action(payload) {
  return {
    type: "DELETE_TASK",
    payload,
  };
}
