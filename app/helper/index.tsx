export const capitalizedFirst = (elem: string) => {
  return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
};

export const FetchAPI = async (URL: any) => {
  try {
    const response = await (await fetch(URL)).json();
    return response;
  } catch (err) {
    console.log("data fetching error : ", err);
    return [];
  }
};
