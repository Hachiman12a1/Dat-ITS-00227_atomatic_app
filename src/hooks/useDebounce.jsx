function useDebounce(func, delay) {
  let timeout;

  return function executedFunc(...args) {
      if (timeout) {
          clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
          func(...args);
          timeout = null;
      }, delay);
  };
}

export default useDebounce;
