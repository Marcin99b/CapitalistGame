const budgetKey = "BUDGET";
const addPerClickKey = "ADD_PER_CLICK";
const nextUpgradeCostKey = "NEXT_UPGRADE_COST";

const budgetDefault = 0;
const addPerClickDefault = 1;
const nextUpgradeCostDefault = 10;

//budget
export const getBudgetFromLocalStorage = (): number => {
  const value = localStorage.getItem(budgetKey);
  if (value) return parseInt(value);
  setBudgetInLocalStorage(budgetDefault);
  return budgetDefault;
};

export const setBudgetInLocalStorage = (value: number) => {
  localStorage.setItem(budgetKey, value.toString());
};

//add per click
export const getAddPerClickFromLocalStorage = (): number => {
  const value = localStorage.getItem(addPerClickKey);
  if (value) return parseInt(value);
  setBudgetInLocalStorage(addPerClickDefault);
  return addPerClickDefault;
};

export const setAddPerClickInLocalStorage = (value: number) => {
  localStorage.setItem(addPerClickKey, value.toString());
};

//next upgrade cost
export const getnextUpgradeCostFromLocalStorage = (): number => {
  const value = localStorage.getItem(nextUpgradeCostKey);
  if (value) return parseInt(value);
  setBudgetInLocalStorage(nextUpgradeCostDefault);
  return nextUpgradeCostDefault;
};

export const setnextUpgradeCostInLocalStorage = (value: number) => {
  localStorage.setItem(nextUpgradeCostKey, value.toString());
};
