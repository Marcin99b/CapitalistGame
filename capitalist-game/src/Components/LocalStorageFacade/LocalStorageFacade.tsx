const budgetDefault = 0;
const addPerClickDefault = 1;
const nextUpgradeCostDefault = 10;

export type LocalStorageKey = "BUDGET" | "ADD_PER_CLICK" | "NEXT_UPGRADE_COST";

export const getIntLocalStorage = (key: LocalStorageKey): number => {
  const value = localStorage.getItem(key);
  if (value) return parseInt(value);

  const defaultValue =
    key === "BUDGET"
      ? budgetDefault
      : key === "ADD_PER_CLICK"
      ? addPerClickDefault
      : key === "NEXT_UPGRADE_COST"
      ? nextUpgradeCostDefault
      : 0;
  setIntInLocalStorage(key, defaultValue);

  return defaultValue;
};

export const setIntInLocalStorage = (key: LocalStorageKey, value: number) => {
  localStorage.setItem(key, value.toString());
};

export const resetLocalStorage = () => {
  setIntInLocalStorage("BUDGET", budgetDefault);
  setIntInLocalStorage("ADD_PER_CLICK", addPerClickDefault);
  setIntInLocalStorage("NEXT_UPGRADE_COST", nextUpgradeCostDefault);
};
