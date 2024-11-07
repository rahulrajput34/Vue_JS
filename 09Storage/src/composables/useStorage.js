import { ref, watch } from 'vue';

export function useStorage(key, val) {
  // Attempt to read the stored value from localStorage
  let storedVal = read();

  // If value is present, retrieve it; otherwise, use the default value
  if (storedVal) {
    val = ref(storedVal);
  } else {
    val = ref(val);
    write();
  }

  // Watch for changes in `val` and write to localStorage
  //TODO: we passed tthe deep watcher over here by just giving the deep:true
  // If we change any property of the object it will change it inside the local storage
  // Its not a better way becuase it might face some problem if its 
  watch(val, write, { deep: true });

  // Function to read and parse data from localStorage
  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  // Function to set data in localStorage
  function write() {
    // If the value is an empty string, remove it from localStorage
    if (val.value == '') {
      localStorage.removeItem(key);
    } else {
      // Serialize the value (useful for objects and arrays) and store it
      localStorage.setItem(key, JSON.stringify(val.value));
    }
  }

  return val;
}
