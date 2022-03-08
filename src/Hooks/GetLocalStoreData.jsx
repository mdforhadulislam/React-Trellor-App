const GetLocalSorageData = () => {
  const getData = JSON.parse(localStorage.getItem("manageState"));
  if (getData) {
    return getData;
  } else {
    return {
      bord: [],
      list: [],
      task: [],
    };
  }
};

export default GetLocalSorageData;
